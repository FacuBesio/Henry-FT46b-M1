demo.js
// * Recursión
// function sumarArreglo(array){
//     // * caso base
//     if(array.length === 0) return 0;


//     const primerNumero = array[0]
//     // console.log(primerNumero);
//     const restoNumeros = array.slice(1)
//     // console.log(restoNumeros);
//     return primerNumero + sumarArreglo(restoNumeros)
// }


// console.log(sumarArreglo([2,5,8]));

//* Set
// const arreglo = []
// console.log(typeof arreglo);
// const set = new Set()
// console.log(typeof set);

// arreglo.push(5)
// console.log(arreglo);


// set.add(6)
// console.log(set);
// set.add(5)
// set.add(6)
// console.log(set);

// for (const item of set) {
//     console.log(item);
// }

// * Stack
class Stack{
    constructor(){
        this.__stack__ = []
    }

    save(info){
        this.__stack__.push(info)
    }

    delete(){
        this.__stack__.pop()
    }

    showStack(){
        return console.log(this.__stack__)
    }
}


const newStack = new Stack()

newStack.save(5)
newStack.save(19)
newStack.save('Daniel')

newStack.showStack()

newStack.delete()
newStack.showStack()

console.log(newStack.__stack__);

newStack.__stack__.shift()

newStack.showStack()