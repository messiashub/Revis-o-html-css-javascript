// ERROS DE JAVASCRIPT  -> TRATANDO ERROS PARA A APLICAÇÃO NÃO PARAR!

// TRATAMENTO ->    try catch throw finally
/* 
A try instrução permite que você teste um bloco de código para erros.

A catch declaração permite lidar com o erro.

A throw instrução permite que você crie erros personalizados.

A finally instrução permite que você execute o código, depois de tentar e capturar,
independentemente do resultado. */

// EXEMPLO DE  TRATAMENTO

let $btn = document.getElementById('btn');
console.log($btn);

$btn.addEventListener('click', ()=>{
    let $mensagem = document.getElementById("resp");  /* capturando os elementos */
    $mensagem.innerHTML = "";
    let $demo = document.getElementById("demo").value;  /* pegando o valor do input */
    console.log($demo);
    try{              /* testando */
        if($demo == "") throw "está vazio";        /* throw -> capturando o erro e tratando */
        if(isNaN($demo)) throw "não é um número";
        $demo = Number($demo);
        if($demo < 5) throw "está abaixo de 5";
        if($demo > 10) throw "está acima de 10"
    }
    catch(err){                    /* catch -> lançando o erro tratado */
        $mensagem.innerHTML = `input ${err}`;
    }
    finally{  /* continua o  codigo com sem parar a aplicação! */
        document.getElementById("demo").value;
    }
})