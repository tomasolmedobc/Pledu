// let temperatura = Number(prompt("Cual es tu temperatura"))

// if (temperatura === 37.5){
//     alert("Pioridad baja")
// }else{
//     alert("Prioridad alta")
// }

//Segundo part1
/*
let pregunta = prompt("Como estas hoy?").toLowerCase()
if (pregunta == "triste") {
    alert("No importa que, nunca bajes tu brazos sigue adelante")
} if (pregunta == "feliz") {
    alert("Que lindo! Que tengas un buen dia!")
}
preguntaSecreta = prompt("Tienes el numero secreto?")
let preguntaSecreta = 10 

// parte2
preguntaSecreta = prompt("Tiene el numero secreto?")
if (preguntaSecreta != 10 ){
    alert("Usted no tiene el numero secreta")
}else{
    alert("bienvenido")
}

//parte3

contraseñaDic = prompt("Ingrese su contraseña").toLocaleLowerCase()
if (contraseñaDic === "abcd"){
    window.location = "http://www.google.com"
}else{
    alert("Ingrese de nuevo la contraseña")
}

//parte 4
let numero
numero = prompt("Ingrese un numero")
if (numero % 2 == 0){
    alert("El " + numero + " es par")
}else{
    alert("El " + numero + " no es par")
}


//Parte 4


let edad=prompt("Ingrese su edad.")

if(edad<18) {
alert("Error, su edad no es válida.")
} else if(edad >= 21){
    alert("Bienvenido, felicitalo por haber llegado a la mayoría de edad")
}if(edad % 2 == 1){
   alert("Sabias que tu edad " + edad + " es un número inpar")
}


alert("Bienvenido a continuación te voy a pedir que adivines un numero del 1 al 20")
let numeroSecreto1 = 20
let numeroPregunta = Number(prompt("Ingrese el numero secreto"))
if ( numeroPregunta % 2 == 0 && numeroPregunta === numeroSecreto1 ){
    alert("El numero ingresado es el correcto !!")
}else if(numeroPregunta > numeroSecreto1){
    alert("El numero es demaciado grande al numero secreto, f5 para volver intentarlo")
}else{
    alert("Demaciado pequeño el numero, vuelve a intentarlo, f5 para volver a intentarlo")
}
*/


let generoSave = prompt("Indique cual es su genero").toLowerCase()
let ageSave = Number(prompt("Indique cual es su edad"))
if ( (generoSave === "hombre"  && ageSave > 64 ) ||  (generoSave === "mujer" && ageSave > 59) ) {
    alert("Usted cumple con los requisitos para jubilarse :D")
}else{
    alert("Usted no tiene los requisitos para jubilarse, para los hombres deben tener 65 años o más. Para las mujeres es de 60 o más")
}