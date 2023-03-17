var entrada7 = require("readline-sync");
var rapunzel1 = parseFloat(entrada7.question("digite a idade: "));
var rapunzel2 = parseFloat(entrada7.question("digite a idade: "));
var flin1 = parseFloat(entrada7.question("digite a idade: "));
var flin2 = parseFloat(entrada7.question("digite a idade: "));
if (rapunzel1 > rapunzel2 && flin1 > flin2) {
    var socorro = rapunzel1 + flin2;
    var idadex = rapunzel2 * flin1;
    console.log("a soma é: " + socorro + " e a multiplicação é: " + idadex);
}
if (rapunzel1 > rapunzel2 && flin2 > flin1) {
    var socorro = rapunzel1 + flin1;
    var idadex = rapunzel2 * flin2;
    console.log("a soma é: " + socorro + " e a multiplicação é: " + idadex);
}
if (rapunzel2 > rapunzel1 && flin1 > flin2) {
    var socorro = rapunzel2 + flin2;
    var idadex = rapunzel1 * flin1;
    console.log("a soma é:" + socorro + " e a multiplicação é: " + idadex);
}
if (rapunzel2 > rapunzel1 && flin2 > flin1) {
    var socorro = rapunzel2 + flin1;
    var idadex = rapunzel1 * flin2;
    console.log("a soma é: " + socorro + " e a multiplicação é: " + idadex);
}
