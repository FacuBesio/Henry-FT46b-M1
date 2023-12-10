demo.js
// function mascotas(){
//     const nombre = 'Mindy';
//     return function(tipo){
//         return console.log("Tu mascota es un  " + tipo + ' y se llama ' + nombre);
//     }
// }

// console.log(mascotas());

// const mascota = mascotas()

// mascota('gato')


// function saludar(saludo){
    
//     return function(nombre){
//         return console.log(saludo + ' ' + nombre);
//     }
// }


// saludar('hola')('Florencia')

// const crearFuncion = function(){
//     var arreglo = []

//     for(let i = 0 ; i < 3 ; i++){
//         arreglo.push(function(){
//             console.log(i)
//         })
//     }

//     return arreglo
// }


// // console.log(crearFuncion());

// var arr = crearFuncion()

// arr[0]()//0 - 1
// arr[1]()//1 - 2
// arr[2]()//2 - 3

// function saludo(idioma){
//     if(idioma === 'en'){
//         return function(){
//             console.log('Hello!');
//         }
//     }

//     if(idioma === 'pt'){
//         return function(){
//             console.log('Olá');
//         }
//     }

//     if(idioma === 'es'){
//         return function(){
//             console.log('hola');
//         }
//     }
// }


// const saludarIngles = saludo('en')()
// const saludarPortugues = saludo('pt')()

// * Para qué nos sirven las closures...

// function incrementarCorazones(){
//     let contarCorazones = 0;
//     return function(){
//         contarCorazones++
//         return contarCorazones;
//     }
// }

// const corazon = incrementarCorazones()
// const like = incrementarCorazones()

// console.log(corazon());
// console.log(corazon());
// console.log(corazon());
// console.log(corazon());
// console.log(corazon());
// console.log(corazon());
// console.log(corazon());
// console.log(corazon());

// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());

// contarCorazones = 8

// console.log(contarCorazones);

// * bind

// const persona = {
//     name: 'Angel',
//     lastname: 'Ramírez',
// }

// const persona2 = {
//     name: 'Daniel',
//     lastname: 'Cárdenas',
// }

// function saludar(){
//     return "Su nombre es " + this.name + ' y su apellido es ' + this.lastname
// }

// console.log(persona.datos());

// const nuevaPersona = persona.datos.bind(persona2)

// console.log(nuevaPersona());

// console.log(saludar());

// const personaDaniel = saludar.bind(persona2)
// console.log(personaDaniel())


// const personaAngel = saludar.bind(persona)
// console.log(personaAngel());


function multiplicar(a,b){
    return a * b 
}

const multiplicarPorDos = multiplicar.bind(this, 2)

console.log(multiplicarPorDos(3))
console.log(multiplicarPorDos(4))
console.log(multiplicarPorDos(5))
console.log(multiplicarPorDos(6))


const multiplicaPorSeis = multiplicar.bind(this, 5, 3)

console.log(multiplicaPorSeis())

// * call
// const persona = {
//     nombre: 'Facundo',
//     apellido: 'Somoza'
// }

// const logNombre = function(str1, str2){
//     console.log(str1 + ' ' + this.nombre + ' ' + this.apellido +   str2);
// }

// logNombre.call(persona, 'hola', ' como estás?')

// * Apply

const persona = {
    nombre: 'Facundo',
    apellido: 'Somoza'
}

const logNombre = function(str1, str2){
    console.log(str1 + ' ' + this.nombre + ' ' + this.apellido +   str2);
}

logNombre.apply(persona, ['hola', ' como estás?'])





