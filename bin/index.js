#!/usr/bin/env node

import { shoppingCart } from './shoppingCart.js';
import { addItem } from './methods.js';

addItem(shoppingCart);

console.log('Список товаров в корзине:');
console.log(shoppingCart.items);
console.log('Общая стоимость товаров в корзине: ' + shoppingCart.total);
