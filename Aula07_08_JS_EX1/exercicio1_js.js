/*
1- Faca um programa que, para um n qualquer, o programa imprima n linhas com o
seguinte padrao:
    1) 1
    2) 2 3
    3) 4 5 6
    4) 7 8 9 10
    5) 11 12 13 14 15
    6) 16 17 18 19 20 21

    Solução:
    1 - Usario chama a funcao com o n desejado 
    2 - Criar uma variavel string
    3 - Fazer os loops
*/

function ImprimePadrao(n){
    var umaString = "";
    var contador = 1;

    for (var i = 1; i <= n; i++) {
        umaString += i+") ";
        for(var j = 1; j <= i; j++){
            umaString += contador; // preenche a linha
            umaString += " "; // preenche a linha
            contador++; 
        }
        umaString += "\n"; // pula a linha
    }
    console.log(umaString); // imprime
}









