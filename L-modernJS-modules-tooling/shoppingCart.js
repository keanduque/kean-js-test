// Exporting Module
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];
//2 types of exports : Named Exports & Default Exports
// need to happen in top level code

////////////////////////////////
// Named Exports - simplest way of exporting from a module, all we have to do is to put export in front of anything we want to export.

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qty, shippingCost };

////////////////////////////////
// Default Export - we want to export one thing per module

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
