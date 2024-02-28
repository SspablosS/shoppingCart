import readlineSync from 'readline-sync';

function addItem(shoppingCart) {
  const name = readlineSync.question('Введите имя товара:');
  const price = readlineSync.questionInt('Введите цену товара:');
  const quantity = readlineSync.questionInt('Введите количество товара:');

  const item = { name, price, quantity };
  shoppingCart.items.push(item);
  shoppingCart.total += price * quantity;
}

export { addItem };
