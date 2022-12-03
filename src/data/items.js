import Item from './Item';

// LONG import the images
import testImage from '../images/test-image.jpeg'; //for tests only TODO: Remove before final push

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis quam id diam finibus luctus. Curabitur hendrerit eget libero id placerat. In id vestibulum turpis. Mauris scelerisque sagittis felis, faucibus semper justo lobortis ut. Morbi tempus neque id mi elementum, ut mollis felis vestibulum. Duis pharetra sapien lacus, et ultrices dolor tempus sit amet. Donec quis hendrerit erat. Vivamus in sem lorem. Curabitur non est vitae justo condimentum aliquam. Proin suscipit, quam eu condimentum suscipit, tortor felis tristique enim, at consequat lorem ex et ipsum. Donec eget gravida lacus, sit amet semper diam. Phasellus ipsum lacus, aliquam ac orci non, pellentesque dignissim dolor. ';

/* items object 
    form  -guitars[]
          -amps[]
          -pedals[]
          -accessories[]
*/

const items = {
  guitars: [
    new Item('test guitar', 330.50, 'fender', description, testImage),
  ],
  amps: [

  ],
  pedals: [

  ],
  accessories: [

  ]
}

export default items;
