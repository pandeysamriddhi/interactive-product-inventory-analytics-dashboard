// Assignment 5: Function Architecture and Scope

// Standard function with default parameters
function rectangleArea(length = 5, width = 4) {
  return length * width;
}

// Arrow function with default parameters
const rectangleAreaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${rectangleArea()}`);
console.log(`Arrow Function Area (Custom 10x3): ${rectangleAreaArrow(10, 3)}`);

// Function scope: variables declared inside a function are not visible outside
function functionScopeDemo() {
  var insideFunction = "I only exist inside this function";
  return insideFunction;
}
functionScopeDemo();

try {
  console.log(insideFunction);
} catch (error) {
  console.log(`Function Scope Test Error: ${error.name}: ${error.message}`);
}

// Block scope: let/const are limited to the { } block they are declared in
{
  let blockVar = "I only exist inside this block";
}

try {
  console.log(blockVar);
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: ${error.message}`);
}
