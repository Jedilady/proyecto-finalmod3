// 3 - Escribir una función que encuentre el número mayor en un array.

//definimos un array y lo mostramos en consola
const array = [32, 86849, 4950, 394, 293, 3, 5, 12, 98, -543, 0, 3.4, -8];
console.log(`Este es nuestro array: ${array}`);

//escribimos una función comparadora clásica, pero escribiendo b - a para que el primer número del array sea el mayor:
function compareFn (a, b) {
 return b - a;
}

//lo ordenamos ejecutando la función en el sort
const arrayOrdenado = array.sort(compareFn);
console.log(`Paso 1: lo ordenamos con la funcion comparadora clásica ${arrayOrdenado}`);

//y obtenemos la primera posición
console.log(`Paso 2: el número del índice 1, y el mayor es ${arrayOrdenado[0]}`);

//opción 2, usamos Math.max
console.log(`Opción 2, usando Math.max El número mayor es: ${Math.max(...array)}`);


