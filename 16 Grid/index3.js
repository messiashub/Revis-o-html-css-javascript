let btn = document.querySelector(".button")
btn.addEventListener("click",function(){
    if(this.dataset.action == "close"){
        alert('fechou');
        this.removeAttribute("data-action");
        

    }else{
        alert('abriu');
        this.dataset.action="close";
    }

})
   
