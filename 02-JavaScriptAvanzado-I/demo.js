// var x = '';
// function foo(){
//     var y = 20;

//     console.log(x); //10
//     console.log(y); //20
//     return y
// }


// foo()

// console.log(x); //10
// console.log(y); //y is not defined

// console.log(global);

// * variable var
// var hola;
// var hola = 'hola'
// var hola = 'hola'
// var hola = 'hola'
// var hola = 'hola'
// var hola = 'hola'
// var hola = 'hola'


// * variable let
// let holi;
// holi = 'holi'
//  holi = 'holi'
//  holi = 'holi'
//  holi = 'holi'


// * variable const
// const hello = 8
// hello = 8
// hello = 'hi'
// hello = 'hi'

// * con var
// var saludar = 'hola';
// var hora = 13;

// if(hora > 12){
//     var saludar = 'buenas tardes'
// }

// console.log(saludar)//'hola' - buenas tardes

// * con let
// let saludar = 'hola'
// let hora = 13;

// if(hora > 12){
//    let saludar = 'buenas tardes'
// }

// console.log(saludar);//hola

// function saludar(arg){
//     return arg
// }


// function despedida(){
//     function otraDespedida(){
//         var mensaje = 'adiocito'
//         console.log(mensaje);
//         return mensaje
//     }
//     console.log(otraDespedida());
// }

// function posdata(){
//     var mensaje = 'aun falta un poquito para irnos a almorzar'
//     console.log(mensaje);
// }


// var nombre = 'Gaston'

// console.log(despedida() );


// console.log(bar());
// console.log(foo);

// var foo = 'Hola, me declaro';

// function bar(){ // declaración de función
//     console.log('soy una función');
// }

// var bar = function(){ // expresión de función
//     console.log('soy una función');
// }

// function numeros(){
//     this.a = 15
// }

// numeros()

// console.log(a);//15

// function a(){
//     function b(){
//         return this 
//     }

//     return b()
// }

// console.log(a()); //objeto global

// let frutas = {
//     acida:'limón',
//     sabor: function(){
//         console.log('El helado es sabor ' + this.acida);
//     }
// }

// frutas.sabor()

// let objeto = {
//     nombre: 'Lápiz',
//     metodo: function(){
//         this.nombre = 'borrador'
//         console.log(this);

//         let that = this
//         let cambia = function(string){
//             that.nombre = string
            
//         }

//         cambia('regla')
//         console.log(this);
//     } 
// }

// objeto.metodo()


// function hola(){
//     console.log('hola');
//     console.log('terminó la función hola');
// }

// function cohorte(valor){
//     console.log(valor);
//     console.log('terminó la función cohorte');
// }

// function saludo(){
//     hola()
//     cohorte('FT46b')
//     console.log('terminó función saludo');
// }

// saludo()

// function myFunction(){}

// myFunction.nombre = 'Cristian'

// console.log(myFunction);

var arr = [1,2,3]
var arr2 = arr

arr.push(4)

console.log(arr2);

var a = 10
var b = 'azul'
var c = a

console.log(c);

a = 18
c = a
console.log(c);