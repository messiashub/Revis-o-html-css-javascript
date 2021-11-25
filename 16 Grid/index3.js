window.addEventListener('scroll',function(){
    const body = document.querySelector('body')
    if(document.body.scrollTop > 150|| document.documentElement.scrollTop > 150){
       body.style.backgroundColor="red" ;
    }else{
        body.style.backgroundColor="white" ;
    }
    
})

let btn = document.querySelector(".button");
let nav =document.querySelector(".open");
btn.addEventListener("click",function(){
    if(this.dataset.action == "close"){
        /* alert('fechou'); */
        this.removeAttribute("data-action");
        nav.style.display = "none";

    }else{
       /*  alert('abriu'); */
        this.dataset.action="close";

        nav.style.display = "block";
    }

})
   
