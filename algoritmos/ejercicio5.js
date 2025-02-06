// 5 - Determinar si una palabra es un palíndromo.








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