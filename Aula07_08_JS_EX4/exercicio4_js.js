/*
Questao 4) Faca um programa em javascript cria 
uma constante n om um valor qualquer e calcula:

    Somatorio de i=1 ate n^2 (Pi+i)^3/(Pi-i)

O valor de deve ser 3:14159.
11.90695513062276
3.2685954484698194
*/

const n = 2;
const pai = Math.PI;
console.log("Pi: "+pai);

var soma = 0;

for(var i=1; i<=(n*n); i++){
    soma += ((pai+i)**3)/(pai-i);
    console.log(soma);
}

console.log("Final: "+soma);
