const num = [10, 80, 8, 50];
let max = num[0];
num.forEach(function (num) {
    if (max < num) {
        max = num;
    }
})

console.log(max);

console.log(Math.max(...num));