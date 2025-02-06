// 7 - Ordenar un array de números en orden ascendente (sin usar sort).

//definimos un array y lo mostramos en consola
const array = [32, 86849, 4950, 394, 293, 3, 5, 12, 98, -543, 0, 3.4, -8];
console.log(`Este es nuestro array: ${array}`);

//Con sort, para tener referencia:
//escribimos una función comparadora clásica
function compareFn (a, b) {
 return a - b;
}

//lo ordenamos ejecutando la función en el sort
const arrayOrdenado = array.sort(compareFn);
console.log(`Y este es nuestro array ordenado ${arrayOrdenado}`);

//Luego de investigar, tengo que comprender bien la solución. Lo dejo para luego