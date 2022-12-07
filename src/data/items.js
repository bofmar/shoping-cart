import Item from './Item';

// LONG import the images
// Guitars
import fenderSquire from '../images/products/guitars/fender-squire.jpg';
import fenderTroy from '../images/products/guitars/fender-troy.jpg';
import yamahaPac from '../images/products/guitars/yamaha-pac.jpg';
import ibanezAF75 from '../images/products/guitars/ibanez-AF75.jpg';
import ibanezAS73 from '../images/products/guitars/ibanez-AS73.jpg';
import ibanezS520 from '../images/products/guitars/ibanez-s520.jpg';
import gibsonLesPaul from '../images/products/guitars/gibson-les-paul.jpg';
import gibsonSg from '../images/products/guitars/gibson-sg.jpg';
import gibsonTribute from '../images/products/guitars/gibson-tribute.jpg';
import jacksonAdrian from '../images/products/guitars/jackson-adrian.jpg';
import jacksonMisha from '../images/products/guitars/jackson-misha.jpg';
import jacksonJS32 from '../images/products/guitars/jackson-js32.jpg';
import kramerBaretta from '../images/products/guitars/kramer-baretta.jpg';
import kramerCustom from '../images/products/guitars/kramer-custom.jpg';
import kramerFocus from '../images/products/guitars/kramer-focus.jpg';
// Amplifiers
import blackstar from '../images/products/amps/blackstar.jpg';
import blackstarFly from '../images/products/amps/blackstar-fly.jpg';
import fender57 from '../images/products/amps/fender-57.jpg';
import fenderHotRod from '../images/products/amps/fender-hot-rod.jpg';
import laneyLX15 from '../images/products/amps/laney-lx15.jpg';
import orange from '../images/products/amps/orange.jpg';
// Pedals
import blackstarFS12 from '../images/products/pedals/blackstar-fs12.jpg';
import bossGT1000 from '../images/products/pedals/boss-gt1000.jpg';
import electroharmonixCanyon from '../images/products/pedals/electro-harmonix-canyon.jpg';
import englChorus from '../images/products/pedals/engl-chorus.jpg';
import headrushLooperboard from '../images/products/pedals/headrush-looperboard.jpg';
import line6Helix from '../images/products/pedals/line6-helix.jpg';
import line6M13 from '../images/products/pedals/line6-m13.jpg';
import mxrMR292 from '../images/products/pedals/mxr-mr292.jpg';
import proeflGF141 from '../images/products/pedals/proefl-gf14l.jpg';
import zoomAC2 from '../images/products/pedals/zoom-ac-2.jpg';
// Accessories
import fenderStrings from '../images/products/accessories/fender-strings.jpg';
import fenderTuner from '../images/products/accessories/fender-tuner.jpg';
import gibsonASAC from '../images/products/accessories/gibson-asac.jpg';
import gibsonASCL from '../images/products/accessories/gibson-ascl.jpg';
import gibsonASGG from '../images/products/accessories/gibson-asgg.jpg';
// END LONG

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis quam id diam finibus luctus. Curabitur hendrerit eget libero id placerat. In id vestibulum turpis. Mauris scelerisque sagittis felis, faucibus semper justo lobortis ut. Morbi tempus neque id mi elementum, ut mollis felis vestibulum. Duis pharetra sapien lacus, et ultrices dolor tempus sit amet. Donec quis hendrerit erat. Vivamus in sem lorem. Curabitur non est vitae justo condimentum aliquam. Proin suscipit, quam eu condimentum suscipit, tortor felis tristique enim, at consequat lorem ex et ipsum. Donec eget gravida lacus, sit amet semper diam. Phasellus ipsum lacus, aliquam ac orci non, pellentesque dignissim dolor. ';

/* items object 
    form  -guitars[]
          -amps[]
          -pedals[]
          -accessories[]
*/

