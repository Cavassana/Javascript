/*
Questao 2) 
Faca um trecho de codigo em javaScript com a seguinte regra: 
    Seja dSem um valor entre 0 e 6. 
    - Caso dSem seja 0, imprime Domingo. 
    - Caso dSem seja 1, imprime Segunda. 
    - Caso dSem seja 2, imprime Terca,
    e assim sucessivamente ate imprimir Sabado. 
    Seu programa deve conter um switch case. Nao pode conter if.*/

function diaSemana(n) {
    vetorDiasSemana =
        ["Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sábado"];

    switch (n) {
        case 0:
            console.log(vetorDiasSemana[0]);
            break;
        case 1:
            console.log(vetorDiasSemana[1]);
            break;
        case 2:
            console.log(vetorDiasSemana[2]);
            break;
        case 3:
            console.log(vetorDiasSemana[3]);
            break;
        case 4:
            console.log(vetorDiasSemana[4]);
            break;
        case 5:
            console.log(vetorDiasSemana[5]);
            break;
        case 6:
            console.log(vetorDiasSemana[6]);
            break;
        default:
            break;
    }
}
