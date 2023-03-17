var entrada5 = require("readline-sync");
var number1 = parseFloat(entrada5.question("digite um numero: "));
var number2 = parseFloat(entrada5.question("digite outro numero: "));
var number3 = parseFloat(entrada5.question("digite mais um numero: "));
if (number1 > number2 && number1 > number3 && number2 > number3) {
    console.log("a ordem crescente é: " + number1, +number2, +number3);
}
if (number1 < number2 && number1 < number3 && number3 < number2) {
    console.log("a ordem crescente é: " + number1, +number3, +number2);
}
if (number2 > number1 && number2 < number3 && number1 < number3) {
    console.log("a ordem crescente é: " + number2, +number1, +number3);
}
if (number2 < number1 && number2 < number3 && number3 < number1) {
    console.log("a ordem crescente é: " + number2, +number3, +number1);
}
if (number3 < number2 && number3 < number1 && number2 < number1) {
    console.log("a ordem crescente é: " + number3, +number2, +number1);
}
if (number3 < number2 && number3 < number1 && number1 < number2) {
    console.log("a ordem crescente e: " + number3, +number1, +number2);
}
