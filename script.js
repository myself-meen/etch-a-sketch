let gridcount=16;
const container=document.getElementById("container")
creategrid(gridcount);
function creategrid(size){
for(let a=1;a<=size*size;a++){
let square=document.createElement("div")
square.className="square"

container.appendChild(square);
square.addEventListener("mouseover", () => {
  square.style.backgroundColor = "black";
});
}
}
let square=document.querySelectorAll(".square")
const btn=document.getElementById("reset-btn")
btn.addEventListener("click",()=>{
    container.innerHTML="";
   let input= prompt("Enter grid size: (1-100)")
   let nsize=parseInt(input);
   if(nsize>0&&nsize<=100){
    creategrid(nsize)
   }
   else{
alert("please enter a valid number between 1-100")
   }
})
