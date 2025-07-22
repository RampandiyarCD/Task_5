console.log("Start"); // synchronous high priorty

setTimeout(() => {
  console.log("Timeout callback"); // macrotask least priorty
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback"); // microtask 2nd high priorty
});

console.log("End"); // synchronous high priorty