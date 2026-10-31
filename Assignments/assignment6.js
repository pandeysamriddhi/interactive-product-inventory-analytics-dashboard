// Assignment 6: Arrays, Objects, and Core Methods

const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 },
];

// forEach: print every product
console.log("-- All Products (forEach) --");
products.forEach((product) => {
  console.log(`Item: ${product.name} - Price: $${product.price}`);
});

// filter: items under $50
const maxPrice = 50;
const affordable = products.filter((product) => product.price < maxPrice);
console.log(`\n-- Filtered Products (Price < $${maxPrice}) --`);
console.log(affordable);

// map: build formatted strings
const tags = products.map((product) => `${product.name.toUpperCase()} costs $${product.price}`);
console.log("\n-- Mapped Product Tags (map) --");
console.log(`[ ${tags.map((t) => `"${t}"`).join(", ")} ]`);
