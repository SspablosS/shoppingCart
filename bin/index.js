#!/usr/bin/env node

import { shoppingCart } from '../src/shoppingCart.js';
import {
  addItem,
  clearCart,
  removeItem,
  updateQuantity,
} from '../src/methods.js';

const boundAddItem = addItem.bind(shoppingCart);
const boundRemoveItem = removeItem.bind(shoppingCart);
const boundUpdateQuantity = updateQuantity.bind(shoppingCart);
const boundClearCart = clearCart.bind(shoppingCart);

boundAddItem();
boundRemoveItem();
boundUpdateQuantity();
boundClearCart();

console.log('Список товаров в корзине:');
console.log(shoppingCart.items);
console.log('Общая стоимость товаров в корзине: ' + shoppingCart.total);
