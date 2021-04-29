////////////////////////////////////////
// Exporting and Importing in ES6 Modules

// Importing Module
// import { addToCart, totalPrice as price, qty } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, qty);

console.log('Importing module');

//
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.qty);
//

// import add, { addToCart, totalPrice as price, qty } from './shoppingCart.js'; // not preferred to use Named and Default exports at the same time.

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 2);
add('apples', 2);

console.log('cart', cart);

/* 
////////////////////////////////////////
// The Module Pattern - IIFE

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} added to supplier`);
  };

  //return public API
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);

console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // undefined bec. private
 */
/* 
////////////////////////////////////////
// The Common Modules

//Export - export is for node not working here.
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

// Import
const {addToCart} = require('./shoppingCart.js') 

*/

////////////////////////////////////////
// Introduction to npm
// npm install of leaflet and lodash modules

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

//**  to run with lodash in live server type this in terminal : npx parcel index.html
// or npm script to actually work in practice, automate repetetive tasks.
// npm run start from package.json
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

//parcel can understand - when change any of the modules, it will trigger a module, whernever change below this parecel command this will not reload the part of the page.
if (module.hot) {
  module.hot.accept();
}

////////////////////////////////////////
// Configuring Babel and Polyfilling

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const kean = new Person('Kean');

console.log('Kean' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

//Polyfill
import 'core-js/stable';
// import 'core-js/stable/array/find';
//import 'core-js/stable/promise';

//Polyfilling async functions
import 'regenerator-runtime/runtime';
