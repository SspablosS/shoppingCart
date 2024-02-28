import readlineSync from 'readline-sync';

function addItem() {
  let answer = 'Да';
  while (true) {
    if (answer === 'Да') {
      const name = readlineSync.question('Введите имя товара: ');
      const price = readlineSync.questionInt('Введите цену товара: ');
      const quantity = readlineSync.questionInt('Введите количество товара: ');

      const item = { name, price, quantity };
      this.items.push(item);
      this.total += price * quantity;

      answer = readlineSync.question('У вас еще остались товары? (Да/Нет): ');
    } else {
      break;
    }
  }
}

function removeItem() {
  const name = readlineSync.question(
    'Введите имя товара, который нужно удалить: '
  );
  const index = this.items.findIndex((item) => item.name === name);

  if (index !== -1) {
    const { price, quantity } = this.items[index];
    this.total -= price * quantity;
    this.items.splice(index, 1);
  }
}

function updateQuantity() {
  const name = readlineSync.question(
    'Введите имя товара, количество которого нужно изменить: '
  );
  const index = this.items.findIndex((item) => item.name === name);

  if (index !== -1) {
    const newQuantity = readlineSync.questionInt('Новое количество: ');
    const { price, quantity } = this.items[index];
    this.total += price * (newQuantity - quantity);
    this.items[index].quantity = newQuantity;
  }
}

function clearCart() {
  this.items = [];
  this.total = 0;
}

export { addItem, removeItem, updateQuantity, clearCart };
