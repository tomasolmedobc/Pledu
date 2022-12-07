// while (condition) {
//     //LO QUE QUERES EJECUTAR REPTITIVAMENTE
//     //MIENTRAS QUE LA CONDICION SE TRUE

// }
/*
let pasajero = 1
while(pasajero <= 20){
  console.log("Puede pasar, su asiento es el: " + pasajero)
  pasajero++
}
console.log("Aca termina el loop");
*/
// edad++
// edad--
// edad * = 5
// edad / =5
// let palabraMagica = "¡Ábrete, sésamo!"

// let intento = prompt("Dígame, ¿cuál es la Palabra Mágica?")

// while(intento != palabraMagica){
//   alert("Esa palabra es incorrecta")
//   intento = prompt("Inténtelo nuevamente")
//   } 
// alert("¡Bienvenido a La Caverna De Los 40 Ladrones!")


//ejemplo

// let i = 1
// let final = 5
// let acumulador = 0

// while(i <= final){
//   acumulador += i
//   i++
// }
  
// console.log(acumulador)

// La cuenta acumulador += i se puede escribir también como acumulador = acumulador + i. Es importante analizar que pasa en cada iteración:
// Por ejemplo, en la primera vuelta sería acumulador = 0 + 1;
// En la segunda, acumulador = 1 + 2;
// En la tercera acumulador = 3 + 3;
// En la cuarta acumulador = 6 + 4 y;
// En la quinta acumulador = 10 + 5 (el valor final de la variable acumulador es 15).
let i = 1;
let j = 1;
// let final = 5;
let final = Number(prompt("Hasta que tabla queres aprender hoy?"))
while (i <= final) {
  j = 1;
  while (j <= final) {
    // console.log(i + " - " + j);
    console.log(i + " x" + j + "es igual a " + (i*j));
    j++;
  }
  i++;
}