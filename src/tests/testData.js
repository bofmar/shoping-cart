import testImage from '../images/test-image.jpeg';

const testItem = {
  id: 1234,
  name: 'test guitar',
  price: 200,
  brand: 'testBrand',
  deescription: 'description',
  image: testImage
};

const testItems = {
  guitars: [
    testItem,
    { id: 1245454, name: 'another guitar', price: 350, brand: 'testBrand', description: 'description', image: testImage }
  ],
  amps: [

  ],
  pedals: [

  ],
  accessories: [

  ]
};

export { testItems, testItem }
