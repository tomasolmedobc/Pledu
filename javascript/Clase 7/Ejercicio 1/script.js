/*console.log("Hola mundo")
console.log(2+2)
typeof("hola")
typeof(5)

//declaración
let usuario
//let edad
//Definición
usuario = "Tomas"
//edad = 31


let nombre = parseInt(prompt("Decime tu edad")) 

console.log(nombre)

console.log("cuando cumplas anios tendras " + (nombre+1))


let a = 5;
let b = 10;

console.log(`El resultado es: ${2 * a + b}`);

*/
let edad, limiteEdad, año, nombreSnacks, cantidadSnacksPorDia, precioSnacks, totalSnacksConsumidos, totalSnacksPorAño, precioTotal, totalAñosRestantes
edad = prompt("Que edad tienes?"), limiteEdad = prompt("Cuanto seria tu limite de edad?"), nombreSnacks = prompt ("Cuales son tus snacks favoritos?"), cantidadSnacksPorDia = prompt("Cuanto snacks te comerias por dia?"), precioSnacks = prompt("Cuanto vale cada snacks hoy en dia?(solo poner numeros, sin signos)")  

totalAñosRestantes = Number(limiteEdad) - Number(edad) 
/*
 edad= (31) años actuales
    limiteEdad= (78) años finales
    
    restoDeEdad = limiteEdad (78) - edad (31)
    totalAñosRestantes = (47) años
*/
///

//un año tiene 365 dias
año = 365
//
totalSnacksConsumidos = año * Number(cantidadSnacksPorDia)
//Si cantidadSnacksPorDia = 2, serian 730 snacks por año
//
totalSnacksPorAño = totalSnacksConsumidos * totalAñosRestantes
//Si  totalSnacksConsumidos es (730) snacks por año
//y el totalAñosRestantes(47)
// totalSnacksPorAño = totalSnackConsumidos * totalAñosRestantes
//totalSnacksPorAño = (34310)

precioTotal =   totalSnacksPorAño *  Number(precioSnacks) 
//si totalAñosRestantes = (34310)
//y el precioSnacks = (140)
//Resultado final $4.803.400 



alert("Usted tiene " + edad + " años. Sabias que si consumis " + cantidadSnacksPorDia + " " +nombreSnacks + " por dia, al año serian " +  totalSnacksConsumidos + " " + nombreSnacks +  " y si tu limite de edad es de " + limiteEdad + " " + ". En estos "  + totalAñosRestantes  + " años restantes hasta tu limite de edad, te quedan por comer " + totalSnacksPorAño + " " + nombreSnacks  + " y gastarias $" + parseInt(precioTotal) + " el resto de tu vida")


/*


    año = (365) dias
    CantidadSnacksPorDia = (2)
    totalSnacksConsumidos = cantidadSnacks(2) * año(365)
    (730)
    totalSnacksPorAño = (730) * (47) totalRestantesAños

    totalSnacksRestantesAños = (34310)  * precioUnitario


    SnacksFinalesDeVida = totalSnacksRestantesAños(34310) * 


    cantidadSnacksPorDia = 2







*/



/*

    edad= (31) años actuales
    limiteEdad= (78) años finales
    
    restoDeEdad = limiteEdad (78) - edad (31)
    totalRestantesAños = (47) años
*/
/*


    año = (365) dias
    CantidadSnacksPorDia = (2)
    TotalSnacksConsumidos = cantidadSnacks(2) * año(365)
    (730)
    totalSnacksPorAño = (730) * (47) totalRestantesAños

    totalSnacksRestantesAños = (34310)  * precioUnitario


    SnacksFinalesDeVida = totalSnacksRestantesAños(34310) * 


    cantidadSnacksPorDia = 2







*/


/*
resultadoSnacks = Number(cantidadSnacks) * 365 
restaEdad = (Number(limitEdad) - Number(edad)) 
snacksRestoVida = restaEdad * resultadoSnacks
totalPrecioSnack = Number(precioSnacks) * resultadoSnacks
*/