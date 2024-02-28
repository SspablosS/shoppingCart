#!/usr/bin/env node

import { shoppingCart } from '../src/shoppingCart.js';

shoppingCart.addItem();
shoppingCart.addItem();
shoppingCart.removeItem();
shoppingCart.updateQuantity();
shoppingCart.applyDiscount();

console.log('Список товаров в корзине:');
console.log(shoppingCart.items);
console.log('Общая стоимость товаров в корзине: ' + shoppingCart.total);
