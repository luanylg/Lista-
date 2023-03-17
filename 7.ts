const entrada7 = require("readline-sync");

let rapunzel1:number = parseFloat(entrada7.question("digite a idade: "));
let rapunzel2:number = parseFloat(entrada7.question("digite a idade: "));
let flin1:number = parseFloat(entrada7.question("digite a idade: "));
let flin2:number = parseFloat(entrada7.question("digite a idade: "));

 if(rapunzel1 > rapunzel2 && flin1 > flin2){
let socorro = rapunzel1 + flin2;
let idadex = rapunzel2 * flin1;
console.log("a soma é: " + socorro + " e a multiplicação é: " + idadex);
}

if (rapunzel1 > rapunzel2 && flin2 > flin1) {
let socorro = rapunzel1 + flin1;
let idadex = rapunzel2 * flin2;
console. log("a soma é: " + socorro + " e a multiplicação é: " + idadex);
}

if (rapunzel2 > rapunzel1 && flin1 > flin2) {
let socorro = rapunzel2 + flin2;
let idadex = rapunzel1 * flin1;
console.log("a soma é:" + socorro + " e a multiplicação é: " + idadex);
}

if (rapunzel2 > rapunzel1 && flin2 > flin1){
let socorro = rapunzel2 + flin1;
let idadex = rapunzel1 * flin2;
console.log("a soma é: " + socorro + " e a multiplicação é: " + idadex);
}