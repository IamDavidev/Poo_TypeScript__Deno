const store1 = '🍕 DenoPizzaLandia 🍕';
const products: Array<string> = [
  'pizza of cheese',
  'hamburguer of cheese',
  'hot dog with cheese',
];
let stockOfCheese = 1000;
const costOfCheeseByProduct = 100;

function useCheese() {
  console.log('🧀 Using cheese 🧀');
  stockOfCheese -= costOfCheeseByProduct;
}

function logStockOfCheeseReamining(): void {
  console.log(`>${store1}<`);
  console.log(`The stock of cheese remaining is: ${stockOfCheese}`);
}

useCheese();
useCheese();
useCheese();
logStockOfCheeseReamining();

const store2 = '🍕 DenoPizzaLandia 🍕';
const products2: Array<string> = [
  'pizza of Jam',
  'hamburguer of Jam',
  'hot dog with Jam',
];
let stockOfJam = 900;
const costOfJamByProduct = 25;

// ....
//  and so on with each store
