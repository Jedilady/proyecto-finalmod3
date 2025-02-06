// 10 - Crear un programa que convierta grados Celsius a Fahrenheit y viceversa.

//creamos dos constantes para cada prompt, el de celcius y el de farenheit
const celciusToFar = prompt("Dime los grados Celcius que quieras covertir a Farenheit");
const farenheitToCel = prompt("Dime los grados Farenheit que quieras covertir a Celcius");

// creamos las funciones de las fórmulas
//Cel to Far
const celToF = (grados) => {
    return (grados * 9 / 5) + 32;
}
let resultCtoF = celToF(celciusToFar);

//Far to Cel
const farToCel = (grados) => {
    return (grados - 32) * 5 / 9;
}
let resultFtoC = farToCel(farenheitToCel);

//realizamos las comprobaciones básicas
if (isNaN(celciusToFar) || isNaN(farenheitToCel)) {
    alert("Sólo puedes introducir números")
} else {
    alert(`El resultado de convertir ${celciusToFar} Celcius es ${resultCtoF} Celcius. Y el resultado de convertir ${farenheitToCel} Farenheit es ${resultFtoC} Celcius`)
};