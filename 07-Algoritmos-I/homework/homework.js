'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  const factores = [1];
  let divisor = 2;

  while (num !== 1) {
    if (num % divisor === 0) {
      factores.push(divisor);
      num /= divisor;
    } else {
      divisor++
    }
  }
  return factores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  /*
    1. Va comparando de a dos valores: i con i + 1
    2. Si el que está en la posición i es mayor a i + 1? Intercambian posición
    3. Debe crear una variable auxiliar que guarde el valor que está en i antes del intercambio.
    4. Entregar array ordenado
   
    Nota: Si el array terminó de iterar sin cambios...significa que el array ya está ordenado.
    
    */

  let semaforo = true;

  while (semaforo) {
    semaforo = false

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let auxiliar = array[i];
        array[i] = array[i + 1];
        array[i + 1] = auxiliar;
        semaforo = true;
      }
    }
  }

  return array;

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  /*
      Va 'sacando' el elemento y va comparando con el elemento de la izquierda
      Cuando llegamos a la posición 0 o cuando llega un valor más chico
    
      Tener que manejar dos punteros, uno que índice en el que i inicie en el índice 1 y j que inicie en 0
    */

  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let auxiliar = array[i]; // Guardamos el valor de array[i], la posicion de la derecha.

    while (j >= 0 && array[j] > auxiliar) {
      array[j + 1] = array[j] // Redefine el valor de array[i] = array[j] (los intercambia);
      j--
    }
    array[j + 1] = auxiliar; // Redefine el valor de array[j] por el valor que guardamos de array[i] 
    //console.log(array)
  }

  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) min = j; 
      
    }
     let auxiliar = array[i];
     array[i] = array[min];
     array[min] = auxiliar; 

  }

  return array;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
