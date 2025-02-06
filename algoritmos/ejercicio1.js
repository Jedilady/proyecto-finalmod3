// 1 - Escribir una función que determine si un número es par o impar.

//creamos la funcion para saber si el número es par o impar
function parImpar(numero) {

    if (numero % 2 === 0) {
        alert(`el ${numero} Es par`);
    } else {
        alert(`el ${numero} Es impar`);
    }
};

//creamos un prompt para pedirle un número al usuario
//y lo almacenamos en una variable
let pregunta = prompt("Dime un número entero");

//creamos las verificaciones
//primero, verificamos si es texto
if (isNaN(pregunta)) {
    alert(`${pregunta} no es un número`);
} 
//verificamos que no tenga resto
else if (pregunta % 1 !== 0) {
    alert(`${pregunta} no es un número entero`);
} 
//si todo ok, llamamos a la función, pasándole "Number" para convertir el string a número
else {
        parImpar(Number(pregunta));
};