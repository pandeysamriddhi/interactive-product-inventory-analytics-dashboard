// Capstone: Interactive Product Inventory & Analytics Dashboard
// Run in a browser console (uses prompt()). The shim below lets it also run
// in Node with default answers ("Monitor" at "150") for testing.
if (typeof prompt === "undefined") {
  const defaults = ["Monitor", "150"];
  globalThis.prompt = () => defaults.shift();
}

console.log("--- Initializing Inventory System ---");

// ---------- 1. Data & input initialization ----------
const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
];

// ---------- 2. Control flow: validation + category badges ----------
function getCategory(price) {
  switch (true) {
    case price < 50:
      return "Budget";
    case price < 500:
      return "Standard";
    default:
      return "Premium";
  }
}

function isValidProduct(name, price) {
  if (!name || name.trim() === "") return false;
  if (Number.isNaN(price) || price <= 0) return false;
  return true;
}

// ---------- 3. Loops & flow control: retry bad input, search duplicates ----------
const MAX_ATTEMPTS = 3;
let added = false;

for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
  const rawName = prompt("Enter the new product name:");
  const rawPrice = prompt("Enter the new product price ($):");

  if (rawName === null || rawPrice === null) {
    console.log("Input cancelled.");
    break; // user cancelled: stop asking
  }

  const name = rawName.trim();
  const price = Number(rawPrice); // explicit conversion

  if (!isValidProduct(name, price)) {
    console.log(`Invalid input (attempt ${attempt}/${MAX_ATTEMPTS}). Please try again.`);
    continue; // bad input: ask again
  }

  // search the inventory for a duplicate
  let duplicate = false;
  for (const item of inventory) {
    if (item.name.toLowerCase() === name.toLowerCase()) {
      duplicate = true;
      break; // found one, no need to keep searching
    }
  }

  if (duplicate) {
    console.log(`"${name}" already exists in the inventory.`);
    break;
  }

  inventory.push({ name, price });
  console.log(`[Prompt executed: User adds "${name}" at "$${price}"]`);
  added = true;
  break;
}

if (!added) {
  console.log("No new product was added.");
}

// ---------- 4. Functions & scope ----------
// Regular function: total inventory value
function calculateTotal(items) {
  let total = 0; // local variable, not visible outside the function
  for (const item of items) {
    total += item.price;
  }
  return total;
}

// Arrow functions with custom tax / discount parameters
const applyTax = (amount, taxRate = 0) => amount + (amount * taxRate) / 100;
const applyDiscount = (amount, discountRate = 0) => amount - (amount * discountRate) / 100;

// ---------- 5. Array methods & iteration ----------
console.log("\n--- Processing Inventory Roster (forEach) ---");
inventory.forEach((item) => {
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`);
});

const total = calculateTotal(inventory);
const affordable = inventory.filter((item) => item.price < 200).map((item) => item.name);
const report = inventory.map((item) => `${item.name.toUpperCase()}: $${item.price}`);
const quote = (list) => `[${list.map((s) => `"${s}"`).join(", ")}]`;

console.log("\n--- Financial Analytics ---");
console.log(`Total Inventory Value: $${total}`);
console.log(`Filtered Affordable Items (Under $200): ${quote(affordable)}`);
console.log(`Formatted Report List: ${quote(report)}`);

// Bonus: demonstrate the tax/discount arrow functions (not in the expected output)
// console.log(`With 18% tax: $${applyTax(total, 18)}`);
// console.log(`With 10% discount: $${applyDiscount(total, 10)}`);
