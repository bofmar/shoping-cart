import { nanoid } from 'nanoid'

export default class Item {
  constructor(name, price, category, brand, description, image) {
    this.id = nanoid();
    this.name = name;
    this.price = price;
    this.category = category;
    this.brand = brand;
    this.description = description;
    this.image = image;
  }
}
