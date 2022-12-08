export default function priceFormater(price) {
  return price.toLocaleString('en-IN', { style: 'currency', currency: 'EUR' });
}
