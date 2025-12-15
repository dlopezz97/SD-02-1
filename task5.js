// Refer to Task 5 in your Instructions to complete this task
const prompt = require("prompt-sync")();
const name = prompt("Ingresa tu nombre");
const max =+prompt("Ingresa el tope de numeros:")

for(let i=1; i<=max; i++){
  if (i%3===0) {
    if (i%5===0) {
      if (i%7===0) console.log("FizzBuzzWoof");
      else console.log("FizzBuzz");
    }
    else if (i%7===0) console.log("Fizz Woof");
    else console.log("Fizz");
  }
  else if (i%5===0){
    if (i%7===0) console.log("BuzzWoof");
    else console.log("Buzz");
  }  
  else if (i%7===0) console.log("Woof");
  else console.log(i);
}