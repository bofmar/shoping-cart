import { nanoid } from 'nanoid'

export default class Item {
  constructor(name, price, brand, description, image) {
    this.id = nanoid();
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.description = description;
    this.image = image;
  }
}
