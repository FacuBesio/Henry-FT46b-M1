const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código aca:
    /*
        1. Sumemos los valores del arreglo
        2. Me puedo topar con otro arreglo...
        3. Tomar dos caminos:
            - Qué hacemos si me encuentro con otro arreglo...aplico recursión
            - Qué hacemos si me encuentro con un número -> sumamos
    */

    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])){
            suma += countArray(array[i]);
        } else {
            suma += array[i];
        }
    }
    return suma;
}


// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    // Tu código aca:

     /*
        Los objetos los podemos recorrer? forin

        1. Necesitamos un contador, que vaya contando las propiedades...
        2. Recorrer los objetos
        3. Si es una propiedad, sumarla a nuestro contador
        4. Preguntar si la propiedad es un objeto y diferente a un array...aplicamos recursión
        5. Si la propiedad es un objeto, sumarla y aplicamos recursión
        6. Retornar contador.
    */

    let contador = 0;

    for (const propiedad in obj) {
        contador++;
        if (typeof obj[propiedad] === 'object' && !Array.isArray(obj[propiedad])) {
            contador += countProps(obj[propiedad]);    
        }
    }
    return contador;
}


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
       /*
    castear -> Coerción de datos
    1. Recorrer la lista
    2. chequeando que el valor del nodo no sea un número (isNaN)
    3. Si no es un número, cambio el valor a kiricocho
    4. Guardar los cambios realizados (contarlos)
    */

    let cambios = 0; 

    let current = this.head;

    while(current){
        if(isNaN(Number(current.value))){
            current.value = 'Kiricocho';
            cambios++
        }
        current = current.next;
    }

    return cambios;

}


// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    /*
        1. Debemos utilizar los métodos de la clase Queue
        2. No son arreglos -> obj instanciados de la clase Queue
        3. Fijarnos en los tamaños de las queues que recibimos por parámetro
        4. Objetivo: Combinar las queues -> alternada
        5. Sacar cada item de cada queue y unirlo a la nueva queue
        6. Retornar una queue (instancia de Queue)
    */
    
    const newQueue = new Queue();

    while(queueOne.size() || queueTwo.size()){
        if(queueOne.size()) newQueue.enqueue(queueOne.dequeue());
        if(queueTwo.size()) newQueue.enqueue(queueTwo.dequeue());
    }

    return newQueue;

}


// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:
    return function(num){
        return multiplier * num
    }
}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:

     /*
        1. Debemos sumar los valores de cada nodo del árbol
        2. Si está vacío debe retornar 0
        3. No nos olvidemos que los árboles son recursivos
        4. Acumulando en una variable lo que vamos sumando 
        5. Preguntar si tenemos izquierda y/o derecha
    */

    let suma = 0; 

    suma += this.value;
    
    if(this.left) suma += this.left.sum();
    if(this.right) suma += this.right.sum();

    return suma; 

}

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}