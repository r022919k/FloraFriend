/**
 * Common trees & shrubs you are likely to meet in England (woodland, hedgerow, park, churchyard).
 * ~77 species — native favourites, common planted trees, forestry conifers, and hedgerow/invasive shrubs.
 * Images: upload.wikimedia.org URLs from Wikimedia Commons (CC / open licences; see footer).
 * Re-run tools/fetch_wikimedia_thumbs.py to refresh older entries; tools/append_50_species.py documents the batch adder.
 * Extended “Learn more” copy lives in data/plant-details.js (linked by id).
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
  },
{
  id: "quercus-petraea",
  common: "Sessile oak",
  scientific: "Quercus petraea",
  kind: "tree",
  hint: "Stalkless acorns (sessile on twigs); leaf stalks often flush with twig; finer lobes than English oak. Common in western British woodlands.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Quercus_petraea_RF.jpg/960px-Quercus_petraea_RF.jpg"
},
{
  id: "carpinus-betulus",
  common: "Hornbeam",
  scientific: "Carpinus betulus",
  kind: "tree",
  hint: "Hard, fluted grey bark; doubly serrate oval leaves with parallel veins; papery winged nuts. Often hedge or understorey on heavy soils.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Carpinus_betulus_fruits.jpg/960px-Carpinus_betulus_fruits.jpg"
},
{
  id: "acer-campestre",
  common: "Field maple",
  scientific: "Acer campestre",
  kind: "tree",
  hint: "Britain’s only native maple: five blunt lobes, opposite; keys in shallow V pairs. Small tree or hedgerow.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Acer_campestre_leaf_02_by_Line1.JPG/960px-Acer_campestre_leaf_02_by_Line1.JPG"
},
{
  id: "acer-platanoides",
  common: "Norway maple",
  scientific: "Acer platanoides",
  kind: "tree",
  hint: "Large palmate leaves with pointed lobes; white sap if petiole broken; paired keys nearly flat. Widely planted; seeds freely.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Acer_platanoides_leaf.jpg/960px-Acer_platanoides_leaf.jpg"
},
{
  id: "platanus-hispanica",
  common: "London plane",
  scientific: "Platanus × hispanica",
  kind: "tree",
  hint: "Bark sheds in patchy plates; large hand-shaped leaves; bristly round fruits in pairs. Street and park staple.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Fallen_leaf_of_Platanus_x_hispanica_%281%29.jpg/960px-Fallen_leaf_of_Platanus_x_hispanica_%281%29.jpg"
},
{
  id: "malus-sylvestris",
  common: "Crab apple",
  scientific: "Malus sylvestris",
  kind: "tree",
  hint: "Small, often thorny tree; white-pink blossom; small sour apples. Ancestor of cultivated apples; scrub and old hedges.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flower_from_a_Malus_sylvestris_%28Crab_apple%29_tree.jpg/960px-Flower_from_a_Malus_sylvestris_%28Crab_apple%29_tree.jpg"
},
{
  id: "prunus-padus",
  common: "Bird cherry",
  scientific: "Prunus padus",
  kind: "tree",
  hint: "Long scented racemes of white flowers in late spring; black fruits on red stalks; finely toothed leaves.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Prunus_padus_flowers.jpg/960px-Prunus_padus_flowers.jpg"
},
{
  id: "prunus-cerasifera",
  common: "Cherry plum",
  scientific: "Prunus cerasifera",
  kind: "tree",
  hint: "Very early white blossom; small round edible plums; often suckers to thickets. Common hedge escape.",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Prunus_cerasifera_1.jpg"
},
{
  id: "larix-decidua",
  common: "European larch",
  scientific: "Larix decidua",
  kind: "tree",
  hint: "Soft needles in tufts on short shoots; deciduous conifer—turns gold in autumn; small erect woody cones.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Larix_decidua_needles_and_male_cones.JPG/960px-Larix_decidua_needles_and_male_cones.JPG"
},
{
  id: "picea-sitchensis",
  common: "Sitka spruce",
  scientific: "Picea sitchensis",
  kind: "tree",
  hint: "Sharply pointed needles from all sides of twigs; thin scaly bark; drooping branches. Dominates wet UK forestry.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Picea_sitchensis_branch_-_geograph.org.uk_-_343394.jpg"
},
{
  id: "pseudotsuga-menziesii",
  common: "Douglas fir",
  scientific: "Pseudotsuga menziesii",
  kind: "tree",
  hint: "Soft needles with two white stripes beneath; distinctive three-pronged bracts in cones; furrowed grey-brown bark.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Pseudotsuga_menziesii_cones.jpg/960px-Pseudotsuga_menziesii_cones.jpg"
},
{
  id: "thuja-plicata",
  common: "Western red cedar",
  scientific: "Thuja plicata",
  kind: "tree",
  hint: "Scale-like leaves in flat sprays; crushed foliage has pear-drop smell; thin fibrous bark. Common plantation and garden conifer.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Thuja_plicata_43569.JPG/960px-Thuja_plicata_43569.JPG"
},
{
  id: "quercus-ilex",
  common: "Holm oak",
  scientific: "Quercus ilex",
  kind: "tree",
  hint: "Evergreen holly-like leaves (spiny on young growth); acorns. Increasing on southern English coasts and mild urban sites.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Montes_de_Vitoria_-_Quercus_ilex_01.jpg/960px-Montes_de_Vitoria_-_Quercus_ilex_01.jpg"
},
{
  id: "populus-nigra",
  common: "Black poplar",
  scientific: "Populus nigra",
  kind: "tree",
  hint: "Britain’s rarest native timber tree; deeply fissured bark; broad triangular leaves. Many large specimens are male clones.",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Populus_nigra_1.jpg"
},
{
  id: "populus-alba",
  common: "White poplar",
  scientific: "Populus alba",
  kind: "tree",
  hint: "White-felted leaf undersides; lobed green tops; suckers freely by rivers and rough ground.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Populus_alba_coupe_MHNT.jpg/960px-Populus_alba_coupe_MHNT.jpg"
},
{
  id: "salix-caprea",
  common: "Goat willow",
  scientific: "Salix caprea",
  kind: "tree",
  hint: "Large soft ‘pussy willow’ catkins in spring before leaves; broad leaves with wavy margins. Scrub and wet places.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Salix_caprea_Male.jpg/960px-Salix_caprea_Male.jpg"
},
{
  id: "ulmus-glabra",
  common: "Wych elm",
  scientific: "Ulmus glabra",
  kind: "tree",
  hint: "Larger asymmetric leaves than field elm; often more tree-like before disease; round, notched seeds.",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Ulmus_glabra_1.jpg"
},
{
  id: "tilia-platyphyllos",
  common: "Large-leaved lime",
  scientific: "Tilia platyphyllos",
  kind: "tree",
  hint: "Huge heart-shaped leaves with hairy undersides; native in a few woods, widely planted. Often hybridises with other limes.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Tilia_platyphyllos.jpg/960px-Tilia_platyphyllos.jpg"
},
{
  id: "betula-pubescens",
  common: "Downy birch",
  scientific: "Betula pubescens",
  kind: "tree",
  hint: "Duller white bark than silver birch; soft-hairy young shoots and leaf undersides; upland and wetter sites.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Betula_pubescens_1.jpg/960px-Betula_pubescens_1.jpg"
},
{
  id: "sorbus-torminalis",
  common: "Wild service tree",
  scientific: "Sorbus torminalis",
  kind: "tree",
  hint: "Maple-like lobed leaves; small brown ‘chequers’ fruits. Ancient woodland indicator on heavy soils.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Elsbeere_Herpersdorf.jpg/960px-Elsbeere_Herpersdorf.jpg"
},
{
  id: "sorbus-aria",
  common: "Common whitebeam",
  scientific: "Sorbus aria",
  kind: "tree",
  hint: "White felted undersides to coarsely toothed leaves; red berries. Chalk and limestone scrub.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sorbus_aria_1.jpg/960px-Sorbus_aria_1.jpg"
},
{
  id: "juglans-regia",
  common: "Walnut",
  scientific: "Juglans regia",
  kind: "tree",
  hint: "Pinnate scented leaves; large green husked nuts; pale bark on mature trees. Long naturalised in parkland and hedgerows.",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Juglans_regia_1.jpg"
},
{
  id: "pinus-nigra",
  common: "Black pine",
  scientific: "Pinus nigra",
  kind: "tree",
  hint: "Stiff paired needles; bark plates with dark fissures. Austrian/Maritime pine—common windbreak and coastal planting.",
  image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Pinus_nigra_1.jpg"
},
{
  id: "cedrus-atlantica",
  common: "Atlas cedar",
  scientific: "Cedrus atlantica",
  kind: "tree",
  hint: "Blue-green needles in clusters; barrel-shaped upright cones on mature trees. Park and garden conifer.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Atlas_cedar._Cedrus_atlantica._Pyramidal_to_flat._%2837085640963%29.jpg/960px-Atlas_cedar._Cedrus_atlantica._Pyramidal_to_flat._%2837085640963%29.jpg"
},
{
  id: "alnus-incana",
  common: "Grey alder",
  scientific: "Alnus incana",
  kind: "tree",
  hint: "Speckled grey bark; finely toothed leaves grey beneath; small woody cones like common alder. Wet ground and spoil.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Alnus_incana_1.jpg/960px-Alnus_incana_1.jpg"
},
{
  id: "quercus-cerris",
  common: "Turkey oak",
  scientific: "Quercus cerris",
  kind: "tree",
  hint: "Mossy cup over acorn; long whiskery bracts; shallow lobed leaves. Planted; spreads on sandy soils in south-east.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Quercus_cerris_1.jpg/960px-Quercus_cerris_1.jpg"
},
{
  id: "robinia-pseudoacacia",
  common: "False acacia",
  scientific: "Robinia pseudoacacia",
  kind: "tree",
  hint: "Pinnate leaves; paired spines on twigs; hanging white pea-flowers; flat brown pods. Naturalised on waste ground.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Robinia_pseudoacacia_1.jpg/960px-Robinia_pseudoacacia_1.jpg"
},
{
  id: "tsuga-heterophylla",
  common: "Western hemlock",
  scientific: "Tsuga heterophylla",
  kind: "tree",
  hint: "Short flat needles in flat sprays with two white lines below; drooping leader; tiny cones. Common in west-coast forestry.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tsuga_heterophylla_MHNT.BOT.2004.0.210.jpg/960px-Tsuga_heterophylla_MHNT.BOT.2004.0.210.jpg"
},
{
  id: "crataegus-laevigata",
  common: "Midland hawthorn",
  scientific: "Crataegus laevigata",
  kind: "shrub",
  hint: "Two styles in flower (vs one in common hawthorn); less deeply lobed leaves; red haws in pairs. Ancient hedgerows.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Crataegus_laevigata_flowers.jpg/960px-Crataegus_laevigata_flowers.jpg"
},
{
  id: "viburnum-opulus",
  common: "Guelder rose",
  scientific: "Viburnum opulus",
  kind: "shrub",
  hint: "Maple-like lobed leaves; flat heads of white outer ‘petal’ flowers (sterile); shiny red berries (not rowan). Wet ditches and scrub.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Viburnum_opulus_var._americanum_flowers.jpg/960px-Viburnum_opulus_var._americanum_flowers.jpg"
},
{
  id: "lonicera-periclymenum",
  common: "Honeysuckle",
  scientific: "Lonicera periclymenum",
  kind: "shrub",
  hint: "Climbing woody stems; fragrant pink-yellow tubular flowers; red berries in woodland edge hedges.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lonicera_periclymenum_kz20.jpg/960px-Lonicera_periclymenum_kz20.jpg"
},
{
  id: "hedera-helix",
  common: "Common ivy",
  scientific: "Hedera helix",
  kind: "shrub",
  hint: "Evergreen climber: juvenile lobed leaves on ground/shade; adult unlobed leaves and globe-shaped flower heads high on trunks.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hedera_helix_leaves.jpg/960px-Hedera_helix_leaves.jpg"
},
{
  id: "ulex-europaeus",
  common: "Gorse",
  scientific: "Ulex europaeus",
  kind: "shrub",
  hint: "Spiny evergreen; coconut-scented yellow pea-flowers almost year-round; dry heaths and rough grassland.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ulex_europaeus_flowers.jpg/960px-Ulex_europaeus_flowers.jpg"
},
{
  id: "cytisus-scoparius",
  common: "Broom",
  scientific: "Cytisus scoparius",
  kind: "shrub",
  hint: "Leafy three-part upper leaves; masses of yellow pea-flowers on green rushy stems; dry banks and heaths.",
  image: "https://upload.wikimedia.org/wikipedia/commons/b/be/Cytisus_scoparius_1.jpg"
},
{
  id: "prunus-laurocerasus",
  common: "Cherry laurel",
  scientific: "Prunus laurocerasus",
  kind: "shrub",
  hint: "Large glossy evergreen leaves; white candles of flowers; cherry-like fruits. Shaded woodland and garden throw-outs.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Prunus_laurocerasus_1.jpg/960px-Prunus_laurocerasus_1.jpg"
},
{
  id: "rhamnus-cathartica",
  common: "Buckthorn",
  scientific: "Rhamnus cathartica",
  kind: "shrub",
  hint: "Opposite finely toothed leaves; black berries on female plants; thorn-tipped twigs. Chalk scrub.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Rhamnus_cathartica_fruits.jpg/960px-Rhamnus_cathartica_fruits.jpg"
},
{
  id: "frangula-alnus",
  common: "Alder buckthorn",
  scientific: "Frangula alnus",
  kind: "shrub",
  hint: "Untoothed oval leaves; red then black berries; no thorns (unlike buckthorn). Wet woodland and fens.",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Frangula_alnus_1.jpg"
},
{
  id: "juniperus-communis",
  common: "Common juniper",
  scientific: "Juniperus communis",
  kind: "shrub",
  hint: "Needle leaves in whorls of three; blue ‘berries’ (fused cones). Declining but still on chalk downs and moors.",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Juniperus_communis_1.jpg"
},
{
  id: "calluna-vulgaris",
  common: "Heather",
  scientific: "Calluna vulgaris",
  kind: "shrub",
  hint: "Tiny scale leaves on woody stems; pink-purple bells in late summer; dominates dry heaths and moorland.",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Calluna_vulgaris_1.jpg"
},
{
  id: "erica-cinerea",
  common: "Bell heather",
  scientific: "Erica cinerea",
  kind: "shrub",
  hint: "Needle leaves in whorls; darker bell flowers than ling; low hummocks on acid heaths.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Erica_cinerea.jpg/960px-Erica_cinerea.jpg"
},
{
  id: "erica-tetralix",
  common: "Cross-leaved heath",
  scientific: "Erica tetralix",
  kind: "shrub",
  hint: "Leaves in whorls of four along stems; pink bells; likes wetter acid bogs than bell heather.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Erica_tetralix_1.jpg/960px-Erica_tetralix_1.jpg"
},
{
  id: "vaccinium-myrtillus",
  common: "Bilberry",
  scientific: "Vaccinium myrtillus",
  kind: "shrub",
  hint: "Small oval toothed leaves on wiry stems; blue-black berries; acid woodland and moor under open canopy.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Vaccinium_myrtillus_1.jpg/960px-Vaccinium_myrtillus_1.jpg"
},
{
  id: "symphoricarpos-albus",
  common: "Snowberry",
  scientific: "Symphoricarpos albus",
  kind: "shrub",
  hint: "Oval leaves; clusters of hard white berries like white sweets; suckering thickets on disturbed ground.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Symphoricarpos_albus_fruits.jpg/960px-Symphoricarpos_albus_fruits.jpg"
},
{
  id: "mahonia-aquifolium",
  common: "Oregon grape",
  scientific: "Mahonia aquifolium",
  kind: "shrub",
  hint: "Holly-like spiny leaflets; yellow scented winter–spring flowers; blue berries. Garden escape into woods.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mahonia_aquifolium_fruits.jpg/960px-Mahonia_aquifolium_fruits.jpg"
},
{
  id: "rhododendron-ponticum",
  common: "Rhododendron",
  scientific: "Rhododendron ponticum",
  kind: "shrub",
  hint: "Large evergreen leaves; trusses of purple-pink flowers. Invasive on acid soils; shades out ground flora.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Rhododendron_ponticum_1.jpg/960px-Rhododendron_ponticum_1.jpg"
},
{
  id: "cotoneaster-franchetii",
  common: "Franchet’s cotoneaster",
  scientific: "Cotoneaster franchetii",
  kind: "shrub",
  hint: "Grey-felted leaf undersides; orange-red berries all winter; arching branches. Very common urban/waste-ground shrub.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Cotoneaster_franchetii_2.jpg/960px-Cotoneaster_franchetii_2.jpg"
},
{
  id: "rubus-idaeus",
  common: "Wild raspberry",
  scientific: "Rubus idaeus",
  kind: "shrub",
  hint: "Upright reddish stems with fine prickles; white flowers; red raspberries. Woodland rides and edges.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Raspberry_-_whole_%28Rubus_idaeus%29.jpg/960px-Raspberry_-_whole_%28Rubus_idaeus%29.jpg"
},
{
  id: "salix-cinerea",
  common: "Grey willow",
  scientific: "Salix cinerea",
  kind: "shrub",
  hint: "Broader leaves than goat willow; silky grey hair on undersides when young; often multi-stemmed scrub.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Salix_cinerea_1.jpg/960px-Salix_cinerea_1.jpg"
},
{
  id: "myrica-gale",
  common: "Bog myrtle",
  scientific: "Myrica gale",
  kind: "shrub",
  hint: "Aromatic narrow leaves; catkins on male plants; peaty bogs, wet heaths, and moor edges.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Myrica_gale.jpg/960px-Myrica_gale.jpg"
},
{
  id: "genista-tinctoria",
  common: "Dyer’s greenweed",
  scientific: "Genista tinctoria",
  kind: "shrub",
  hint: "Spiny green stems; bright yellow pea-flowers; small pods. Lowland grassland and heaths on poorer soils.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Genista_tinctoria_flowers.jpg/960px-Genista_tinctoria_flowers.jpg"
}
];
