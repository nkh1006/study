// synchronous

console.log(" I ");
console.log(" eat ");
console.log(" ice cream ");
console.log(" with a ");
console.log(" spoon ");

// Asynchronous

console.log(" I ");
console.log(" eat ");
console.log(" ice cream ");
console.log(" with a ");
console.log(" spoon ");

setTimeout(() => {

}, 1000);

function one () {
  console.log(" step 1 ");
}

function two () {
  console.log(" step 2 ");
}