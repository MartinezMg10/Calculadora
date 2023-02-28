const Display = document.getElementById('display');
const BotonSuma = document.getElementById("btn_+")
const BotonResta = document.getElementById("btn_-")
const BotonDivision = document.getElementById("btn_/")
const BotonMultiplicacion = document.getElementById("btn_*")
const BotonIgual = document.getElementById("btn_=")
const Simbolo = document.getElementById("label")
const AC = document.getElementById("btn_AC")
const num1 = document.getElementById("num1")


function operador(operando) {
    switch (operando) {
        case '+':
          resultado=parseFloat(numero1)+ parseFloat(num2)
          console.log(resultado)
          break;
        case '-':
            resultado=parseFloat(numero1)- parseFloat(num2)
            console.log(resultado)
          break;
        case '/':
            resultado=parseFloat(numero1)/ parseFloat(num2)
            console.log(resultado)
          break;
        case '*':
            resultado=parseFloat(numero1)*parseFloat(num2)
            console.log(resultado)
          break;
      }
    }

    
BotonDivision.addEventListener("click", () => {
    Simbolo.innerText="/"
    numero1= num1.value
    num1.value = " "

    BotonIgual.addEventListener("click",() => {
        num2 = num1.value
        operador("/")
        Display.value=resultado
    })

    
})

BotonSuma.addEventListener("click", () => {
    Simbolo.innerText="+"
    numero1= num1.value
    num1.value = " "
    


    BotonIgual.addEventListener("click",() => {
        num2 = num1.value
        operador("+")
        Display.value=resultado

    })
    
})

BotonResta.addEventListener("click", () => {
    Simbolo.innerText="-"
    numero1= num1.value
    num1.value = " "

    BotonIgual.addEventListener("click",() => {
        num2 = num1.value
        operador("-")
        Display.value=resultado

    })

})

BotonMultiplicacion.addEventListener("click", () => {
    Simbolo.innerText="*"
    numero1= num1.value
    num1.value = " "

    BotonIgual.addEventListener("click",() => {
        num2 = num1.value
        operador("*")
        Display.value=resultado

    })
})


AC.addEventListener("click", () => {
    Simbolo.innerText=" "
    Display.value = " "
    num1.value = " "
    numero1 =0
    num2 = 0
})
