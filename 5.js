var entrada6 = require("readline-sync");
var time1 = (entrada6.question("qual o primeiro time: "));
var time2 = (entrada6.question("qual o segundo time: "));
var gols1 = parseFloat(entrada6.question("quantos gols o primeiro time fez: "));
var gols2 = parseFloat(entrada6.question("quantos gols o segundo time fez: "));
if (gols1 > gols2) {
    console.log(time1 + " ganhou de " + gols1 + " a " + gols2);
}
if (gols2 > gols1) {
    console.log(time2 + " ganhou de " + gols2 + " a " + gols1);
}
if (gols1 == gols2) {
    console.log("a partida ficou empatada, PUTS!!");
}
