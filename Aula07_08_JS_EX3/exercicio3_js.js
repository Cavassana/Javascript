/*
Questao 3) Voce deve criar um programa com as seguintes caracteristicas:
a) Crie uma constante LIM em javascript. Tal constante deve valer 101. Toda referencia ao numero
101 deve ser feita pela constante LIM. Se a constante LIM for alterada no fonte, o programa
deve continuar executando corretamente.
b) Crie um vetor chamado altura.
c) Faca um for colocando um valor de altura em cada uma das 101 posicoes do vetor. As alturas
devem ser todas distintas.
d) Encontre o valor da mediana.
A mediana de um vetor de tamanho 101 (LIM) com elementos distintos e um elemento alturai tal
que 50 ((LIM-1)/2) alturas do vetor s~ao menores que alturai e 50 ((LIM-1)/2) alturas do vetor sao
maiores que alturai.
*/

// Item a) Declaracao das constantes 
const LIM = 101;

// Faixa para criacao das alturas distintas
var altMin = 0.5;
var altMax = 2;

// Item b) Vetor altura
var altura = [];

// Flags
var liberaValidacao = 0;

// Funcao que gera as alturas aleatorias
function geraValorAleatorioFaixaDeValores(min, max) {
    let valor = (Math.random() * (max - min)) + min;
    return Number.parseFloat(valor).toFixed(2);
}

// Item c)
for(var i=0; i<=LIM; i++){
    while(!liberaValidacao){
        let alturaCandidato = geraValorAleatorioFaixaDeValores(altMin,altMax);
        // Varre o vetor e procura se alguma altura bate
        let repetido = altura.find(x => x === alturaCandidato); 
        // Procede de acordo se valor ja foi usado ou nao
        if(repetido === undefined){
            altura[i] = alturaCandidato;
            liberaValidacao = 1;
        }
    }
    liberaValidacao = 0;
}

// Funcao que ordena o vetor de forma crescente
function ordenaVetor(alt) {
    alt.sort(function(a, b) { return b - a;});
}

ordenaVetor(altura);

console.log(altura);

// Funcao que encontra a mediama
function encontraMediana(alt, lim) {
    var mediana = 0;
   
    if( LIM % 2 == 0){ // se LIM e par
        mediana = (alt[(lim+1)/2] + alt[(lim-1)/2])/2; 
    }else{ // se LIM e impar
        mediana = alt[Math.floor(lim/2)+1];
    }

    return mediana;
}

console.log(encontraMediana(altura, LIM));
