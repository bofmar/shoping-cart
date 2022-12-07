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

  ],
  accessories: [

  ]
}

export default items;
