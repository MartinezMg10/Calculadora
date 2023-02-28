const Display = document.getElementById('display');
const BotonSuma = document.getElementById("btn_+")
const BotonResta = document.getElementById("btn_-")
const BotonDivision = document.getElementById("btn_/")
const BotonMultiplicacion = document.getElementById("btn_*")
const BotonIgual = document.getElementById("btn_=")
const Simbolo = document.getElementById("label")

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
BotonDivision.addEventListener("click", () => {
    Simbolo.innerText="/"
    BotonIgual.addEventListener("click",() => {
        operador("/")
        Display.value=resultado
    })
})

BotonSuma.addEventListener("click", () => {
    Simbolo.innerText="+"

    BotonIgual.addEventListener("click",() => {
        operador("+")
        Display.value=resultado
    })
})

BotonResta.addEventListener("click", () => {
    Simbolo.innerText="-"

    BotonIgual.addEventListener("click",() => {
        operador("-")
        Display.value=resultado
    })
})

BotonMultiplicacion.addEventListener("click", () => {
    Simbolo.innerText="*"

    BotonIgual.addEventListener("click",() => {
        operador("*")
        Display.value=resultado
    })
})



