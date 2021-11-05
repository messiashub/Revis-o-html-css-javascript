"use strict"

// SetTimeout ->   definir tempo limite 
/*O método setTimeout () chama uma função ou avalia uma expressão após um número especificado de milissegundos.
  A função com  setTimeout() vai ser executada depois do tempo  especificado 

  ATRASO DE EXECUÇÃO
  
  Sintaxe: 
      SetTimeout(função, milisegundos/minutos, parametro1, parametro2..)

      setTimeout(função(parametros){
        codigo
      },tempo)

      1 função necessária. A função que será executada
      2 milissegundos Opcional. O número de milissegundos a aguardar antes de executar o código. Se omitido, o valor 0 é usado
      3 parametros, ... Opcional. Parâmetros adicionais para passar para a função (não compatível com IE9 e anteriores)*/

/* As funções especificadas não tem que  ser anônimas. Você pode dar o nome da função, e até mesmo definir ela em outro lugar e
   passar uma referência para o timeout setTimeout() */


// Passando parâmetros para uma função setTimeout()

// Quaisquer parâmetros que você quiser passar para a função sendo executada dentro do setTimeout() devem
// ser passados como parâmetros adicionais no final da lista.

/* Sintaxe:
      setTimeout(função(parametros){
        codigo
      },tempo) */

// EX 2

function falarAnimal(animal){
  let falar ={
    gato:"miar",
    cachorro:"latir",
    galinha:"piar",
    leão: "rugir"
  }
  console.log(`O animal ${animal} vai ${falar[animal]}`)
}

function getRandom(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

let animais = ["gato","cachorro","galinha","leão"]

const animals = getRandom(animais);

setTimeout(()=>{
  falarAnimal(animals)
},1000);




/* function startSaudacao(nome){
  console.log(`Olá ${nome}`);
}
let saudacao = setTimeout(startSaudacao,3000, "claudinei");
 */
////////////////////////////////////








































/* EX 1 */
/* function oláMundo(){
  console.log("Ola Mundo")
};

let mostre = setTimeout(oláMundo,4000); */ /*  vai executar em 4 segundos */

////////////////////////////////////////////////////////////////////////

/* EX 2 */

/* function  myFunction(){
  let Var = setTimeout(mostre2,3000);
}

function mostre2(){
  console.log("Ola mundo de novo")
}

let mostrar = myFunction() */   /* vai executar 3 segundos */
































/* let mostre = setTimeout(function(){
  alert("ola mundo")
},3000); */



















/* for(let x= 0; x <= 9 ; x++){
   setTimeout((x)=>{
       console.log(x)

   },x*2000,x)
   
}
console.log("Olá");


setTimeout(()=> console.log(3 * 2),1000);
 */

/* var array = [1, 2, 3, 4, 5]
for(let i = 0; i < array.length; i ++ ) { 
  setTimeout (() => { 
    console.log (array [i]) 
  }, 1000); 
} */


/* let arr = [1, 2, 3, 4,5];*/


/*arr.forEach((num)=>setTimeout(function(){
    console.log(num)
},1000 * num))
 */
