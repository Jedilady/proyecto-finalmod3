// 8 - Crear una función que cuente cuántas veces aparece un carácter en un string.

//creamos un string
let string = "Por los clavos benditos de Cristo crucificado"
console.log("Este es nuestro string:");
console.log(string);

// Declaramos la variable del caracater a buscar:
let char = "c"
console.log("Y este el caracter a buscar:", char);

//declaramos la variable donde almacenaremos las veces que aparezca el char
let suma = 0;

//creamos una variable para el string en minúsculas
let stringLowcase = string.toLowerCase();

//declaramos la función con la que realizaremos la comprobación

function cuentaChar(charToCheck, stringToCheck) {

    // recorremos el string con un for of
    for (const character of stringToCheck) {
        //declaramos la condición para realizar el conteo
        if (character === charToCheck) {
            suma++
        }
    }

    return (console.log(`La cantidad de veces que aparece "${charToCheck}" es:`, suma));
}

cuentaChar(char, stringLowcase);


//TO DO: hacer una función que pueda comprobar caracteres acentuados. 
// Para ello, primero tendríamos que "limpiar" el string, cambiando las palabras acentuadas por no acentuadas.
//Se me ocurre pasar el string por un comparador, similar al ejercicio de leet speak, pero quitando acentos