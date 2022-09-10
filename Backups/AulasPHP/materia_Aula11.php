<!-- 
    Abaixo, estrutura PHP básica
    
    => Variavel em PHP (não tem tipo)

    => Quando a(s) mensagem(ns) de erro não aparecer é necessário configurá-las.

-->
<html>
    <body>
        <?php
            echo "<h1> Olá PHP </h1>";
        ?>
        <?php 
            $nome = "Romualdo";
            echo $nome; 
            echo $nome2; //verifica mensagem de erro
            $var = 3.14;
            $var2 = .14;
            $var3 = 1.5e+5;
            $var4 = 1.5e-5;
            $pulaLinha = " <br>";
            echo $var; echo $pulaLinha;
            echo $var2; echo $pulaLinha;
            echo $var3; echo $pulaLinha;
            echo $var4; echo $pulaLinha;
            // String 
            $texto = " valor $var <br>"; // Aspas duplas " " permite $var
            echo $texto;
            // Quebra linha dentro da String
            echo "<pre> Era uma 
            vez</pre>";
            $titulo = "Sr.";
            $nome = "João";
            echo "$titulo $nome <hr>";
            echo '$titulo $nome <hr>';
            $x = 'tri';
            echo "<br> $xcolor"; // <= errado
            echo "<br> ${x}color"; // <= certo
            // concatenação de String (.) => ponto
            echo "<br>"."FT ".$x."color";
            // declaração de constantes no PHP
            define ("meunome","Romualdo");
            echo "<br>"."FT ".meunome;
            // constantes da linguagem
            $var5 = TRUE;
            $var6 = FALSE;
            echo "<br>".TRUE;
            echo FALSE."<br>";
            echo __FILE__."<br>";
            echo PHP_VERSION."<br>";
            echo PHP_OS."<br>";
            echo $var5."<br>";
            echo $var6."<br>";
            // Vetor em PHP
            $vetor1[0]=1;
            $vetor2[1]=10;
            // Misturar tipos
            $vetor3[2] = "Ana";
            // Vetor Associativo
            $vetor4["Azul"]=8;
            echo $vetor4["Azul"];
            //Array multidimensionais
            $time["SP"]["SÃO PAULO"] = "Palmeiras";
            $time["SP"]["Campinas"] = "Guarani";
            $time["SC"]["Florianópolis"] = "Figueirense";
            // Adiciona no final
            $v2[0]=1;
            $v2[1]=2;
            $v2[ ]=3; // coloca na primeira posicao livre
            echo "<br>".$v2[2];
            $v3 = array(1,2,3,"nome"=>"Luis");
            echo "<br> $v3[2]<br>";
            echo "<br> $v3[nome]<br>";
            echo "<br> $v3[3]<br>"; // errado => não reconhece a chave
        ?>
   </body>
</html>