// Assignment 1: Variables, Data Types, and Console Operations

var name = "Alice";                          // var: function-scoped, re-assignable
let age = 25;                                // let: block-scoped, re-assignable
const isEmployed = true;                     // const: block-scoped, cannot be re-assigned
const skills = ["HTML", "CSS", "JavaScript"];

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
console.log(`Skills: [${skills.map((s) => `"${s}"`).join(", ")}] (Type: ${typeof skills})`);
