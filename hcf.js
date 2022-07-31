let a = 16;
let b = 12;
//16%12=4;
//12%4=0;
//hcf = 4
while (1) {
    var hcf = b;
    let r = a % b;
    a = b;
    b = r;
    if (b == 0) {
        break;
    }
}
console.log(hcf);