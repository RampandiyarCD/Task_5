//object creation
const person= {
    name : "Ram",
    age : 21,
    ram : function(){
        return this.name+" "+this.lastname
    }
};

console.log(person)
//add in object
person.lastname = "Pandiyar";

console.log(person.ram());
//remove in object
delete person.age;

console.log(person)
// diff type of access and add 
person['age'] = 21;

console.log(person);
// diff type of remove access
delete person['age'];

console.log(person)
// object loop
for(let key in person){
    console.log(key)
}