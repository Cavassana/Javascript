/* Trabalho - Aula 09 10/05/2022 - Lista de Nomes
    Edson Ferreira - 233634
    Romualdo Cavassana Junior - 244063 
*/

class Pessoas { // Classe Pessoas

    constructor(_nome, _idade) { // Construtor
        this.nome = _nome;
        this.idade = _idade;
        this.editIt = null;
    }
    get Nome(){
        return this._nome;
    }
    set Nome(nome){
        this._nome=nome;
    }
    get Idade(){
        return this._idade;
    }
    set Idade(idade){
        this._idade=idade;
    }

} // fim classe Pessoas

class Professor extends Pessoas { // Classe Professor herdada de Pessoas

    constructor(_nome, _idade, _matricula) {
        super(_nome, _idade);
        this.matricula = _matricula;
    }
 
} // fim classe Professor


class Aluno extends Pessoas { // Classe Aluno herdada de Pessoas

    constructor(nome, _RA, _CR, idade, editIt) {
        super(nome, idade, editIt);
        this.RA = _RA;
        this.CR = _CR;
    }
 
} // fim classe Aluno

class Disciplina { // Classe Disciplina
    constructor(_nomeDisciplina, _codigoDisciplina, _professor, _arrayAlunos) {
        this.nomeDisciplina = _nomeDisciplina;
        this.codigoDisciplina = _codigoDisciplina;
        this.professor = _professor;
        this.arrayAlunos = [];
    }

    mostra() {
        return 'Código da Disciplina: '+ this.codigoDisciplina + '<br/>  Noma da Disciplina: ' + this.nomeDisciplina + '<br/> Professor: ' + this.professor;
    }

    
    lerDadosAluno() {
        let aluno = {}
        aluno.RA = document.getElementById('RA').value;
        aluno.nome = document.getElementById('nomeAluno').value;
        aluno.CR = document.getElementById('CR').value;

        return aluno;
    }

    validaCamposAlunos(aluno){
        let mensagem = '';

        if(aluno.nome == ''){
            mensagem += '- Informe o nome do aluno. \n'
        }

        if(aluno.RA == ''){
            mensagem += '- Informe o RA. \n'
        }

        if(aluno.CR == ''){
            mensagem += '- Informe o CR. \n'
        }

        if (mensagem != ''){
            alert(mensagem);
            return false;
        }
        return true;
    }

    listaTabelaAlunos(){
        let tbodyAlunos = document.getElementById('tbodyAlunos');
        tbodyAlunos.innerText = ''; 

        for (let i = 0; i < this.arrayAlunos.length; i++){
            let tr = tbodyAlunos.insertRow();

            let td_RA = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_CR = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_RA.innerText = this.arrayAlunos[i].RA;   
            td_nome.innerText = this.arrayAlunos[i].nome;
            td_CR.innerText = this.arrayAlunos[i].CR;

            td_RA.classList.add('center');

            let imgEdicao = document.createElement('img');
            imgEdicao.src = 'img/editar.png';
            imgEdicao.setAttribute("onclick","disciplina1.prepararEdicao("+ JSON.stringify(this.arrayAlunos[i])+")");
            td_acoes.appendChild(imgEdicao);
            
            let imgDeletar = document.createElement('img');
            imgDeletar.src = 'img/deletar.png';
            imgDeletar.setAttribute("onclick","disciplina1.deletar("+this.arrayAlunos[i].RA+")");
            td_acoes.appendChild(imgDeletar);

            td_acoes.classList.add('center');
        }
    }

    salvarAluno(){
        let aluno = this.lerDadosAluno();
        
        if(this.validaCamposAlunos(aluno)){
            if (this.editIt == null){
                this.adicionar(aluno);
            }else{
                this.atualizar(this.editIt);
            }
        }
        this.listaTabelaAlunos();
        this.cancelar();   
    }

    adicionar(aluno){
        aluno.CR = parseFloat(aluno.CR);
        this.arrayAlunos.push(aluno);
    }

    cancelar(){
        document.getElementById('nomeAluno').value = ''
        document.getElementById('RA').value = ''
        document.getElementById('CR').value = ''
        document.getElementById('botao1').innerText = 'Salvar';
        this.editIt = null;
    }

