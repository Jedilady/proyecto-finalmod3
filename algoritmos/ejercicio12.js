// 12 - Escribir una función que elimine los elementos duplicados de un array. 

//nuestro array:
let arrayModelo = [1, 2, 2, 3, 4, 4, 5, "hola", "mundo", "hola", true, false, true, 10, 10];
console.log(`Este es nuestro array de prueba:`, arrayModelo);

//primera solución: Usando SET
//declaramos la constante que almacenará el nuevo array
//Set no permite duplicados, así que se lo pasamos al array
//hay que usar el spread operator (...) para crear el nuevo array sin afectar al original
const uniqueArray = [...new Set(arrayModelo)];
console.log(`Y este es nuestro array filtrado con Set:`,uniqueArray); 

/* PENDIENTE
//Segunda solución: usamos la combinación de métodos "filter" + "indexOf"
//creamos la función 
function filterArray(array){

}
*/

//NOTA
//Luego de haber revisado en internet y encontral el modo filter + indexOf, conseguí este enlace con un montón de posibilidades
//https://flexiple.com/javascript/find-duplicates-javascript-array
//Me lo guardo para estudiarlas