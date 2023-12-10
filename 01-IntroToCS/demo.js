var suma = 12 + 15 
console.log(suma);//27


/*
* Suma de números binarios
   11
   01100 (12)
   01111 (15)
----------------
   11011 (27)

1. AND -> 0 0 1 1 - Si AND es 0 no acarrea, si es 1 acarrea
2. XOR -> suma
*/

// ? Pasar un número de binario a decimal
// * decimal = 0,1,2,3,4,5,6,7,8,9
// * binario = 1,0

/*
   *3210 -> posición
    1100 -> (12)


? 1 * 2 ^ 3 + 1 * 2 ^ 2 + 0 * 2 ^ 1 +  0 * 2 ^ 0 
?  1 *   8   + 1 *   4   + 0 *   2   +  0 *   1
?      8    +     4      +    0      +      0
    
*     12

*/

// ? Pasar un número de decimal a binario
/*
 ? 12 / 2 = 6 (0)
 ? 6 / 2 = 3 (0)
 ? 3 / 2 = 1 (1)
 ? 1 / 2 = 0 (1)

* 1100

*/