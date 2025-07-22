function Ram(name,age){
    return "Hi"+" "+name+" "+"You are"+" "+age
}

console.log(Ram("Ram",21))

// IIFE
const result = (function(a, b) {
    return a + b;
})(5, 3);
console.log(result);

// hoisting means calling function before the declaration
console.log(add(3,3));

function add(a,b){
    return a + b;
}

// returning a inner function using a outer function for even after inner execution the outer func will remember
function out() {
  let outer = "Out";

  function inner() {
    console.log(outer); 
  }

  return inner;
}

const closure = out(); 
closure(); 