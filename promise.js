// create func to return promise
function makeCoffee(istrue) {
  return new Promise((resolve, reject) => {  //micro
    setTimeout(() => {  //macro
      if (istrue) {
        resolve("Resolved");
      } else {
        reject("Rejected");
      }
    }, 2000); //2000ms
  });
}

console.log("Starting coffee machine...");//syncro

makeCoffee(true)
  .then(resol => console.log(resol)) // if successful
  .catch(error => console.log(error))  // if error
  .finally(() => console.log("Process complete.")); // Always runs no matter what

makeCoffee(false)
  .then(resol => console.log(resol))
  .catch(error => console.log(error));