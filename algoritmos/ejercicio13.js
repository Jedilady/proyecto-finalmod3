// 13 - Crear un algoritmo que sume todos los números de un array.

//definimos un array y lo mostramos en consola
const array = [32, 86849, 4950, 394, 293, 3, 5, 12, 98, -543, 0, 3.4, -8];
console.log(`Este es nuestro array: ${array}`);

//Opción 1: usando reduce
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log("Esta es la suma usando REDUCE:", sumWithInitial);

//Opción 2: probando con FOR

//creamos una constante acumuladora
let suma = 0;

//hacemos un for que recorra el array, y sume cada valor
for (let i = 0; i < array.length; i++) {//i <= array.length -1
    let a = array[i];
    //console.log(`a`, a);
    //console.log("suma 1", suma);
    
    suma = suma + a;
    //console.log("suma2", suma);

    //simplificable como:
    //suma += array[i];
    
}

console.log("Esta es la suma usando FOR:", suma);
