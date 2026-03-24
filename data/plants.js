/**
 * Common trees & shrubs you are likely to meet in England (woodland, hedgerow, park, churchyard).
 * Images: stable upload.wikimedia.org thumbnail URLs from Wikimedia Commons (CC / open licences; see footer).
 * Re-run tools/fetch_wikimedia_thumbs.py to refresh links if a file moves.
 */
window.PLANTS = [
  {
    id: "quercus-robur",
    common: "English oak",
    scientific: "Quercus robur",
    kind: "tree",
    hint: "The default ‘oak’ in most of lowland England: rounded leaf lobes, acorns on stalks, rugged bark on old trees.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Quercus_robur_leaf.jpg/960px-Quercus_robur_leaf.jpg"
  },
  {
    id: "betula-pendula",
    common: "Silver birch",
    scientific: "Betula pendula",
    kind: "tree",
    hint: "White, papery bark on mature trunks; drooping twigs; small triangular, toothed leaves. Pioneer after felling or on heaths.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Betula_pendula_001.jpg/960px-Betula_pendula_001.jpg"
  },
  {
    id: "fagus-sylvatica",
    common: "Beech",
    scientific: "Fagus sylvatica",
    kind: "tree",
    hint: "Smooth grey bark; wavy-edged oval leaves; beechnuts in spiky cases. Often forms pure stands on chalky soils in southern England.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Fagus_sylvatica_leaves.jpg/960px-Fagus_sylvatica_leaves.jpg"
  },
  {
    id: "pinus-sylvestris",
    common: "Scots pine",
    scientific: "Pinus sylvestris",
    kind: "tree",
    hint: "Orange bark on the upper trunk; needles in pairs; small cones. Widely planted; native pinewoods are mainly Scotland, but familiar in English forestry blocks.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Pinus_sylvestris.jpg/960px-Pinus_sylvestris.jpg"
  },
  {
    id: "acer-pseudoplatanus",
    common: "Sycamore",
    scientific: "Acer pseudoplatanus",
    kind: "tree",
    hint: "Large palmate leaves; winged seeds that spin like helicopters; bark often flakes. Naturalised and very common in hedges, parks, and waste ground.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Acer_pseudoplatanus_1.jpg/960px-Acer_pseudoplatanus_1.jpg"
  },
  {
    id: "aesculus-hippocastanum",
    common: "Horse chestnut",
    scientific: "Aesculus hippocastanum",
    kind: "tree",
    hint: "Palmate leaves; sticky buds; conkers in spiky cases. Introduced but iconic in English parks, avenues, and village greens.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Aesculus_hippocastanum_1.JPG/960px-Aesculus_hippocastanum_1.JPG"
  },
  {
    id: "fraxinus-excelsior",
    common: "Ash",
    scientific: "Fraxinus excelsior",
    kind: "tree",
    hint: "Opposite compound leaves; sooty black buds; keys in clusters. Still a major hedgerow tree despite ash dieback (Hymenoscyphus).",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Fraxinus_excelsior_leaves.jpg/960px-Fraxinus_excelsior_leaves.jpg"
  },
  {
    id: "tilia-europaea",
    common: "Common lime",
    scientific: "Tilia × europaea",
    kind: "tree",
    hint: "Hybrid lime: heart-shaped leaves, often with a lopsided base; fragrant summer flowers; classic Victorian avenue and park tree across England.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Tilia_x_europea-1.JPG/960px-Tilia_x_europea-1.JPG"
  },
  {
    id: "sorbus-aucuparia",
    common: "Rowan",
    scientific: "Sorbus aucuparia",
    kind: "tree",
    hint: "Compound leaves; bright red berries in autumn. Commoner in the north and west of Britain; also planted in towns and gardens.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Sorbus_aucuparia_fruits.jpg"
  },
  {
    id: "ulmus-minor",
    common: "Field elm",
    scientific: "Ulmus minor",
    kind: "tree",
    hint: "Asymmetric leaf base; doubly toothed edges. Survives as hedgerow suckers after Dutch elm disease killed many mature trees.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Ulmus_minor_leaves.jpg/960px-Ulmus_minor_leaves.jpg"
  },
  {
    id: "populus-tremula",
    common: "Aspen",
    scientific: "Populus tremula",
    kind: "tree",
    hint: "Roundish leaves that shiver in light wind; grey bark with dark diamond lenticels. Scattered in woods and wet places.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Populus_tremula_leaf.jpg"
  },
  {
    id: "salix-alba",
    common: "White willow",
    scientific: "Salix alba",
    kind: "tree",
    hint: "Long, narrow leaves, silvery beneath; loves riverbanks, wet meadows, and damp corners of the landscape.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Salix_alba_leaves.jpg/960px-Salix_alba_leaves.jpg"
  },
  {
    id: "taxus-baccata",
    common: "Yew",
    scientific: "Taxus baccata",
    kind: "tree",
    hint: "Flat dark needles in two rows; red fleshy aril around the seed (not the seed itself—toxic). Ancient individuals in churchyards and chalk downs.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Taxus_baccata_1.jpg"
  },
  {
    id: "alnus-glutinosa",
    common: "Common alder",
    scientific: "Alnus glutinosa",
    kind: "tree",
    hint: "Rounded, slightly notched leaves; sticky young shoots; little woody cones that stay on the twigs. Lines muddy streams and wet woodland.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Alnus_glutinosa_leaves.jpg/960px-Alnus_glutinosa_leaves.jpg"
  },
  {
    id: "prunus-avium",
    common: "Wild cherry",
    scientific: "Prunus avium",
    kind: "tree",
    hint: "Single toothed leaves; horizontal bands on bark; white spring blossom. Common in English woodland edges and old hedges.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Prunus_avium_flowers.jpg"
  },
  {
    id: "castanea-sativa",
    common: "Sweet chestnut",
    scientific: "Castanea sativa",
    kind: "tree",
    hint: "Long, toothed leaves; spiny cases with edible nuts. Introduced long ago; coppice and mature trees especially in the south and east.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Castanea_sativa.jpg"
  },
  {
    id: "crataegus-monogyna",
    common: "Hawthorn",
    scientific: "Crataegus monogyna",
    kind: "shrub",
    hint: "Deeply lobed leaves; white May blossom; red haws. The backbone of English hedgerows and scrub.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crataegus_monogyna_fruits.jpg/960px-Crataegus_monogyna_fruits.jpg"
  },
  {
    id: "corylus-avellana",
    common: "Hazel",
    scientific: "Corylus avellana",
    kind: "shrub",
    hint: "Soft, hairy leaves; yellow lamb’s-tail catkins in winter; nuts in frilly husks. Classic understorey and coppice stool.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Corylus_avellana_2.jpg/960px-Corylus_avellana_2.jpg"
  },
  {
    id: "prunus-spinosa",
    common: "Blackthorn (sloe)",
    scientific: "Prunus spinosa",
    kind: "shrub",
    hint: "Dark, wicked spines; masses of white flowers on bare black twigs in early spring; sloes for gin in autumn.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Prunus_spinosa_-_geograph.org.uk_-_161040.jpg"
  },
  {
    id: "rosa-canina",
    common: "Dog rose",
    scientific: "Rosa canina",
    kind: "shrub",
    hint: "Pink, five-petalled flowers; red hips; arches and scrambles through hedges with hooked prickles.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rosa_canina_1.jpg/960px-Rosa_canina_1.jpg"
  },
  {
    id: "sambucus-nigra",
    common: "Elder",
    scientific: "Sambucus nigra",
    kind: "shrub",
    hint: "Compound leaves; creamy, musky-scented flower heads; black berries on pithy stems. Weedy in ditches, hedges, and waste ground.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Sambucus_nigra_001.jpg/960px-Sambucus_nigra_001.jpg"
  },
  {
    id: "rubus-fruticosus",
    common: "Bramble",
    scientific: "Rubus fruticosus agg.",
    kind: "shrub",
    hint: "A complex of microspecies: prickly scrambling stems, compound leaves, blackberries. Ubiquitous in English scrub and hedgebanks.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Rubus_fruticosus_3.jpg"
  },
  {
    id: "ligustrum-vulgare",
    common: "Wild privet",
    scientific: "Ligustrum vulgare",
    kind: "shrub",
    hint: "Semi-evergreen in mild winters; opposite oval leaves; small white flowers; black berries. Native on chalky soils; often in old hedges.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ligustrum_vulgare.jpg/960px-Ligustrum_vulgare.jpg"
  },
  {
    id: "buxus-sempervirens",
    common: "Box",
    scientific: "Buxus sempervirens",
    kind: "shrub",
    hint: "Tiny evergreen leaves; dense dark foliage. Native mainly on chalk and limestone (e.g. Box Hill, Surrey); also widely clipped in gardens.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Buxus_sempervirens.jpg/960px-Buxus_sempervirens.jpg"
  },
  {
    id: "ilex-aquifolium",
    common: "Holly",
    scientific: "Ilex aquifolium",
    kind: "shrub",
    hint: "Spiny evergreen leaves (smooth leaves high in the tree); red berries on female plants. Understorey of oak woods and evergreen hedges.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Ilex_aquifolium.jpg"
  },
  {
    id: "euonymus-europaeus",
    common: "Spindle",
    scientific: "Euonymus europaeus",
    kind: "shrub",
    hint: "Opposite leaves; extraordinary pink-and-orange lobed fruits in autumn; green, square young stems. Chalky woods and hedges.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Euonymus_europaeus_1.jpg"
  },
  {
    id: "cornus-sanguinea",
    common: "Dogwood",
    scientific: "Cornus sanguinea",
    kind: "shrub",
    hint: "Opposite leaves; black berries; in winter, bright red or orange stems in the hedge base. Typical of English hedgerows and scrub.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Cornus_sanguinea2.jpg"
  }
];
