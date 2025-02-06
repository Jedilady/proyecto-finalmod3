// 9 - Escribir un algoritmo que determine si un año es bisiesto.

//Cómo se calcula un bisiesto: 
// Es divisible por 4, pero NO por 100 (una excepción para corregir el desfase que se produce cada 100 años)
// Es divisible por 400 (excepción de la excepción por lo mismo).
// Es decir, si es múltiplo de 100 pero NO de 400, entonces NO es bisiesto.

//creamos la variables para almacenar el año que nos provea el usuario
let yearBisiesto = prompt("Dime un año y te digo si es o no bisiesto")

//Entonces sabemos que, todo año divisible entre 4, 
//excepto los que se puedan dividir entre 4 Y 100, esos NO
//Todo año divisible entre 400 ES bisiesto

function bisiesto(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} es bisiesto`);
        return true
    } else {
        console.log(`${year} no es bisiesto`);
        return false
    }
}

let result = bisiesto(Number(yearBisiesto));

//pasamos las comprobaciones básicas
if (isNaN(yearBisiesto) || (yearBisiesto % 1 !== 0)) {
    alert(`${yearBisiesto} no es válido`)
} else if (!result){
    alert(`${yearBisiesto} no es bisiesto`)
} else {
    alert(`${yearBisiesto} es bisiesto!`)
}