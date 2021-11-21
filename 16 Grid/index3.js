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
   
