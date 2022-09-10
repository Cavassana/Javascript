/* 
    TT905 - Trabalho da Aula 06 (19 de abril de 2022)
    Resumo da tarefa: IMC em Javascript
    Integrantes:
        Romualdo Cavassana Junior 244063
        Edson Ferreira 233634
*/

// declaracao de variaveis
let peso = 90;          // peso em kg
let altura = 1.75;      // altura em m
let imcRaw = peso/(altura**2);      // imc em kg/m^2
let imcAprox = imcRaw.toFixed(2);   // aprox. p/ 2 casas
const elementosIMC = 5; // quantidade de elementos do vetor IMC
// testa IMC no log
// console.log("IMC = " + imcAprox + " kg");

if (imcRaw < 18.5) {
    console.log("IMC = " + imcAprox + " kg");
    console.log("Classificação: Magreza.\n\nObservações: Alimente-se." );      
}else if (imcRaw >= 18.5 && imcRaw <24.9) {
    console.log("IMC = " + imcAprox + " kg");
    console.log("Classificação: Normal.\n\nObservações: :)");  
}else if (imcRaw >= 24.9 && imcRaw <29.9) {
    console.log("IMC = " + imcAprox + " kg");
    console.log("Classificação: Sobrepeso.\n\nObservações: Panceps em desenvolvimento." );
}else if (imcRaw >= 29.9 && imcRaw <39.9) {
    console.log("IMC = " + imcAprox + " kg");
    console.log("Classificação: Obesidade.\n\nObservações: Exercite-se e procure um nutricionista." );
}else {
    console.log("IMC = " + imcAprox + " kg");
    console.log("Classificação: Obesidade grave!\n\nObservações: Procure orientação médica com urgência!" );
}

// vetores peso e altura com 5 elementos cada 
let pesoVetor = [91,62,72,130,80];
let alturaVetor = [1.75,1.68,1.55,1.8,1.8];
let imcVetor = []; // Vetor que armazenara os 5 IMCs
let imcVetorAprox = []; // Vetor que armazenara os 5 IMCs

// calcula o IMC 
let i;
for (i = 0; i < elementosIMC; i++) {
    imcVetor[i] = pesoVetor[i]/(alturaVetor[i]**2);   
}
// aproxima para duas casas
for (i = 0; i < elementosIMC; i++) {
    imcVetorAprox[i] = imcVetor[i].toFixed(2);   // aprox. p/ 2 casas  
}
// teste do calculo do IMC a partir dos vetores antes de ordenar
//console.log("Vetor antes de ordenar : ");
//console.log(imcVetor);
// funcao para ordenar numeros reais
function sortFloat(a,b) { return a - b; }
imcVetor.sort(sortFloat);

// vetor classificao
let classificacao = [];
for (i = 0; i < elementosIMC; i++) {
    if (imcVetor[i] < 18.5) {
        classificacao[i] = "Magreza";
    }else if (imcVetor[i] >= 18.5 && imcVetor[i] <24.9) {
        classificacao[i] = "Normal";
    }else if (imcVetor[i] >= 24.9 && imcVetor[i] <29.9) {
        classificacao[i] = "Sobrepeso";
    }else if (imcVetor[i] >= 29.9 && imcVetor[i] <39.9) {
        classificacao[i] = "Obesidade";
    }else {
        classificacao[i] = "Obesidade grave";
    }

}

// imprime o vetor e a classificacao
console.log("Vetor pós ordenação : ");
console.log(imcVetor);      // imprime vetor ordenado
console.log("Classificação respectiva: ");
console.log(classificacao); // imprime classificacao respectiva

// criacao do objeto "Pessoa"
let Pessoa = {
    nome :  'zero',
	idade:  0,
	peso:   0,
	altura: 0,
	imc:    0
};
// Cria a variavel nomes e idades com valores arbitrários
// Esses dados preencherão os objetos Pessoa
let nomes = ['Alberto', 'Bruna', 'Carlos', 'Diego', 'Eduarda'];
let idades = [13, 21, 34, 55, 89];
// Criando instancias do objeto Pessoa
for (i = 0; i < elementosIMC; i++) {
    let j = i + 1;
    console.log("Pessoa " + j + " :");
    Pessoa.nome = nomes[i];
    Pessoa.idade = idades[i];
    Pessoa.peso = pesoVetor[i];     // reaproveitei os dados
    Pessoa.altura = alturaVetor[i];  // idem anterior
    Pessoa.imc = pesoVetor[i]/(alturaVetor[i]**2); // calcula o IMC  
    // Imprime a mensagem final  
    console.log(Pessoa.nome + " tem "+Pessoa.idade+" de idade, pesa " + Pessoa.peso + " Kg e tem " + Pessoa.altura +" m de altura.\n Seu imc é de " + Pessoa.imc.toFixed(2) + "."); 
}
// Fim da tarefa