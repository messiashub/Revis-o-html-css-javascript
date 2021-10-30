
// switch
/* A switch instrução é usada para executar ações diferentes com base em condições diferentes.

    É assim que funciona:

    A expressão switch é avaliada uma vez.
    O valor da expressão é comparado com os valores de cada caso.
    Se houver uma correspondência, o bloco de código associado é executado.
    Se não houver correspondência, o bloco de código padrão é executado. */

/* --------------------------------------------------------------------------------------------- */
/* O getDay()método retorna o dia da semana como um número entre 0 e 6.
(Domingo = 0, Segunda = 1, Terça = 2 ..)
Este exemplo usa o número do dia da semana para calcular o nome do dia da semana: */



/*A palavra-chave break
Quando o JavaScript atinge uma break palavra - chave, ele sai do bloco switch.

Isso interromperá a execução dentro do bloco de switch.

Nota: Se você omitir a instrução break, o próximo caso será executado mesmo se a avaliação não corresponder ao caso.*/

let $day = "";

switch(new Date().getDay()){
    case 0:
        $day = "Domingo";
        break;
    case 1:
        $day = "Segunda";
        break;
    case 2:
        $day = "Terça";
        break;
    case 3:
        $day = "Quarta";
        break;
    case 4:
        $day = "Quinta";
        break;
    case 5:
        $day = "Sexta";
        break;
    case 6:
        $day = "Sabado";  /* Não é necessário interromper o último caso em um bloco de switch.
                             O bloco quebra (termina) ali de qualquer maneira.*/      
}

document.getElementById('demo').innerHTML =`Hoje é ${ $day}`;
/* ----------------------------------------------------------- */

/* A default palavra-chave especifica o código a ser executado se não houver correspondência de maiúsculas e minúsculas:

    O default caso não precisa ser o último caso em um bloco de switch:
    Se defaultnão for o último caso no bloco de switch, lembre-se de encerrar o caso padrão com uma break.*/

let $text="";

switch(new Date().getDay()){
    case 0:
        $text = "Hoje é domingo";
        break;
    case 6:
        $text = "Hoje é sábado";
        break;
    default:
        $text = "Hoje não é nenhum desses dias"

}

document.getElementById("demo2").innerHTML = `${$text}`
/* ---------------------------------------------------------------------- */

/* BLOCOS DE CÓDIGOS COMUNS

Às vezes, você desejará que diferentes casos de switch usem o mesmo código.

Neste exemplo, os casos 4 e 5 compartilham o mesmo bloco de código e 0 e 6 compartilham outro bloco de código: */

let $resp="";

switch(new Date().getDay()){
    case 4:
    case 5:
        $resp = "Logo é fim de semana";
        break;
    case 0:
    case 6:
        $resp = "É fim de semana";
        break;
    
    default:
        $resp = "Ansioso pelo fim de semana";
}
document.getElementById("demo3").innerHTML = `${$resp}`
/* ---------------------------------------------------------- */

/* COMPARAÇÃO ESTRITA 

    Os casos de troca usam comparação estrita (===).

    Os valores devem ser do mesmo tipo para corresponder.

    Uma comparação estrita só pode ser verdadeira se os operandos forem do mesmo tipo.

    Neste exemplo, não haverá correspondência para x: */

let $number = "1";

switch($number){
    case 1:
        text = "Off";
        break;
    case "1":
        text = "On";
        break;
    default:
        text= "Nenhum valor encontrado"

}
document.getElementById("demo4").innerHTML= text;