const entrada8 = require("readline-sync");

let nome = entrada8.question("digite seu nome: ")
let money: number = parseFloat(entrada8.question("salario atual: "));
let work: number = parseFloat(entrada8.question("digite seus anos de trabalho na empresa: "));

if (work<=3){
let soma = money*1.03;
console.log ("Esse é o seu novo salario: "+ soma);
}

if(work>3 && work<10){
let conta1= money*1.125;
console. log("Esse é o seu novo salario: " + conta1);
}

if (money>=10){
let conta2 = money*1.2;
console.log("Esse é o seu novo salario: " +conta2);
}
