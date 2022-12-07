// Cadena de Caracteres
// Creá una función llamada cadenaDeCaracteres que reciba un texto como parámetro. La función deberá generar un array donde cada palabra será un nuevo elemento (no debe contar los espacios).

// Posteriormente, deberá mostrar la siguiente información:

// Número de palabras.
// Primera palabra.
// Última palabra.
// Toda está información se deberá mostrar a través de console.log de manera independiente.

// Ejemplo:


// let texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error adipisci autem doloribus beatae, laudantium explicabo ut aperiam aut quam facilis corporis optio velit! Vitae itaque reiciendis incidunt accusamus culpa"

// cadenaDeCaracteres(texto)

// DEBERÁ MOSTRAR:

// * "El texto contiene 30 palabras"

// * "La primera palabra es Lorem"

// * "La última palabra es culpa"
// let texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error adipisci autem doloribus beatae, laudantium explicabo ut aperiam aut quam facilis corporis optio velit! Vitae itaque reiciendis incidunt accusamus culpa"

// const cadenaDeCaracteres = (txt) => {
// let arr = txt.split(" ");
//   alert("Este texto contiene "  + arr.length + " palabras")
//   alert("La primera palabra es " + arr[0])
//   alert("La última palabra es " + arr[29])

//   return arr;
// }
// cadenaDeCaracteres(texto)


// Fecha De Hoy
// Escribí una función que indique si la fecha de hoy es par o impar.


// let diaHoy = parseInt(prompt("Que numero es hoy? Te dire si es par o impar"))
// let mesHoy = parseInt(prompt("Que numero de mes es hoy? Te dire si es par o impar"))
// let anioHoy = parseInt(prompt("Que numero de año es hoy? Te dire si es par o impar"))
// const calendarioHoy = () => {
//   //numero % 2 == 0
//   if (diaHoy % 2 == 0) {
//     alert("El dia ingresado " + diaHoy + "es par ")
//   } else {
//     alert("La fecha ingresada es impar")
//   }
//   if (mesHoy % 2 == 0) {
//     alert("El dia ingresado " + mesHoy + "es par ")
//   } else {
//     alert("La fecha ingresada es impar")
//   }
//   if (anioHoy % 2 == 0) {
//     alert("El dia ingresado " + anioHoy + "es par ")
//   } else {
//     alert("La fecha ingresada es impar")
//   }
//   return diaHoy, mesHoy, anioHoy;
// }
// calendarioHoy(diaHoy,mesHoy,anioHoy)