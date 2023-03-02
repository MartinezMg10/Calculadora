const Display = document.getElementById('display');
const BotonSuma = document.getElementById("btn_+")
const BotonResta = document.getElementById("btn_-")
const BotonDivision = document.getElementById("btn_/")
const BotonMultiplicacion = document.getElementById("btn_*")
const BotonIgual = document.getElementById("btn_=")
const Simbolo = document.getElementById("label")
const AC = document.getElementById("btn_AC")


function operador(operando) {
    switch (operando) {
        case '+':
          resultado=parseFloat(num1.value)+ parseFloat(num2.value)
          console.log(resultado)
          break;
        case '-':
            resultado=parseFloat(num1.value)- parseFloat(num2.value)
            console.log(resultado)
          break;
        case '/':
            resultado=parseFloat(num1.value)/ parseFloat(num2.value)
            console.log(resultado)
          break;
        case '*':
            resultado=parseFloat(num1.value)*parseFloat(num2.value)
            console.log(resultado)
          break;
      }
    }

let operando = " "

BotonDivision.addEventListener("click", () => {
    Simbolo.innerText="/"
    operando = "/"
})

BotonSuma.addEventListener("click", () => {
    Simbolo.innerText="+"
    operando = "+"
})

BotonResta.addEventListener("click", () => {
    Simbolo.innerText="-"
    operando = "-"
})

BotonMultiplicacion.addEventListener("click", () => {
    Simbolo.innerText="*"
    operando = "*"
})


BotonIgual.addEventListener("click",() => {
  operador(operando)
  Display.value=resultado
})

AC.addEventListener("click", () => {
    Simbolo.innerText=" "
    Display.value = " "
    num1.value = " "
    num2.value = " "
})
