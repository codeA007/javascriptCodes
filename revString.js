const string = "Abhishek sawkar";
let arr = [];
// console.log(string.length);
for (var i = string.length - 1; i >= 0; i--) {
    arr.push(string[i]);
}
let revStr = arr.join("");

console.log(revStr);