export default class CartFactory {
  constructor() {
    this.cart = [];
  }

  addToCart(item) {
    this.cart.push(item);
  }

  removeFromCart(item) {
    this.cart = this.cart.filter(i => i.id !== item.id);
  }
}
