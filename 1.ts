const entrada1= require("readline-sync");
let semana = 40;
let mes = 4*semana;


let time : number = parseFloat(entrada1.question("Coloque aqui quanto vale sua hora de trabalho: "));
let valor: number = parseFloat(entrada1.question("Digite a quantidade de horas trabalhadas por mes: "));
let soma = time * mes;

if(valor>mes){
    let sx =  (((valor - mes) * time)* 1.5) + soma;
console.log("seu salario do mes e: " + sx);
}
else if(valor == mes){
    console.log("seu salario deste mes e:" + soma);
}