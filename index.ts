console.log('POO en TypeScript and Deno 🦕');
class Store {
  constructor(
    public storeName: string,
    public products: Array<string>,
    public stockOfProduct: number,
    public costOfProductByProduct: number
  ) {
    this.storeName = storeName;
    this.products = products;
    this.stockOfProduct = stockOfProduct;
    this.costOfProductByProduct = costOfProductByProduct;
  }

  useProduct(): void {
    console.log('using product');
    this.stockOfProduct -= this.costOfProductByProduct;
  }

  logStockOfCheeseReamining(): void {
    console.log(`>${this.storeName}<`);
    console.log(`The stock of cheese remaining is: ${this.stockOfProduct}`);
  }
}

const denoPizzaLandia = new Store(
  '🍕 DenoPizzaLandia 🍕',
  ['pizza of cheese', 'hamburguer of cheese', 'hot dog with cheese'],
  1000,
  100
);

denoPizzaLandia.useProduct(); // using product
denoPizzaLandia.useProduct(); // using product
denoPizzaLandia.useProduct(); // using product
denoPizzaLandia.logStockOfCheeseReamining();
// >🍕 DenoPizzaLandia 🍕<
// The stock of cheese remaining is: 700
