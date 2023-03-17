var entrada3 = require("readline-sync");
var number = parseFloat(entrada3.question("numero da conta: "));
var saldo = parseFloat(entrada3.question("saldo da sua conta: "));
var debito = parseFloat(entrada3.question("valor do debito: "));
var credito = parseFloat(entrada3.question("valor do credito: "));
var total = saldo + credito - debito;
if (total > 0) {
    console.log("saldo positivo de: " + total);
}
else {
    console.log("saldo negativo de: " + total);
}
