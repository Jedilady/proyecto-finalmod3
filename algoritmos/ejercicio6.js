// 6 - Crear un programa que calcule el número Fibonacci en la posición (n).

//creamos la variable que almacene el número dado por el usuario mediante un prompt
const numeroFibo = prompt("Dime un número natural y te calculo su valor Fibonacci")

// creamos la función para calcular Fibonacci
function fibo(number){

    //creamos las constantes base de partida
    let a = 0;
    let b = 1;
    let suma;

    //seteamos a mano el resultado de las dos primeras posiciones
    if (number === 0) return fibonacciResult.textContent = `${a}`;
    if (number === 1) return fibonacciResult.textContent = `${b}`;

    for(let i = 2; i <= number; i++) {
        suma = a + b;
        a = b;
        b = suma;
    }

    return suma;
};

//pasamos las verificaciones básicas
if (isNaN(numeroFibo)) {
    alert(`"${numeroFibo}" no puede contener letras`)
} else if ((numeroFibo < 0) || (numeroFibo % 1 !== 0)) {
    alert(`"${numeroFibo}" no es válido. Debe ser un número natural`)
} else {
    let resultado = fibo(Number(numeroFibo));
    alert(`el Fibonacci de la posición ${numeroFibo} es ${resultado}`)
}


