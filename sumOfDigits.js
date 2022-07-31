// let num = 222223;
// let sum = 0;
// while (num != 0) {
//     let r = num % 10;
//     sum = sum + r;
//     num = num / 10;
// }

// console.log(sum);

//reverse number
// let num = 222223;
// let sum = 0;
// while (num != 0) {
//     let r = num % 10;
//     sum = sum * 10 + r;
//     num = num / 10;
// }

// console.log(parseInt(sum));

// Amstrong number
let num = 153;
let sum = 0;
while (num != 0) {
    let r = num % 10;
    let i = parseInt(r);
    console.log(i);
    sum += i ** 3;
    num = parseInt(num / 10);
    // let n = parseInt(num)
}
console.log(sum);


