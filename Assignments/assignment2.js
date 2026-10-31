// Assignment 2: Operators, Expressions, and Input Handling
// Runs in a browser (uses prompt()). The shim below lets it also run in Node
// using default values, so it can be tested from a terminal.
if (typeof prompt === "undefined") {
  globalThis.prompt = (message, defaultValue) => defaultValue;
}

// prompt() always returns a string, so convert explicitly with Number()
const subtotal = Number(prompt("Enter the bill amount ($):", "100"));
const tipPercent = Number(prompt("Enter the tip percentage (%):", "15"));

if (Number.isNaN(subtotal) || Number.isNaN(tipPercent)) {
  console.log("Invalid input: please enter numbers only.");
} else {
  let tip = subtotal * tipPercent; // multiplication
  tip /= 100;                      // assignment operator (divide-and-assign)

  let total = subtotal;
  total += tip;                    // assignment operator (add-and-assign)

  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tip Percentage: ${tipPercent}%`);
  console.log(`Calculated Tip: $${tip}`);
  console.log(`Total Amount to Pay: $${total}`);
}
