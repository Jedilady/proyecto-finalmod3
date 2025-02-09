// 14 - Escribir un programa que verifique si dos strings son anagramas.

//Para resolver este ejercicio, hay que limpiar (quitar espacios) y reordenar los strings, para luego compararlos
//Limpiamos con trim y tolowercase
//Para ordenar, aplicamos split, sort (ordena en orden algabético las letras) y join
//Comparamos ambos, y si sin exactamente iguales, tenemos un anagrama

//creamos las constantes para almacenar la data del usuario
let anagramaA = prompt("Escribe algo:");
let anagramaB = prompt("Escribe su anagrama y comprobemos:");

//creamos la función para simplificar
function processedWord(string) {
    let stringy = string.toLowerCase().trim().split('').sort().join(''); 
    // así NO string.toLowerCase().split('').trim().sort().join('');
    //no podemos hacer trim luego de un split!
    return stringy;
}

//Creando la función comparativa
function checkAnagramas(stringA, stringB) {

    //prevenimos que si el usario da click en cancelar, nos de error
    if (stringA == null || stringB == null) {
        return alert(`No puedes dejar campos vacíos`)
    }

    //verificamos que el usuario no ingresó palabras en el mismo orden de letras
    if (stringA.toLowerCase().trim() === stringB.toLowerCase().trim()) {
        return alert(`${stringA} y ${stringB} no pueden tener el mismo orden de letras. Vuelve a intenterlo`);
    }

    //verificamos que no ingrese números
    if (!isNaN(stringA) || !isNaN(stringB)) {
        return alert(`Los números no cuentan ;) Vuelve a interntarlo`)
    }

    //declaramos las constantes a las que les pasaremos la función simplificadora
    let a = processedWord(stringA);
    let b = processedWord(stringB);
    //creamos el return con un ternario
    return (a === b ? alert(`¡Eureka! ${stringA} y ${stringB} son anagramas!`) : alert(`${stringA} y ${stringB} no son anagramas`));
}

//ejecutamos
checkAnagramas(anagramaA, anagramaB);