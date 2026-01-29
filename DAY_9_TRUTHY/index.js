// truthy / falsy
let a = undefined;
let b = NaN;
console.log ( a||b? "true":"false"); 
// short circuite
// OR
console.log("a"|| 5|| false||"hello");
// ans = a;
console.log(""||null||0||"hello"||undefined);
// ans = hello;
// && AND
console.log("a" && 56 && true && null);
// ans = null
console.log("fjd" && 45 && 0 && null && false);
// ans = 0;

// ?? 
console.log("car"?? undefined);