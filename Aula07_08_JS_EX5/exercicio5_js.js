/*
Questao 5) (Repeticao) 
    A multiplicacao pode ser representada como uma serie de somas consecutivas.
    Por exemplo, 5 * 6 = (5+5+5+5+5+5). 
    Escreva uma funcao que recebe como parametros 2 numeros inteiros 
        e calcula a multiplicacao de 2 num atraves de somas sucessivas.
*/

function multiplicaAtravesSoma(a,b){
    var resultado=0;
    for(var i=1;i<=b;i++){
        resultado += a;
    }

    return resultado;
}