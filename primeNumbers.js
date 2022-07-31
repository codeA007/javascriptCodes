const num = 100;

for (let i = 1; i < num; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            break;
        }
    }
    if (i == j) {
        console.log(i);
    }
}