
// function nombreEnCamelCase () { 
//     // Los paréntesis deben quedar vacíos y, luego, 
//     // se abre una llave para alojar las instrucciones.
//       console.log("¡Soy una Función!") // Bloque de código que se ejecutará luego.
//     } // Se cierra la llave.


// function fechaYHora() {
//     console.log("19:00Horas")
// }

// ¿Qué Es Un Parámetro?*
// Un Parámetro es una Variable que creamos al momento de definir una Función y, cada vez que la ejecutamos, le pasamos un argumento(su valor) como input.

// Generalmente los terrminos "Parametros y "Argumentos" se utilizan de manera indistinta para referirse a los datos que le pasamos a la función, sin embargo, su connotación es diferente. S querés indagar más sobre las diferencias entre estos términos, hace click acá.

// Cuando le pasamos un Parámetro a una Función estamos haciendo un código mucho más escalable.

/*
function cantarCumpleA(nombre)  { // Cuando declaramos la Función, entre los paréntesis, definimos el nombre del Parámetro. En este caso: nombre.
    console.log("¡Que los cumplas feliz!")
    console.log("¡Que los cumplas feliz!")
    console.log("¡Que los cumplas " + nombre + "!")
    console.log("¡Que los cumplas feliz!")
  }
  
  // Usaremos los Parámetros en el código, aunque aún no sepamos exactamente cuál será su valor. 
  
  cantarCumpleA("Claudia")
  cantarCumpleA("Elon")
  cantarCumpleA("Jeff")
  
  // El valor del Parámetro lo obtendrán una vez que se ejecute.
  */

//En este ejercicio deberás crear una Función que muestre en la consola un saludo.

// Luego, deberás refactorizar la Función para que tome por Parámetro un nombre y salude a esa persona cuando la ejecutes.

// Por último, ejecutá tu Función con varios nombres.


function decirHola(person) {
    console.log('Hola ' +  person)
}

decirHola('Tomas')
decirHola('Roberto')
decirHola('JJJJDasd')
let numero1, numero2
let contador = 0
let active = true;  

    while (active) {
        
        contador ++

        numero1 = parseInt(prompt ("Ingrese el Primer numero nuevamente | -1 para terminar"))
        numero2 = parseInt(prompt ("Ingrese el Segundo numero nuevamente | -1 para terminar"))                  
 

        if (numero1 < 0 || numero2 < 0) {
            active = false;
            console.log("Fin del juego")

        } else if (numero1 == numero2){
            console.log("Los numeros son iguales, es un empate")

        } else {
            numero1 > numero2 ? console.log("El primer numero es mayor que el segundo") : console.log("El segundo numero es mayor que el primero")
        }
    }