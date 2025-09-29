let gridcount=16;
const message=document.getElementById("message")
const container=document.getElementById("container")
let colormode="black";
const toggle=document.getElementById("fill-toggle")
toggle.addEventListener("click",()=>{
    colormode=colormode=="black"?"random":"black"
     toggle.textContent = colormode === "black" ? "Switch to Random Color" : "Switch to Black";
})



creategrid(gridcount);
function creategrid(size){
for(let a=1;a<=size*size;a++){
let square=document.createElement("div")
square.className="square"

container.appendChild(square);
square.style.width=(960/size)+ "px";
  square.style.height=(960/size)+ "px";
square.addEventListener("mouseover", () => {
  square.style.backgroundColor=colormode=="black"?"black":getRandomColor();
  
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
     message.textContent = `You created a ${nsize} x ${nsize} grid.`;
   }
   else{
alert("please enter a valid number between 1-100")


   }
})
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // 0 to 255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

