import Item from './Item';

// LONG import the images
import testImage from '../images/test-image.jpeg'; //for tests only TODO: Remove before final push

/* items object 
    form  -guitars[]
          -amps[]
          -pedals[]
          -accessories[]
*/

const items = {
  guitars: [
    new Item('test guitar', 330.50, 'fender', testImage),
  ],
  amps: [

  ],
  pedals: [

  ],
  accessories: [

  ]
}

export default items;
