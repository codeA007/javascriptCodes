let num = 20;

let n1 = 0, n2 = 1, n3;
console.log(n1);
console.log(n2);
for (i = 0; i < num; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    console.log(n3);
}