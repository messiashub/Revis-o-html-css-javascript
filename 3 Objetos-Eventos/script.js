// Os objetos também são variáveis. Mas os objetos podem conter muitos valores.

const $car ={marca:"fiat", modelo:"147",cor:"branco"};

// Os valores são escritos como pares nome: valor (nome e valor separados por dois pontos).

const $pessoa = {nome:"claudinei",sobrenome:"messias", idade:49};

// Acessando Propriedades do Objeto
console.log($pessoa.nome);

console.log($pessoa['sobrenome']);

// Métodos de Objeto
// Métodos são ações que podem ser executadas em objetos.
// Os métodos são armazenados nas propriedades como definições de função .
// Um método é uma função armazenada como uma propriedade.


let pessoa ={
    primeiroNome:"claudio",
    ultimoNome:"cavalcante",
    idade:49,
    nomeComleto : function(){
        return `${this.primeiroNome} ${this.ultimoNome};`
    }
}

console.log(pessoa.idade);
console.log(pessoa.nomeComleto());


// Eventos HTML
/* Um evento HTML pode ser algo que o navegador faz ou que um usuário faz.
    JavaScript permite que você execute código quando eventos são detectados.
    HTML permite que atributos de manipulador de eventos, com código JavaScript ,
    sejam adicionados a elementos HTML. */

let $btn = document.querySelector('#btn');
let $demo = document.querySelector("#demo");

$btn.addEventListener("click",()=>{
    $demo.innerHTML = Date()

})


let $btn2 = document.querySelector('#btn2');
$btn2.addEventListener('click', ()=>{
    $btn2.innerHTML = Date()
})