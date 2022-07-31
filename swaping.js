let a = 10, b = 20;
console.log(`before swaping a=${a} b=${b}`);
a = a + b;
b = a - b;
a = a - b;

console.log(`after swaping a=${a} b=${b}`);