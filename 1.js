var entrada1 = require("readline-sync");
var semana = 40;
var mes = 4 * semana;
var time = parseFloat(entrada1.question("Coloque aqui quanto vale sua hora de trabalho: "));
var valor = parseFloat(entrada1.question("Digite a quantidade de horas trabalhadas por mes: "));
var soma = time * mes;
if (valor > mes) {
    var sx = (((valor - mes) * time) * 1.5) + soma;
    console.log("seu salario do mes e: " + sx);
}
else if (valor == mes) {
    console.log("seu salario deste mes e:" + soma);
}
