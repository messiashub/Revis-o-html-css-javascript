"use strict"

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


let arr = [1, 2, 3, 4,5];


arr.forEach((num)=>setTimeout(function(){
    console.log(num)
},1000 * num))

