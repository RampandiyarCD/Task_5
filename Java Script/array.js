//array declaration
const array = [
  { id: 1, name: "Ram", age: 21 },
  { id: 2, name: "Khalid", age: 20 },
  { id: 3, name: "Sulthan", age: 21 },
  { id: 4, name: "Rishi", age: 20 },
  { id: 5, name: "Vicky", age: 20 },
];

//mapping
const names = array.map(user => user.name);
console.log(names); 
//filtering
const filtering = array.filter(user => user.age === 20);
console.log(filtering);
//foreach
array.forEach(user => {
  console.log(`${user.name} is ${user.age} years old.`);
});
//reduce
const totalAge = array.reduce((sum, user) => sum + user.age,0);
console.log("Total Age:", totalAge);
//sort
array.sort((a, b) => a.age - b.age);
console.log(users);