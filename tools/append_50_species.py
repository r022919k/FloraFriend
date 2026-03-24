# -*- coding: utf-8 -*-
"""Append 50 England-focused species to data/plants.js with resolved Commons thumbnails."""
import json
import os
import re
import textwrap
import time
import urllib.parse
import urllib.request

_HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(_HERE, ".."))
PLANTS_PATH = os.path.join(ROOT, "data", "plants.js")

# id, common, scientific, kind, hint, [candidate Commons filenames]
NEW = [
    (
        "quercus-petraea",
        "Sessile oak",
        "Quercus petraea",
        "tree",
        "Stalkless acorns (sessile on twigs); leaf stalks often flush with twig; finer lobes than English oak. Common in western British woodlands.",
        ["Quercus_petraea_leaves.jpg", "Quercus petraea leaves.jpg", "Quercus_petraea_1.jpg"],
    ),
    (
        "carpinus-betulus",
        "Hornbeam",
        "Carpinus betulus",
        "tree",
        "Hard, fluted grey bark; doubly serrate oval leaves with parallel veins; papery winged nuts. Often hedge or understorey on heavy soils.",
        ["Carpinus_betulus_leaves.jpg", "Carpinus_betulus_1.jpg", "Carpinus_betulus_fruits.jpg"],
    ),
    (
        "acer-campestre",
        "Field maple",
        "Acer campestre",
        "tree",
        "Britain’s only native maple: five blunt lobes, opposite; keys in shallow V pairs. Small tree or hedgerow.",
        ["Acer_campestre_leaves.jpg", "Acer_campestre_1.jpg", "Acer_campestre_leaf.jpg"],
    ),
    (
        "acer-platanoides",
        "Norway maple",
        "Acer platanoides",
        "tree",
        "Large palmate leaves with pointed lobes; white sap if petiole broken; paired keys nearly flat. Widely planted; seeds freely.",
        ["Acer_platanoides_leaves.jpg", "Acer_platanoides_1.jpg", "Acer_platanoides_leaf.jpg"],
    ),
    (
        "platanus-hispanica",
        "London plane",
        "Platanus × hispanica",
        "tree",
        "Bark sheds in patchy plates; large hand-shaped leaves; bristly round fruits in pairs. Street and park staple.",
        ["Platanus_x_hispanica_leaves.jpg", "Platanus_acerifolia_leaves.jpg", "London_plane_tree_bark.jpg"],
    ),
    (
        "malus-sylvestris",
        "Crab apple",
        "Malus sylvestris",
        "tree",
        "Small, often thorny tree; white-pink blossom; small sour apples. Ancestor of cultivated apples; scrub and old hedges.",
        ["Malus_sylvestris_flowers.jpg", "Malus_sylvestris_fruit.jpg", "Malus_sylvestris_1.jpg"],
    ),
    (
        "prunus-padus",
        "Bird cherry",
        "Prunus padus",
        "tree",
        "Long scented racemes of white flowers in late spring; black fruits on red stalks; finely toothed leaves.",
        ["Prunus_padus_flowers.jpg", "Prunus_padus_leaves.jpg", "Prunus_padus_1.jpg"],
    ),
    (
        "prunus-cerasifera",
        "Cherry plum",
        "Prunus cerasifera",
        "tree",
        "Very early white blossom; small round edible plums; often suckers to thickets. Common hedge escape.",
        ["Prunus_cerasifera_flowers.jpg", "Prunus_cerasifera_1.jpg", "Cherry_plum_flowers.jpg"],
    ),
    (
        "larix-decidua",
        "European larch",
        "Larix decidua",
        "tree",
        "Soft needles in tufts on short shoots; deciduous conifer—turns gold in autumn; small erect woody cones.",
        ["Larix_decidua_needles.jpg", "Larix_decidua_cones.jpg", "Larix_decidua_1.jpg"],
    ),
    (
        "picea-sitchensis",
        "Sitka spruce",
        "Picea sitchensis",
        "tree",
        "Sharply pointed needles from all sides of twigs; thin scaly bark; drooping branches. Dominates wet UK forestry.",
        ["Picea_sitchensis_cones.jpg", "Picea_sitchensis_needles.jpg", "Picea_sitchensis_1.jpg"],
    ),
    (
        "pseudotsuga-menziesii",
        "Douglas fir",
        "Pseudotsuga menziesii",
        "tree",
        "Soft needles with two white stripes beneath; distinctive three-pronged bracts in cones; furrowed grey-brown bark.",
        ["Pseudotsuga_menziesii_cones.jpg", "Pseudotsuga_menziesii_1.jpg", "Douglas_fir_cones.jpg"],
    ),
    (
        "thuja-plicata",
        "Western red cedar",
        "Thuja plicata",
        "tree",
        "Scale-like leaves in flat sprays; crushed foliage has pear-drop smell; thin fibrous bark. Common plantation and garden conifer.",
        ["Thuja_plicata_leaves.jpg", "Thuja_plicata_1.jpg", "Thuja_plicata_bark.jpg"],
    ),
    (
        "quercus-ilex",
        "Holm oak",
        "Quercus ilex",
        "tree",
        "Evergreen holly-like leaves (spiny on young growth); acorns. Increasing on southern English coasts and mild urban sites.",
        ["Quercus_ilex_leaves.jpg", "Quercus_ilex_1.jpg", "Quercus_ilex_acorns.jpg"],
    ),
    (
        "populus-nigra",
        "Black poplar",
        "Populus nigra",
        "tree",
        "Britain’s rarest native timber tree; deeply fissured bark; broad triangular leaves. Many large specimens are male clones.",
        ["Populus_nigra_leaves.jpg", "Populus_nigra_1.jpg", "Black_poplar_bark.jpg"],
    ),
    (
        "populus-alba",
        "White poplar",
        "Populus alba",
        "tree",
        "White-felted leaf undersides; lobed green tops; suckers freely by rivers and rough ground.",
        ["Populus_alba_leaves.jpg", "Populus_alba_1.jpg", "White_poplar_leaves.jpg"],
    ),
    (
        "salix-caprea",
        "Goat willow",
        "Salix caprea",
        "tree",
        "Large soft ‘pussy willow’ catkins in spring before leaves; broad leaves with wavy margins. Scrub and wet places.",
        ["Salix_caprea_catkins.jpg", "Salix_caprea_leaves.jpg", "Salix_caprea_1.jpg"],
    ),
    (
        "ulmus-glabra",
        "Wych elm",
        "Ulmus glabra",
        "tree",
        "Larger asymmetric leaves than field elm; often more tree-like before disease; round, notched seeds.",
        ["Ulmus_glabra_leaves.jpg", "Ulmus_glabra_1.jpg", "Wych_elm_leaves.jpg"],
    ),
    (
        "tilia-platyphyllos",
        "Large-leaved lime",
        "Tilia platyphyllos",
        "tree",
        "Huge heart-shaped leaves with hairy undersides; native in a few woods, widely planted. Often hybridises with other limes.",
        ["Tilia_platyphyllos_leaves.jpg", "Tilia_platyphyllos_1.jpg", "Tilia_platyphyllos.jpg"],
    ),
    (
        "betula-pubescens",
        "Downy birch",
        "Betula pubescens",
        "tree",
        "Duller white bark than silver birch; soft-hairy young shoots and leaf undersides; upland and wetter sites.",
        ["Betula_pubescens_leaves.jpg", "Betula_pubescens_1.jpg", "Betula_pubescens.jpg"],
    ),
    (
        "sorbus-torminalis",
        "Wild service tree",
        "Sorbus torminalis",
        "tree",
        "Maple-like lobed leaves; small brown ‘chequers’ fruits. Ancient woodland indicator on heavy soils.",
        ["Sorbus_torminalis_leaves.jpg", "Sorbus_torminalis_fruit.jpg", "Sorbus torminalis leaves.jpg"],
    ),
    (
        "sorbus-aria",
        "Common whitebeam",
        "Sorbus aria",
        "tree",
        "White felted undersides to coarsely toothed leaves; red berries. Chalk and limestone scrub.",
        ["Sorbus_aria_leaves.jpg", "Sorbus_aria_fruits.jpg", "Sorbus_aria_1.jpg"],
    ),
    (
        "juglans-regia",
        "Walnut",
        "Juglans regia",
        "tree",
        "Pinnate scented leaves; large green husked nuts; pale bark on mature trees. Long naturalised in parkland and hedgerows.",
        ["Juglans_regia_leaves.jpg", "Juglans_regia_1.jpg", "Juglans_regia_nuts.jpg"],
    ),
    (
        "pinus-nigra",
        "Black pine",
        "Pinus nigra",
        "tree",
        "Stiff paired needles; bark plates with dark fissures. Austrian/Maritime pine—common windbreak and coastal planting.",
        ["Pinus_nigra_cones.jpg", "Pinus_nigra_needles.jpg", "Pinus_nigra_1.jpg"],
    ),
    (
        "cedrus-atlantica",
        "Atlas cedar",
        "Cedrus atlantica",
        "tree",
        "Blue-green needles in clusters; barrel-shaped upright cones on mature trees. Park and garden conifer.",
        ["Cedrus_atlantica_cones.jpg", "Cedrus_atlantica_1.jpg", "Atlas_cedar.jpg"],
    ),
    (
        "alnus-incana",
        "Grey alder",
        "Alnus incana",
        "tree",
        "Speckled grey bark; finely toothed leaves grey beneath; small woody cones like common alder. Wet ground and spoil.",
        ["Alnus_incana_leaves.jpg", "Alnus_incana_1.jpg", "Alnus_incana_cones.jpg"],
    ),
    (
        "quercus-cerris",
        "Turkey oak",
        "Quercus cerris",
        "tree",
        "Mossy cup over acorn; long whiskery bracts; shallow lobed leaves. Planted; spreads on sandy soils in south-east.",
        ["Quercus_cerris_acorns.jpg", "Quercus_cerris_leaves.jpg", "Quercus_cerris_1.jpg"],
    ),
    (
        "robinia-pseudoacacia",
        "False acacia",
        "Robinia pseudoacacia",
        "tree",
        "Pinnate leaves; paired spines on twigs; hanging white pea-flowers; flat brown pods. Naturalised on waste ground.",
        ["Robinia_pseudoacacia_flowers.jpg", "Robinia_pseudoacacia_leaves.jpg", "Robinia_pseudoacacia_1.jpg"],
    ),
    (
        "tsuga-heterophylla",
        "Western hemlock",
        "Tsuga heterophylla",
        "tree",
        "Short flat needles in flat sprays with two white lines below; drooping leader; tiny cones. Common in west-coast forestry.",
        ["Tsuga_heterophylla_needles.jpg", "Tsuga_heterophylla_1.jpg", "Western_hemlock_cones.jpg"],
    ),
    (
        "crataegus-laevigata",
        "Midland hawthorn",
        "Crataegus laevigata",
        "shrub",
        "Two styles in flower (vs one in common hawthorn); less deeply lobed leaves; red haws in pairs. Ancient hedgerows.",
        ["Crataegus_laevigata_fruits.jpg", "Crataegus_laevigata_flowers.jpg", "Crataegus_laevigata_1.jpg"],
    ),
    (
        "viburnum-opulus",
        "Guelder rose",
        "Viburnum opulus",
        "shrub",
        "Maple-like lobed leaves; flat heads of white outer ‘petal’ flowers (sterile); shiny red berries (not rowan). Wet ditches and scrub.",
        ["Viburnum_opulus_flowers.jpg", "Viburnum_opulus_fruits.jpg", "Viburnum_opulus_1.jpg"],
    ),
    (
        "lonicera-periclymenum",
        "Honeysuckle",
        "Lonicera periclymenum",
        "shrub",
        "Climbing woody stems; fragrant pink-yellow tubular flowers; red berries in woodland edge hedges.",
        ["Lonicera_periclymenum_flowers.jpg", "Lonicera_periclymenum_1.jpg", "Woodbine_flowers.jpg"],
    ),
    (
        "hedera-helix",
        "Common ivy",
        "Hedera helix",
        "shrub",
        "Evergreen climber: juvenile lobed leaves on ground/shade; adult unlobed leaves and globe-shaped flower heads high on trunks.",
        ["Hedera_helix_leaves.jpg", "Hedera_helix_flowers.jpg", "Hedera_helix_fruits.jpg"],
    ),
    (
        "ulex-europaeus",
        "Gorse",
        "Ulex europaeus",
        "shrub",
        "Spiny evergreen; coconut-scented yellow pea-flowers almost year-round; dry heaths and rough grassland.",
        ["Ulex_europaeus_flowers.jpg", "Ulex_europaeus_1.jpg", "Gorse_flowers.jpg"],
    ),
    (
        "cytisus-scoparius",
        "Broom",
        "Cytisus scoparius",
        "shrub",
        "Leafy three-part upper leaves; masses of yellow pea-flowers on green rushy stems; dry banks and heaths.",
        ["Cytisus_scoparius_flowers.jpg", "Cytisus_scoparius_1.jpg", "Common_broom_flowers.jpg"],
    ),
    (
        "prunus-laurocerasus",
        "Cherry laurel",
        "Prunus laurocerasus",
        "shrub",
        "Large glossy evergreen leaves; white candles of flowers; cherry-like fruits. Shaded woodland and garden throw-outs.",
        ["Prunus_laurocerasus_leaves.jpg", "Prunus_laurocerasus_flowers.jpg", "Prunus_laurocerasus_1.jpg"],
    ),
    (
        "rhamnus-cathartica",
        "Buckthorn",
        "Rhamnus cathartica",
        "shrub",
        "Opposite finely toothed leaves; black berries on female plants; thorn-tipped twigs. Chalk scrub.",
        ["Rhamnus_cathartica_fruits.jpg", "Rhamnus_cathartica_leaves.jpg", "Rhamnus_cathartica_1.jpg"],
    ),
    (
        "frangula-alnus",
        "Alder buckthorn",
        "Frangula alnus",
        "shrub",
        "Untoothed oval leaves; red then black berries; no thorns (unlike buckthorn). Wet woodland and fens.",
        ["Frangula_alnus_fruits.jpg", "Frangula_alnus_leaves.jpg", "Frangula_alnus_1.jpg"],
    ),
    (
        "juniperus-communis",
        "Common juniper",
        "Juniperus communis",
        "shrub",
        "Needle leaves in whorls of three; blue ‘berries’ (fused cones). Declining but still on chalk downs and moors.",
        ["Juniperus_communis_branch.jpg", "Juniperus_communis_1.jpg", "Juniperus_communis_foliage.jpg"],
    ),
    (
        "calluna-vulgaris",
        "Heather",
        "Calluna vulgaris",
        "shrub",
        "Tiny scale leaves on woody stems; pink-purple bells in late summer; dominates dry heaths and moorland.",
        ["Calluna_vulgaris_flowers.jpg", "Calluna_vulgaris_1.jpg", "Calluna_vulgaris.jpg"],
    ),
    (
        "erica-cinerea",
        "Bell heather",
        "Erica cinerea",
        "shrub",
        "Needle leaves in whorls; darker bell flowers than ling; low hummocks on acid heaths.",
        ["Erica_cinerea_flowers.jpg", "Erica_cinerea_1.jpg", "Erica_cinerea.jpg"],
    ),
    (
        "erica-tetralix",
        "Cross-leaved heath",
        "Erica tetralix",
        "shrub",
        "Leaves in whorls of four along stems; pink bells; likes wetter acid bogs than bell heather.",
        ["Erica_tetralix_flowers.jpg", "Erica_tetralix_1.jpg", "Ericaceae_Erica_tetralix.jpg"],
    ),
    (
        "vaccinium-myrtillus",
        "Bilberry",
        "Vaccinium myrtillus",
        "shrub",
        "Small oval toothed leaves on wiry stems; blue-black berries; acid woodland and moor under open canopy.",
        ["Vaccinium_myrtillus_fruits.jpg", "Vaccinium_myrtillus_leaves.jpg", "Vaccinium_myrtillus_1.jpg"],
    ),
    (
        "symphoricarpos-albus",
        "Snowberry",
        "Symphoricarpos albus",
        "shrub",
        "Oval leaves; clusters of hard white berries like white sweets; suckering thickets on disturbed ground.",
        ["Symphoricarpos_albus_fruits.jpg", "Symphoricarpos_albus_1.jpg", "Symphoricarpos_albus.jpg"],
    ),
    (
        "mahonia-aquifolium",
        "Oregon grape",
        "Mahonia aquifolium",
        "shrub",
        "Holly-like spiny leaflets; yellow scented winter–spring flowers; blue berries. Garden escape into woods.",
        ["Mahonia_aquifolium_flowers.jpg", "Mahonia_aquifolium_fruits.jpg", "Mahonia_aquifolium_1.jpg"],
    ),
    (
        "rhododendron-ponticum",
        "Rhododendron",
        "Rhododendron ponticum",
        "shrub",
        "Large evergreen leaves; trusses of purple-pink flowers. Invasive on acid soils; shades out ground flora.",
        ["Rhododendron_ponticum_flowers.jpg", "Rhododendron_ponticum_1.jpg", "Rhododendron_ponticum_leaves.jpg"],
    ),
    (
        "cotoneaster-franchetii",
        "Franchet’s cotoneaster",
        "Cotoneaster franchetii",
        "shrub",
        "Grey-felted leaf undersides; orange-red berries all winter; arching branches. Very common urban/waste-ground shrub.",
        ["Cotoneaster_franchetii_fruits.jpg", "Cotoneaster_franchetii_1.jpg", "Cotoneaster_franchetii.jpg"],
    ),
    (
        "rubus-idaeus",
        "Wild raspberry",
        "Rubus idaeus",
        "shrub",
        "Upright reddish stems with fine prickles; white flowers; red raspberries. Woodland rides and edges.",
        ["Rubus_idaeus_leaves.jpg", "Rubus_idaeus_fruits.jpg", "Rubus_idaeus_flowers.jpg"],
    ),
    (
        "salix-cinerea",
        "Grey willow",
        "Salix cinerea",
        "shrub",
        "Broader leaves than goat willow; silky grey hair on undersides when young; often multi-stemmed scrub.",
        ["Salix_cinerea_leaves.jpg", "Salix_cinerea_1.jpg", "Salix_cinerea_catkins.jpg"],
    ),
    (
        "myrica-gale",
        "Bog myrtle",
        "Myrica gale",
        "shrub",
        "Aromatic narrow leaves; catkins on male plants; peaty bogs, wet heaths, and moor edges.",
        ["Myrica_gale_leaves.jpg", "Myrica_gale_1.jpg", "Myrica_gale.jpg"],
    ),
    (
        "genista-tinctoria",
        "Dyer’s greenweed",
        "Genista tinctoria",
        "shrub",
        "Spiny green stems; bright yellow pea-flowers; small pods. Lowland grassland and heaths on poorer soils.",
        ["Genista_tinctoria_flowers.jpg", "Genista_tinctoria_1.jpg", "Genista_tinctoria.jpg"],
    ),
]


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
        headers={"User-Agent": "TreeFlashcards/2.0 (educational; batch species append)"},
    )
    with urllib.request.urlopen(req, timeout=60) as r:
        d = json.load(r)
    for _pid, page in d.get("query", {}).get("pages", {}).items():
        if page.get("missing"):
            return None
        ii = page.get("imageinfo", [{}])[0]
        return ii.get("thumburl") or ii.get("url")
    return None


