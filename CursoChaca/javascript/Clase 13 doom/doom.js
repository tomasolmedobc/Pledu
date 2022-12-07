// console.dir(document)
// let h1 = document.querySelector("h1")
// h1.style.backgroundColor = "Blue"

// let parrafo = document.querySelector("p")


// parrafo.classList.add("parr")
// parrafo.classList.remove("parr")
// parrafo.classList.toggle("parr")

// let mensaje = prompt("Que titulo queres?").toLocaleLowerCase()
// h1.textContent = "Hola"

// h1.textContent = mensaje

// if(h1.textContent === "hola"){
//   alert("Hey te estan saluando")
// }

// h1.textContent = "Hola"
// h1.innerHTML = "<p>hola!</p>"\


// let botonGoogle = document.querySelector("#btn-google");
// botonGoogle.getAttribute("href") // Nos muestra cuál es el valor del atributo href.

// botonGoogle.setAttribute("href", "http://www.plataforma5.la") 
// // Cambia el valor del atributo href por el valor que se pasa como segundo Parámetro.

// let parrafos = document.querySelectorAll("p")
// for (let i = 0; i < parrafos.length; i++) {

//   // parrafos[i].textContent = parrafos[i].textContent + " " + (i+1)

//   parrafos[i].textContent = `parrafo ${i + 1}`

//   // parrafos[i].style.backgroundColor = "red"
//   // parrafos[i].style.color = "blue"

//   if(i%2 === 0){
//     parrafos[i].style.backgroundColor = "red"
//     parrafos[i].style.color = "blue"
//   }else{
//     parrafos[i].style.backgroundColor = "blue"
//     parrafos[i].style.color = "red"
//   }

// }


// // creo Elemento

// let h2 = document.createElement("h2")
// //Le damos contenido al lemento

// h2.textContent = "Plataforma 5"
// //creo un div

// let div = document.createElement("div")
// //agregar elemento

// div.appendChild(h2)

// //agrega el elemento

// document.body.appendChild(div)
// //crear elemento
// //darle contenido
// //agregarlo al html


// //remover

// document.body.removeChild(div)

let source = document.querySelector("#source")

let destination = document.querySelector("#destination")

let intermedia = destination.textContent

// destination.textContent = "SOURCE"
destination.textContent = source.textContent
source.textContent  = intermedia
