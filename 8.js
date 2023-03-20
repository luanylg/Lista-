var entrada8 = require("readline-sync");

var nome = entrada8.question("digite seu nome: ")
var money = parseFloat(entrada8.question("salario atual: "));
var work = parseFloat(entrada8.question("digite seus anos de trabalho na empresa: "));

if (work<=3){
    var soma = money*1.03;
console.log ("Esse é o seu novo salario: "+ soma);
}

if(work>3 && work<10){
    var conta1= money*1.125;
console. log("Esse é o seu novo salario: " + conta1);
}

if (money>=10){
    var conta2 = money*1.2;
console.log("Esse é o seu novo salario: " +conta2);
}