// ALTERANDO ESTILOS DE UM ELEMENTO HTML
/* Mudando a cor das fontes */
let $demo = document.getElementById('demo');
let $btn = document.querySelector('#btn');

$btn.addEventListener('click', () => {
    $demo.style.color="red"
});

/* OCULTANDO E MOSTRANDO ELEMENTOS  HTML*/

let $demo1=document.querySelector('#demo1');
let $btn2 = document.querySelector('#btn2').addEventListener('click', () => {
    $demo1.style.display ="none";
})
let $btn3 = document.querySelector('#btn3').addEventListener('click', () => {
    $demo1.style.display="block";
})