// FUNÇÕES DE SETA

/* 
As funções de seta foram introduzidas no ES6.
As funções de seta nos permitem escrever uma sintaxe de função mais curta: */

let $ola;
$ola = ()=>{
    return "Olá mundo"
};
document.getElementById("demo").innerHTML= $ola();
console.log($ola());