    deletar(RA){
        
        let tbody = document.getElementById('tbodyAlunos');

        if (confirm('Deseja realmente deletar o aluno de RA ' + RA)){
            for (let i=0; i< this.arrayAlunos.length;i++){
                if(this.arrayAlunos[i].RA == RA){
                   this.arrayAlunos.splice(i,1);
                   tbody.deleteRow(i);
                }
                console.log(this.arrayAlunos);
               
             }
        }
    }

    prepararEdicao(dados){
        this.editIt = dados.RA;
        document.getElementById('nomeAluno').value = dados.nome;
        document.getElementById('RA').value = dados.RA;
        document.getElementById('CR').value = dados.CR;
        document.getElementById('botao1').innerText = 'Atualizar';
    } 

    atualizar(RA){
        let aluno = this.lerDadosAluno();

        for (let i=0; i<this.arrayAlunos.length;i++){
            if(this.arrayAlunos[i].RA == RA){
                this.arrayAlunos[i].nome = aluno.nome;
                this.arrayAlunos[i].RA = aluno.RA;
                this.arrayAlunos[i].CR = aluno.CR;
            }
        }
    }

    ordenaRA(){ // checkbox checked => crescente || unchecked => decrescente 
        var checkbox = document.getElementById("direcaoOrdem").checked;

        if (checkbox) {
            this.arrayAlunos.sort((a,b) => (a.RA > b.RA ? 1 : -1));
            alert("Turma ordenada por RA de forma crescente.");  
        }
        else {
            this.arrayAlunos.sort((a,b) => (a.RA < b.RA ? 1 : -1));
            alert("Turma ordenada por RA de forma decrescente.");    
        }

        this.listaTabelaAlunos();
        this.cancelar();   

    }

    ordenaCR(){ // checkbox checked => crescente || unchecked => decrescente 

        var checkbox = document.getElementById("direcaoOrdem").checked;

        if (checkbox) {
            this.arrayAlunos.sort((a,b) => (a.CR > b.CR ? 1 : -1));
            alert("Turma ordenada por CR de forma crescente.");
        }
        else {
            this.arrayAlunos.sort((a,b) => (a.CR < b.CR ? 1 : -1));
            alert("Turma ordenada por CR de forma decrescente.");
        } 

        this.listaTabelaAlunos();
        this.cancelar();   

    }

    ordenaNome(){

        var checkbox = document.getElementById("direcaoOrdem").checked;

        if (checkbox) {
            this.arrayAlunos.sort((a,b) => (a.nome > b.nome ? 1 : -1));
            alert("Turma ordenada por Nome de forma crescente.");
        }
        else {
            this.arrayAlunos.sort((a,b) => (a.nome < b.nome ? 1 : -1));
            alert("Turma ordenada por Nome de forma decrescente.");
        } 

        this.listaTabelaAlunos();
        this.cancelar();   

    }

    removerPorRA(){ //uma adaptação da classe remove(ra), ok, professor?
        let ra = document.getElementById('removeRA').value;

        var flagEncontrou = 0; // flag se encontrou aluno com RA inputado pelo usuario
        // Rotina de procura
        let obj = this.arrayAlunos.find(x => x.RA === ra); // Varre o vetor e procura se algum RA bate
        //teste console
        console.log(obj);
        if (obj != undefined) {
            alert('Aluno foi excluído com sucesso!');
            flagEncontrou =1;
        }
        let index = this.arrayAlunos.indexOf(obj); // obtem o indice do elemento aluno procurado
        this.arrayAlunos.splice(index,1); // remove o aluno da turma
        if (!flagEncontrou){
            alert('Aluno não foi encontrado');
        }

        this.listaTabelaAlunos();
        this.cancelar();   

    }

 } // Fim classe Disciplina

 var aluno = new Aluno(); // Cria novo objeto aluno

 // Instânciamento dos objetos professores
 const professor1 = new Professor("Pedro","48","2355")
 const professor2 = new Professor("Tiago","42","2488")

var disciplina1 = new Disciplina("Cálculo III", "EB301", professor1.nome, professor1.matricula,);
console.log("Disciplina: " + disciplina1.nomeDisciplina + "\nProfessor: " + disciplina1.professor);

// funcao Mostra dados da disciplina no HTML
function mostraDadosDisciplinaHtml(d){
    document.getElementById("disciplinaMostra").innerHTML = d.mostra();  
}

mostraDadosDisciplinaHtml(disciplina1);
