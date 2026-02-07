// 1. String Declaration
let a = "Anand"; // String Literal
let hello = new String("Anand"); // String Object

console.log(typeof a);     // "string"
console.log(typeof hello); // "object"

// 2. Escape Characters & Length
let str1 = "school\nw1"; 
// Note: \n is treated as a single character
console.log(str1.length); // 9 (not 10)

// 3. Immutability Test
let myName = "hello world";
myName[4] = "i"; // This will fail silently in non-strict mode
console.log(myName); // "hello world" (Value didn't change)

// To change a string, you must reassign it:
myName = myName.replace('o', 'i');
console.log(myName); // "helli world"