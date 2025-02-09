// 19 - Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.


//Para saber a qué siglo pertenece un año, lo dividimos entre 100, y redondeamos hacia arriba
//así, 99/100 = 0,99, redondeado = siglo 1. -305/100 = -3,05, redondeamos hacia arriba, -4 (s 4 a.c.).

//creamos la función para pedir el año y verificar que está todo bien
function getYear() {
    //creamos la constante del prompt
    let year = prompt("Dime un año:");

    //si es un año entero, pasamos el año como número
    if (!isNaN(year) && year % 1 === 0) {
        return (Number(year));
    } else {
        //si no, lanzamos alerta
        alert(`${year} no es un año válido`)
    }
}

//creamos la función que calcula el sigo
function getCentury(year) {

    // Evita ejecutar si la entrada fue inválida
    if (year === null) return; 

    //variable para almacenar el siglo
    let century;

    //posibilidades si el año es cero, es mayor que cero o es menor
    if (year > 0) {
        century = Math.ceil(year/100);
        alert(`El año ${year} pertenece al s. ${century} d.C.`);    
    } else if (year < 0) {
        century = Math.floor(year/100);
        alert(`El año ${year} pertenece al s. ${century} a.C.`);
    } else if (year === 0) {
        alert("El año cero no existe en nuestro calendario");        
    } else {
        //pasamos a consola que algo ha ido mal
        console.log("Algo no ha ido bien. Vuelve a intentar");
    }
}

//llamamos a ambas funciones:
getCentury(getYear())