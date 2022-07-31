let name = "Abhishek Aeiu"
name = name.replace(/ +/g, "");
const arr = [];
console.log(name);
for (i = 0; i < name.length; i++) {
    arr.push(name[i]);
}
// console.log(arr);
for (j = 0; j < arr.length; j++) {
    if (arr[j] == 'A' || arr[j] == 'e' || arr[j] == 'i' || arr[j] == 'o' || arr[j] == 'u') {
        // console.log(arr[j]);
        arr.splice(j, 1);
    }
}
// arr.forEach((e) => {
//     if (e == 'A' || e == 'e' || e == 'i' || e == 'o' || e == 'u') {
//         arr.splice(e, 1);
//         // console.log(arr.join(''));
//     }
// })
console.log(arr.join(""));