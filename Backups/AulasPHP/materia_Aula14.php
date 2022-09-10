<html>
<body>
    <?php
        /* objetos -> visibilidade public, protected, private
        class nomeDaClasse{
            // metodos e atributos
        }
        $objeto = new nomeDaClasse(); // cria objeto
        $objeto -> nome do atributo
        $objeto -> nome do metodo()
        */

        // PARTE 2 da aula
        // Metada da aula - herança PHP
        class Classe1{
            private $var1 = "Ola var1";
            protected $var2 = "Ola var2";

            function imprime(){
                echo "<br> Classe 1: ".$this->var1;
                echo "<br> Classe 1: ".$this->var2;
            }
        }

        // classe 2 herdará a classe 1
        class Classe2 extends Classe1{

            function imprime(){
                parent::imprime();
                echo "<br> Classe2 :".$this->var1; 
                echo "<br> Classe2 :".$this->var2; 
            }
        }

        $obj1 = new Classe1();
        $obj1->imprime();
        $obj2 = new Classe2();
        $obj2->imprime(); // Fim parte herança

        // Inicio da Aula - PARTE 1 da aula
        class Estoque{
            public $itens;
            public $nome;
            public static $SIZE = 0; // static -> variavel pertence a classe e não ao objeto]
            public $id;

            function __construct($nome){
                $this -> nome = $nome;
                // acessar variavel da classe: self 
                self::$SIZE++;
                $this -> id = Estoque::$SIZE;
                echo "<br> <h3> Bem-vindo à $this->nome</h3>";
            }

            function __destruct(){
                // fechar arquivo, liberar memoria, depuracao

            }

            public function add($codigo, $quantidade){
                if(isset($this->itens[$codigo])){
                    //isset verifique se a var existe
                    $this -> itens[$codigo] += $quantidade;
                } else{
                    $this -> itens[$codigo] = $quantidade;
                }
            }

            function printItens(){
                foreach($this->itens as $chave => $valor){
                    echo "<br>$chave = $valor";
                }
            }
        }

        $loja1 = new Estoque("Mesbla");
        $loja2 = new Estoque("Havan");
        
        $loja1->add("bermuda",10);
        $loja1->add("camiseta",20);
        $loja1->add("bermuda",5);
        $loja1->printItens();

        echo "<br> Loja possui ".$loja1->itens["bermuda"]." bermudas";
        echo "<br> Variável estática:".Estoque::$SIZE;

        echo "<br> Revisão vetores";

        $v[0] = 10;
        $v[1] = "ana";
        $v["x"] = 5;
        $v["z"] = 7; // chaves do vetor: 0,1,"x", "z" // valores 10, "ana", 5,7

        echo "<br>".$v["x"];

        foreach($v as $chave=>$valor){
            echo "<br>v[$chave]=$valor";
        }

    ?>
</body>
</html>