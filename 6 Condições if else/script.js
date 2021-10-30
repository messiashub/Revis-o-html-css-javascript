
// CONDIÇÕES IF, ELSE IF, ELSE
/* 
    Use if para especificar um bloco de código a ser executado, se uma condição especificada for verdadeira
    Use else para especificar um bloco de código a ser executado, se a mesma condição for falsa
    Use else if para especificar uma nova condição para testar, se a primeira condição for falsa */

// Faça uma saudação de "Bom dia" se a hora for inferior a 18:00:
if(new Date().getHours() < 18){
    document.getElementById('demo').innerHTML = "Bom dia!";
}

