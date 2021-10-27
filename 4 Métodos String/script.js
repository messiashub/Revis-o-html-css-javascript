
// MÉTODOS E PROPRIEDADES DE STRINGS 

// LENGTH: A  propriedade retorna o comprimento de uma string:

// EX:

let $nome = "claudinei"
console.log($nome.length);

////////////////////////////////////////////////////////

// EXTRAINDO PARTES DA STRING
/* Existem 3 métodos para extrair uma parte de uma string:
    *slice(start, end)
    *substring(start, end)
    *substr(start, length)
 */

// O método slice ()
/* slice() extrai uma parte de uma string e retorna a parte extraída em uma nova string.
  O método leva 2 parâmetros: a posição inicial e a posição final (final não incluído). */ 
  
let $frutas = "ABACAXI, BANANA, PÊRA";
//             0123456789----15    JavaScript conta posições a partir de zero. A primeira posição é 0.
console.log($frutas.slice(9,15));

// Método substring ()
/*substring() é semelhante a slice().
  A diferença é que substring()não aceita índices negativos.*/

let $nomes = "claudinei, mario, milson"
console.log($nomes.substring(10,16));

////////////////////////////////////////////////////////////////////////

// SUBSTITUIÇÃO DO CONTEÚDO DA STRING 

// O replace()método substitui um valor especificado por outro valor em uma string:
/*   O replace()método não altera a string em que é chamado. Ele retorna uma nova string.
     Por padrão, o replace()método substitui apenas a primeira correspondência: */

let $texto= "Revisando a linguagem Phyton"
console.log($texto.replace("Phyton","JavaScript"));


// String.trim ()
/* O trim()método remove os espaços em branco de ambos os lados de uma string: */

let $texto2 = "   Sofrendo para aprender, mas  chego lá"
console.log($texto2)
console.log($texto2.trim());

////////////////////////////////////

// O método charAt ()
// O charAt()método retorna o caractere em um índice especificado (posição) em uma string:

let $qualquer = "claudio";
console.log($qualquer.charAt(5))

////////////////////////////////////

