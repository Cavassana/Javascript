/*
    Questao 6) (String) Crie um algoritmo que calcula quantas vezes a string "xyz" aparece dentro da
string completa. Voce nao pode usar nenhuma biblioteca pronta.

*/


function conta(palavra) {

    //seu codigo vem aqui.
    const permiteSobreposicao = 0;
    let count = 0;
    let subString = "xyz";
    palavra += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var pos = 0,
        passo = permiteSobreposicao ? 1 : subString.length;

    while (true) {
        pos = palavra.indexOf(subString, pos);
        if (pos >= 0) {
            ++count;
            pos += passo;
        } else break;
    }

    return count;
}

console.log(conta('xyzabcxyzabcxy'));