def commons_search_image(search_term):
    q = urllib.parse.urlencode(
        {
            "action": "query",
            "format": "json",
            "list": "search",
            "srsearch": search_term + " filetype:bitmap",
            "srnamespace": "6",
            "srlimit": "5",
        }
    )
    url = "https://commons.wikimedia.org/w/api.php?" + q
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "TreeFlashcards/2.0 (educational; batch species append)"},
    )
    with urllib.request.urlopen(req, timeout=60) as r:
        d = json.load(r)
    titles = [x["title"] for x in d.get("query", {}).get("search", [])]
    return [t.replace("File:", "", 1) for t in titles]


def resolve_row(row):
    pid, common, sci, kind, hint, cands = row
    time.sleep(0.3)
    for c in cands:
        time.sleep(0.28)
        u = api_thumb(c)
        if u:
            return u, c
    # Fallback: search Commons for scientific name
    for term in (sci, common, sci.split()[0]):
        time.sleep(0.35)
        for title in commons_search_image(term):
            time.sleep(0.28)
            u = api_thumb(title)
            if u:
                return u, title
    return None, None


def escape_hint(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')


def main():
    if len(NEW) != 50:
        raise SystemExit("Expected 50 species, got %s" % len(NEW))
    blocks = []
    failed = []
    for row in NEW:
        pid = row[0]
        url, used = resolve_row(row)
        print(("OK  " if url else "FAIL ") + pid + " <- " + str(used))
        if not url:
            failed.append(pid)
            continue
        piece = textwrap.dedent(
            """\
  {
    id: "%s",
    common: "%s",
    scientific: "%s",
    kind: "%s",
    hint: "%s",
    image: "%s"
  }"""
            % (
                pid,
                row[1],
                row[2],
                row[3],
                escape_hint(row[4]),
                url,
            )
        )
        blocks.append(piece)
    insert = ",\n".join(blocks)
    text = open(PLANTS_PATH, encoding="utf-8").read()
    if "];" not in text.rstrip():
        raise SystemExit("Unexpected plants.js format")
    if failed:
        print("Missing images for:", failed)
        raise SystemExit("Resolve failures — extend candidates or search")
    text = re.sub(r"\n\];\s*$", ",\n" + insert + "\n];\n", text.rstrip() + "\n", count=1)
    open(PLANTS_PATH, "w", encoding="utf-8").write(text)
    print("Appended", len(blocks), "species to", PLANTS_PATH)


if __name__ == "__main__":
    main()
