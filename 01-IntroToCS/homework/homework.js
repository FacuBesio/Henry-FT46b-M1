'use strict';

function BinarioADecimal(num) {

   var numSeparado = num.split('');
   numSeparado.reverse();

   var resultado = 0;

   for (let i = 0; i < numSeparado.length; i++) {
      if (numSeparado[i] === '1') {
         resultado = resultado + 1 * (2 ** i);
      }
   }

   return resultado;
}

function DecimalABinario(num) {

   var numStringBinario = '';

   if (num === 0) {
      return '0';
   }

   while (num > 0) {

      var resto = num % 2;
      numStringBinario = resto + numStringBinario;

      num = Math.floor(num / 2);
   }

   return numStringBinario;


}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
