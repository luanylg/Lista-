var entrada2 = require("readline-sync");
var salario = parseFloat(entrada2.question("me diga o seu salario: "));
var vendinhas = parseFloat(entrada2.question("o seu total da venda: "));
if (vendinhas <= 1.500) {
    var soma = vendinhas * 0.03;
    var total = soma + salario;
    console.log("seu salario sera de: " + total);
}
else {
    var s = vendinhas * 0.05;
    var t = s + salario;
    console.log("seu novo salario sera de: " + t);
}
