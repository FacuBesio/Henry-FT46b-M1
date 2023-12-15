demo.js
// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
//     20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,
//    38,39,40,41,42,43,44,45,46,47,48,49,50]

 //  28 - 16 - 23 - 25 - 27

   //27

/*
Factores que vemos a la hora de tener algoritmos eficientes

* -  Mejor caso 
* - Caso promedio
* - peor de los casos
* - amortizado
* - probabilístico
*/

// * ejemplo
// const array = [5,9,3,2,5,7] 

// let max = array[0] //1

// for (let i = 1; i < array.length; i++) { //N pasos
//     if(array[i] > max) max = array[i] //1 paso  1 paso
// }

// console.log(max);
// * N * N 
/*
 ? 1 + N * 2 
 ? 1 + 2N
 ? 3N
 ? O(N) -> Complejidad temporal algorítmica lineal
*/

// * Mostrar los elementos que sumados, el resultado sea igual al valor que se recibe por parámetro
// * Complejidad O(N^2)
function sumarArray(array, num){
    for (let i = 0; i < array.length; i++) { //N pasos
        for (let j = i + 1; j < array.length; j++) { // N pasos
           if(num === (array[i] + array[j])) return [array[i], array[j]] //2 pasos
        }
    }
    return 'Ningún elemento suma ese valor ' + num // 1 paso
}

const array = [5,9,3,2,5,7] 

console.log(sumarArray(array, 16));

/*
? N * N + 2 + 1
? N^2 + 2 + 1
? 2N^2 + 1
? 3N^2
?O(N^2)  
*/

// * Complejidad O(N)
function sumarNumeros(array, num){
    const numerosVistos = {} // 1 paso

    let inicio = 0; // 1 paso
    let fin = array.length - 1 // 1 paso

    while(inicio < fin){ // N pasos
      const aux = num - array[inicio] //1 paso

      if(numerosVistos[aux]) return [aux, array[inicio]] // 2 pasos
      numerosVistos[array[inicio]] = true // 1 paso
    inicio++ // 1 paso
    }

    return 'Ningún elemento suma ese valor ' + num // 1 paso
}

/*
? 3 + N * 5 + 1
? 3 + 5N + 1
? 8N + 1
? 9N
? O(N)

*/

console.log(sumarNumeros(array, 14));

