// 11 - Encontrar el segundo número más grande en un array. 

//Opción 1: hacemos un sort y ubicamos la posición 1

//Como ya hicimos en el ejercicio 3:

//definimos un array y lo mostramos en consola
const array = [32, 86849, 4950, 394, 293, 3, 5, 12, 98, -543, 0, 3.4, -8];
console.log(`Este es nuestro array: ${array}`);

//escribimos una función comparadora clásica, pero escribiendo b - a para que el primer número del array sea el mayor:
function compareFn (a, b) {
 return b - a;
}

//lo ordenamos ejecutando la función en el sort
const arrayOrdenado = array.sort(compareFn);

//y obtenemos la segunda posición
console.log(`El segundo mayor número del array es ${arrayOrdenado[1]}`);