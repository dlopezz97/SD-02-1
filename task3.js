// Refer to Task 3 in your Instructions to complete this task
const prompt = require("prompt-sync")();
const name = prompt("Ingresa tu nombre");

for(let i=1; i<=105; i++){
  if (i%3===0) {
    if (i%5===0) console.log("FizzBuzz")
    else console.log("Fizz");
  }
  else if (i%5===0) console.log("Buzz");
  else console.log(i);
  
}
