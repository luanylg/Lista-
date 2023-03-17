const entrada2 = require("readline-sync");
let salario: number = parseFloat (entrada2. question ("Digite o seu salario: "));
let vendinhas: number = parseFloat (entrada2.question ("Total da venda: "));

if (vendinhas <= 1.500){
let soma = vendinhas*0.03;
let total = soma+salario;
console. log ("seu salario sera de: " + total);
}
else{
let s = vendinhas*0.05;
let t = s + salario;
console. log("seu novo salario sera de: "+t);
}