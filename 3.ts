const entrada3 = require ("readline-sync");

let number: number = parseFloat(entrada3. question("numero da conta: "));
let saldo: number = parseFloat(entrada3.question("saldo da sua conta: "));
let debito: number = parseFloat(entrada3.question("valor do debito: "));
let credito: number = parseFloat( entrada3.question("valor do credito: "));
let total = saldo+credito-debito

if (total>0){
console.log("saldo positivo de: " +total);
}

else{
console.log("saldo negativo de: " +total);
}