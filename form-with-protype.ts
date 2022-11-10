interface IStore {
  storeName: string;
  products: Array<string>;
  stockOfProduct: number;
  costOfProductByProduct: number;
}

function Store(
  this: IStore,
  { storeName, products, stockOfProduct, costOfProductByProduct }: IStore
) {
  this.storeName = storeName;
  this.products = products;
  this.stockOfProduct = stockOfProduct;
  this.costOfProductByProduct = costOfProductByProduct;
}

Store.prototype.useProduct = function (): void {
  console.log('using product');
  this.stockOfProduct -= this.costOfProductByProduct;
};

Store.prototype.logStockOfCheeseReamining = function (): void {
  console.log(`>${this.storeName}<`);
  console.log(`The stock of cheese remaining is: ${this.stockOfProduct}`);
};

const denoPizzaLandia = new (Store as any)({
  StoreName: '🍕 DenoPizzaLandia 🍕',
  products: ['pizza of cheese', 'hamburguer of cheese', 'hot dog with cheese'],
  stockOfProduct: 1000,
  costOfProductByProduct: 100,
});
const denoJam = new (Store as any)({
  StoreName: '🍕 DenoJamLandia 🍕',
  products: ['pizza of Jam', 'hamburguer of Jam', 'hot dog with Jam'],
  stockOfProduct: 900,
  costOfProductByProduct: 25,
});

denoPizzaLandia.useProduct();
denoPizzaLandia.useProduct();
denoPizzaLandia.useProduct();
denoPizzaLandia.useProduct();
denoPizzaLandia.logStockOfCheeseReamining();
denoJam.useProduct();
denoJam.useProduct();
denoJam.useProduct();
denoJam.logStockOfCheeseReamining();