const items = {
  guitars: [
    new Item('1', 'FENDER Troy Van Leeuwen Jazzmaster Electric Guitar Oxblood', 1_555, 'fender', description, fenderTroy),
    new Item('2', 'FENDER Squier Bullet HSS Indian Laurel El. Guitar Black', 159, 'fender', description, fenderSquire),
    new Item('3', 'YAMAHA PAC-112J RD Electric Guitar', 235, 'yamaha', description, yamahaPac),
    new Item('4', 'IBANEZ AF75-BS Electric Guitar', 474, 'ibanez', description, ibanezAF75),
    new Item('5', 'IBANEZ AS73-TBC Electric Guitar', 444, 'ibanez', description, ibanezAS73),
    new Item('6', 'IBANEZ S520-WK Electric Guitar', 686, 'ibanez', description, ibanezS520),
    new Item('7', 'GIBSON Custom Les Paul Axcess Custom Floyd Rose Ebony Electric Guitar', 4_899, 'gibson', description, gibsonLesPaul),
    new Item('8', 'GIBSON SG Custom 2-Pickup Ebony Gloss Ebony Electric Guitar', 4_599, 'gibson', description, gibsonSg),
    new Item('9', 'GIBSON Les Paul Tribute SCS Electric Guitar', 1_159, 'gibson', description, gibsonTribute),
    new Item('10', 'JACKSON Adrian Smith SDX MN SW Electric Guitar', 499, 'jackson', description, jacksonAdrian),
    new Item('11', 'JACKSON Misha Mansoor Juggernaut HT7P Caramelized Maple Black Burst Burl 7string Εlectric Guitar', 979, 'jackson', description, jacksonMisha),
    new Item('12', 'JACKSON JS32 Dinky Arch Top DKA-M SW Electric Guitar', 322, 'jackson', description, jacksonJS32),
    new Item('13', 'KRAMER Baretta Special Purple Electric Guitar', 199, 'kramer', description, kramerBaretta),
    new Item('14', 'KRAMER Custom Graphics "Hot Rod" Baretta Blue Sparkle w/Flames Electric Guitar', 1_019, 'kramer', description, kramerCustom),
    new Item('15', 'KRAMER Focus VT211S Ruby Red Electric Guitar', 129, 'kramer', description, kramerFocus)
  ],
  amps: [
    new Item('16', 'BLACKSTAR HT Club 40 MKII Electric Guitar Amplifier', 865, 'blackstar', description, blackstar),
    new Item('17', 'BLACKSTAR FLY 3 Vintage Electric Guitar Amplifier', 77, 'blackstar', description, blackstarFly),
    new Item('18', 'FENDER 57 Custom Champ Electric Guitar Amplifier', 1_444, 'fender', description, fender57),
    new Item('19', 'LANEY LX-15 RED Electric Guitar Amplifier', 89, 'laney', description, laneyLX15),
    new Item('20', 'FENDER Hot Rod Deluxe IV El.Guitar Amp', 1_079, 'fender', description, fenderHotRod),
    new Item('21', 'ORANGE Mini Crush Electric Guitar Amplifier', 69, 'orange', description, orange)
  ],
  pedals: [
    new Item('22', 'BLACKSTAR FS-12 Footswitch', 79, 'blackstar', description, blackstarFS12),
    new Item('23', 'BOSS GT-1000 Multi Effect with Pedal For Electric Guitar', 1_159, 'boss', description, bossGT1000),
    new Item('24', 'ELECTRO HARMONIX Canyon Effects Pedal Delay & Looper', 169, 'electro harmonix', description, electroharmonixCanyon),
    new Item('25', 'ENGL Chorus Pedal', 127, 'engl', description, englChorus),
    new Item('26', 'HEADRUSH Looperboard for Electric Guitar', 999, 'headrush', description, headrushLooperboard),
    new Item('27', 'LINE 6 Helix LT Guitar Multieffect ', 1_145, 'line 6', description, line6Helix),
    new Item('28', 'LINE 6 M13 Stomp Box Modeler', 439, 'line 6', description, line6M13),
    new Item('29', 'MXR M292 Carbon Copy Deluxe Analog Delay', 266, 'mxr', description, mxrMR292),
    new Item('30', 'PROEL GF-14L Volume/Expression Stereo Pedal', 40, 'proel', description, proeflGF141),
    new Item('31', 'ZOOM AC-2 Acoustic Guitar Effects Pedal', 218, 'zoom', description, zoomAC2)
  ],
  accessories: [
    new Item('32', 'FENDER 150L El.Guitar Strings', 6.70, 'fender', description, fenderStrings),
    new Item('33', 'FENDER Original Tuner DBL', 14.40, 'fender', description, fenderTuner),
    new Item('34', 'GIBSON ASAC-TAN MONTANA STRP TAN Leather Strap', 68, 'gibson', description, gibsonASAC),
    new Item('35', 'Gibson Gear ASCL-BRN The Classic Brown Leather with Suede Back', 68, 'gibson', description, gibsonASCL),
    new Item('36', 'Gibson ASGG-600 2 inch Woven Guitar Strap Black-Red', 18.90, 'gibson', description, gibsonASGG)
  ]
}

export default items;
