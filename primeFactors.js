const num = 5;
let count = 0;

for (i = 1; i <= num; i++) {
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            // console.log(j);
            break;
        }
    }
    if (j == i) {
        if (num % i == 0) {
            console.log(i);
            count++
        }
    }
}

if (count == 0) {
    console.log("no num found");
}