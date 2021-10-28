
// FAZENDO LOOPING EM ARRAYS

/* Usando o looping for()  e imprimindo no HTML*/

let $demo = document.querySelector("#demo");
console.log($demo)

let $frutas = ["Banana","Laranja","Maçã","Perâ","Morango"];
let text = "<ul>";

for(let i= 0; i < $frutas.length; i++){
    text += `<li>${$frutas[i]}</li>`;
    $demo.innerHTML = text
    console.log($frutas[i]);
}
////////////////////////////////////////////////////////

/* Usando o looping forEach()  e imprimindo no HTML*/

let $demo2 = document.querySelector("#demo2");
console.log($demo2);

let $roupas =["camisa","camiseta","calça","cueca","sapato","meia"];
let $text = "<ul>";
$roupas.forEach((roupa)=>{
    $text += `<li>${roupa}</li>`;
    $demo2.innerHTML = $text
   console.log(roupa)
})
console.log(Array.isArray($roupas)); // descobrindo se a variável é um  array

// A diferença entre matrizes e objetos
// Em JavaScript, os arrays usam índices numerados .  
// Em JavaScript, os objetos usam índices nomeados .
