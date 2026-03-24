"""Resolve Commons files to stable upload.wikimedia.org URLs and patch data/plants.js."""
import json
import os
import re
import time
import urllib.parse
import urllib.request

_HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(_HERE, ".."))
PLANTS_PATH = os.path.join(ROOT, "data", "plants.js")

# Try after the filename already listed in plants.js (if any). Use exact Commons titles.
FALLBACKS = {
    "quercus-robur": ["Quercus_robur_leaf.jpg", "Quercus_robur_Leaves_and_acorns.jpg"],
    "fagus-sylvatica": ["Fagus_sylvatica_leaves.jpg"],
    "aesculus-hippocastanum": [
        "Aesculus_hippocastanum_1.JPG",
        "Aesculus_hippocastanum_leaves.jpg",
    ],
    "tilia-europaea": [
        "Tilia_x_europea-1.JPG",
        "Tilia_cordata.jpg",
        "Tilia_platyphyllos.jpg",
    ],
    "populus-tremula": ["Populus_tremula_leaf.jpg", "Populus_tremula_1.jpg"],
    "castanea-sativa": ["Castanea_sativa.jpg", "Castanea_sativa_leaves.jpg"],
    "crataegus-monogyna": [
        "Crataegus_monogyna_fruits.jpg",
        "Crataegus_monogyna_-_fruits.jpg",
    ],
    "corylus-avellana": ["Corylus_avellana_2.jpg", "Corylus_avellana_leaves.jpg"],
    "prunus-spinosa": [
        "Prunus spinosa - geograph.org.uk - 161040.jpg",
        "Prunus spinosa Blüte.jpg",
    ],
    "rosa-canina": ["Rosa_canina_1.jpg", "Dog_rose_flower.jpg"],
    "ligustrum-vulgare": ["Ligustrum_vulgare.jpg", "Ligustrum_vulgare_001.jpg"],
    "buxus-sempervirens": ["Buxus_sempervirens.jpg", "Buxus_sempervirens_leaves.jpg"],
    "ilex-aquifolium": ["Ilex_aquifolium.jpg", "Ilex_aquifolium_leaves.jpg"],
    "euonymus-europaeus": [
        "Euonymus_europaeus_1.jpg",
        "Euonymus_europaeus.jpg",
        "Euonymus_europaeus_fruits.jpg",
    ],
    "cornus-sanguinea": [
        "Cornus_sanguinea2.jpg",
        "Cornus_sanguinea_20050902_004.jpg",
    ],
    "taxus-baccata": [
        "Taxus_baccata_1.jpg",
        "Taxus_baccata_leaves.jpg",
        "Taxus_baccata_berries.jpg",
    ],
    "pinus-sylvestris": ["Pinus_sylvestris_tree.jpg"],
}


def api_thumb(title):
    q = urllib.parse.urlencode(
        {
            "action": "query",
            "format": "json",
            "titles": "File:" + title,
            "prop": "imageinfo",
            "iiprop": "url",
            "iiurlwidth": "900",
        }
    )
    url = "https://commons.wikimedia.org/w/api.php?" + q
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "TreeFlashcards/1.0 (local educational app; tree identification)"
        },
    )
    with urllib.request.urlopen(req, timeout=45) as r:
        d = json.load(r)
    pages = d.get("query", {}).get("pages", {})
    for _pid, page in pages.items():
        if page.get("missing"):
            return None
        ii = page.get("imageinfo", [{}])[0]
        return ii.get("thumburl") or ii.get("url")
    return None


def main():
    text = open(PLANTS_PATH, encoding="utf-8").read()
    pattern = re.compile(
        r'(id: "([^"]+)"[\s\S]*?image: ")([^"]+)(")',
        re.MULTILINE,
    )
    failures = []

    def resolve_block(m):
        prefix, pid, old_url, suffix = m.group(1), m.group(2), m.group(3), m.group(4)
        fn = None
        if "Special:FilePath/" in old_url:
            part = old_url.split("Special:FilePath/", 1)[1]
            fn = urllib.parse.unquote(part.split("?")[0])
        cands = []
        if fn:
            cands.append(fn)
        for c in FALLBACKS.get(pid, []):
            if c not in cands:
                cands.append(c)

        got = None
        used = None
        for c in cands:
            time.sleep(0.35)
            thumb = api_thumb(c)
            if thumb:
                got = thumb
                used = c
                break
        print(("OK  " if got else "FAIL ") + pid + " -> " + str(used))
        if not got:
            failures.append(pid)
            return m.group(0)
        return prefix + got + suffix

    new_text, n = pattern.subn(resolve_block, text)
    if n == 0:
        raise SystemExit("No plant entries matched — check plants.js format")

    open(PLANTS_PATH, "w", encoding="utf-8").write(new_text)
    print("Patched", n, "entries in", PLANTS_PATH)
    if failures:
        print("FAILED:", failures)
        raise SystemExit(1)


if __name__ == "__main__":
    main()
