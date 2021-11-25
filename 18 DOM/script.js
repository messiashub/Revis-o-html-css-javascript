
//EVENT
// argumento event

/* A interface de eventos representa qualquer evento de DOM.
 Ele contém propriedades comuns e métodos para qualquer evento. */


let input = document.querySelector('input');



input.addEventListener('scrollY',function(event){
    console.log(event)
})


