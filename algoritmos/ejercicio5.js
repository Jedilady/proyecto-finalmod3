// 5 - Determinar si una palabra es un palíndromo.

//Para este ejercicio necesitamos comprobar que el estring al revés es igual que al derecho
//deberemos hacer dos limpiezas para mejorar la verificación: 
// 1 - todo a minúsculas 
// 2 - un trim que nos permita pasar correctamente frases como "dabale arroz a la zorra el abad"
// 3 - toDo: eliminar acentos. Lo obviaremos por ahora por las complicaciones

//Como siempre, creamos la constante que almacenará el resultado del prompt:
const fraseOriginal = prompt("Dime una frase y te digo si es un palíndromo (sin acentos)");

//limpiamos con trim y toLowerCase
//Quitamos los espacios con .replace(/\s+/g, '')
const cleanFrase = fraseOriginal.trim().toLowerCase().replace(/\s+/g, '');

//creamos una constante con el resultado invertido
const reverseFrase = cleanFrase.split("").reverse().join("");

//creamos otra constante para mostrar el resultado original al revés
const fraseReverse = fraseOriginal.split("").reverse().join("");

//Comparamos y mostramos resultados
if (reverseFrase === cleanFrase) {
    alert(`¡Tenemos un palíndromo! "${fraseOriginal}" y "${fraseReverse}"`);
} else {
        alert(`No es un palíndromo "${fraseOriginal}" y "${fraseReverse}"`);
};

//ToDo: pasar una comprobación para el caso de números(?)
// ya sea decir "eso es capicúa" o no permitir números