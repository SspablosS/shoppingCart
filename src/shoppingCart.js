import readlineSync from 'readline-sync';

let shoppingCart = {
  items: [],
  total: 0,

  addItem() {
    const name = readlineSync.question('Введите имя товара: ');
    const price = readlineSync.questionInt('Введите цену товара: ');
    const quantity = readlineSync.questionInt('Введите количество товара: ');

    const item = { name, price, quantity };
    this.items.push(item);
    this.calculateTotal();
  },

  removeItem() {
    const name = readlineSync.question(
      'Введите имя товара, который нужно удалить: '
    );
    const index = this.items.findIndex((item) => item.name === name);

    if (index !== -1) {
      const { price, quantity } = this.items[index];
      this.total -= price * quantity;
      this.items.splice(index, 1);
    }
  },

  updateQuantity() {
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
  },

  calculateTotal() {
    this.total = this.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  },

  clearCart() {
    this.items = [];
    this.total = 0;
  },

  applyDiscount() {
    const actualCode = 'SUPERSALE2024';
    const code = readlineSync.question('Введите код скидки: ');

    if (code === actualCode) {
      this.total = (this.total / 100) * 80;
      console.log('Скидка применена успешно!');
    } else {
      console.log('Код скидки недействителен');
    }
  },
};

export { shoppingCart };
