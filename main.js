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
  Display.innerHTML = Display.innerHTML + parseInt(e.target.value)
}

AC.addEventListener("click",()=>{
  Display.textContent = ""
})

let validar = 1

addEventListener("keydown",(e)=>{
  validar = parseInt(e.key)

  if(!isNaN(validar)) Display.innerHTML = Display.innerHTML + e.key

})


let num1,num2 = 0
let operando = ""
let resultado = 0


BotonIgual.addEventListener("click",()=>{
  num2 = parseInt(Display.textContent)
  operador(operando)
  Display.textContent = resultado
})

BotonSuma.addEventListener("click",()=>{
  num1 = parseInt(Display.textContent)
  Display.textContent = ""
  operando = "+"
})

BotonResta.addEventListener("click",()=>{
  num1 = parseInt(Display.textContent)
  Display.textContent = ""
  operando = "-"
})

BotonMultiplicacion.addEventListener("click",()=>{
  num1 = parseInt(Display.textContent)
  Display.textContent = ""
  operando = "*"
})

BotonDivision.addEventListener("click",()=>{
  num1 = parseInt(Display.textContent)
  Display.textContent = ""
  operando = "/"
})


function operador(operando) {
    switch (operando) {
        case '+':
          resultado=num1+ num2
          console.log(resultado)
          break;
        case '-':
            resultado=num1- num2
            console.log(resultado)
          break;
        case '/':
            resultado=num1/ num2
            console.log(resultado)
          break;
        case '*':
            resultado=num1*num2
            console.log(resultado)
          break;
      }
    }

addEventListener("keydown", (e) => {
  if (e.key === "+") {
    num1 = parseInt(Display.textContent)
    Display.textContent = ""
    console.log(num1)
    operando = "+"
  }else if (e.key === "-") {
    num1 = parseInt(Display.textContent)
    Display.textContent = ""
    console.log(num1)
    operando = "-"
  }else if (e.key === "*") {
    num1 = parseInt(Display.textContent)
    Display.textContent = ""
    console.log(num1)
    operando = "*"
  }else if (e.key === "/") {
    num1 = parseInt(Display.textContent)
    Display.textContent = ""
    console.log(num1)
    operando = "/"
  }else if (e.key === "Enter") {
    num2 = parseInt(Display.textContent)
    operador(operando);
    Display.textContent = resultado;
  }else if(e.key === "Backspace") {
    Display.textContent = Display.textContent.slice(0, -1)
    }else if(e.key === "Escape"){
    Display.textContent = ""
    }
});