// Criação de novos elementos HTML - insertBefore ()


let $h1= document.querySelector("#txt");

//1 criando um elemento "p"

let $p = document.createElement('p');

// 2 Criando um  texto para o elemento "p" criado  */
let $texto = document.createTextNode("Criando o elemento 'p' ");

// 3 Inserindo o nó de texto criado ao elemento "p" criado 
$p.appendChild($texto);


document.body.insertBefore($p,$h1);