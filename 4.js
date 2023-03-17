var entrada4 = require("readline-sync");
var baby = parseFloat(entrada4.question("digite um numero: "));
if (baby > 0) {
    console.log(baby + " é positivo");
}
if (baby < 0) {
    console.log(baby + " é negativo");
}
if (baby == 0) {
    console.log(baby + " é zero");
}
