const Display = document.getElementById('display');
const BotonSuma = document.getElementById("btn_+")
const BotonResta = document.getElementById("btn_-")
const BotonDivision = document.getElementById("btn_/")
const BotonMultiplicacion = document.getElementById("btn_*")
const BotonIgual = document.getElementById("btn_=")
const Simbolo = document.getElementById("label")
const AC = document.getElementById("btn_AC")



for(let i =0;i <= 9;i++){
  document.getElementById("btn_"+ i).addEventListener("click",presionar)
}

function presionar(e){
  console.log(e.target.value)
  Display.innerHTML = Display.innerHTML + e.target.value
}

AC.addEventListener("click",()=>{
  Display.innerHTML = ""
})

addEventListener("keydown",(e)=>{
  console.log(e.key)
  Display.innerHTML = Display.innerHTML + e.key
})

/* function keyEvent(event) {
  console.log(`Location of key pressed: ${event.location}`);
} */

let num1,num2 = 0

BotonIgual.addEventListener("click",()=>{
  num2 = parseInt(Display.textContent)
  resultado = num1 + num2
  Display.textContent = resultado
})

BotonSuma.addEventListener("click",()=>{
  num1 = parseInt(Display.textContent)
  Display.textContent = ""
  console.log(num1)

})

BotonResta.addEventListener("click",()=>{
  num1 = parseInt(Display.textContent)
  Display.textContent = ""
  console.log(num1)
})

BotonMultiplicacion.addEventListener("click",()=>{
  num1 = parseInt(Display.textContent)
  Display.textContent = ""
  console.log(num1)
})

BotonDivision.addEventListener("click",()=>{
  num1 = parseInt(Display.textContent)
  Display.textContent = ""
  console.log(num1)
})