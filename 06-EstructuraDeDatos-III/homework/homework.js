'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

// ! INSERT:
BinarySearchTree.prototype.insert =
   function (value) {
      if (value < this.value) {
         if (!this.left) {
            const newTree = new BinarySearchTree(value)
            this.left = newTree
         } else {
            this.left.insert(value)
         }
      } else if (value >= this.value) {
         if (!this.right) {
            const newTree = new BinarySearchTree(value)
            this.right = newTree
         } else {
            this.right.insert(value)
         }
      }
   }

// ! CONTAINS:
BinarySearchTree.prototype.contains =
   function (value) {
      if (value === this.value) return true;
      if (value < this.value && this.left !== null) {
         return this.left.contains(value)
      }
      if (value > this.value && this.right !== null) {
         return this.right.contains(value)
      } else {
         return false;
      }
   }

// ! SIZE:
BinarySearchTree.prototype.size =
   function () {
      // ? Caso base Nodo solo:
      if (!this.left && !this.right) return 1;

      // ? Si el Nodo tiene un solo hijo:
      if (!this.right) return 1 + this.left.size();
      if (!this.left) return 1 + this.right.size();

      // ? Si el Nodo tiene amobos hijos:
      return 1 + this.right.size() + this.left.size();
   }

// ! DepthFirstForEach:
BinarySearchTree.prototype.depthFirstForEach =
   function (cb, recorrido) {
      // ? 'in-order' (nodo izquierdo - nodo padre - nodo derecho):
      if (recorrido === 'in-order' || !recorrido) {
         if (this.left) this.left.depthFirstForEach(cb, recorrido); // nodo izquierdo
         cb(this.value); // nodo padre
         if (this.right) this.right.depthFirstForEach(cb, recorrido); // nodo derecho
      }

      // ? 'pre-order' (nodo padre - nodo izquierdo - nodo derecho):
      if (recorrido === 'pre-order') {
         cb(this.value);
         if (this.left) this.left.depthFirstForEach(cb, recorrido);
         if (this.right) this.right.depthFirstForEach(cb, recorrido);
      }

      // ? 'post-order' (nodo izquierdo - nodo derecho - nodo padre):
      if (recorrido === 'post-order') {
         if (this.left) this.left.depthFirstForEach(cb, recorrido);
         if (this.right) this.right.depthFirstForEach(cb, recorrido);
         cb(this.value);
      }
   }

// ! BreadthFirstForEach:
// ? Recorre nodos por nivel: De izquierda a derecha y de arriba hacia abajo:
BinarySearchTree.prototype.breadthFirstForEach =
   function(cb, arr = []){  // arr = [] => Indica que solo si arr no esta declarado, cree por default uno vacio.
      cb(this.value);
      this.left && arr.push(this.left);
      this.right && arr.push(this.right);

      arr.length && arr.shift().breadthFirstForEach(cb, arr);
   }

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
