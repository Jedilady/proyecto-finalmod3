// 4 - Crear un algoritmo que devuelva el factorial de un número.

//creamos la variable que almacena el numero obtenido por un prompt
let baseNumber = prompt("Dime un numero entero positivo");

//creamos una función para el cálculo del factorial
// usamos un for para el cálculo, donde multiplicamos n * n-1 * n-2... etc

//creamos primerouna variable para iniciar el cálculo en 1
let factor = 1;

//y luego la función
function factorial(number) {
    for (let i = number; i >= 1; i--) {
        factor = factor * i;
    }
    return factor;
}

//pasamos las comprobaciones básicas
if (isNaN(baseNumber)) {
    alert(`${baseNumber} no puede contener letras`)
} else if (baseNumber < 0) {
    alert(`${baseNumber} no puede ser negativo`)
} else if (baseNumber % 1 !== 0) {
    alert(`${baseNumber} no puede tener decimales`)
} else {
    //controlamos manualmente que 0! = 1
    if (baseNumber === 0) {
        alert(`El factorial de ${baseNumber} es: ${1}`);
    } else {
        let factor = factorial(Number(baseNumber));
        alert(`El factor de ${baseNumber} es: ${factor}`);
    }
}