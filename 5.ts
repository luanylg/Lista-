const entrada6 = require ("readline-sync");

let time1: string = (entrada6.question("qual o primeiro time: "));
let time2: string = (entrada6.question ("qual o segundo time: "));
let gols1: number = parseFloat (entrada6.question("quantos gols o primeiro time fez: "));
let gols2: number = parseFloat (entrada6.question("quantos gols o segundo time fez: "));

if (gols1>gols2){
console.log(time1+ " ganhou de " +gols1 + " a " + gols2);
}

if (gols2>gols1){
console.log(time2+ " ganhou de " +gols2 + " a " + gols1);
}

if(gols1==gols2){
console. log("a partida ficou empatada, PUTS!!")
}