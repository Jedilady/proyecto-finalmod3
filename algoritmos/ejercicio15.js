// 15 - Crear un programa que devuelva los números primos hasta el número (n). 

//Para este ejercicio, necesitamos guardar en una variable "n" el número que nos pase el usuario (luego de verificar ques es un entero > 1 válido)

// Los números primos son aquellos que sólo pueden ser divididos entre 1 y sí mismos. Esto excluye al 1 y los negativos.
// Una verificación es creando un bucle que divida el número entre todos los demás. si el resultado de numeroA % numeroB == 0, no  es primo
//lo primero es verificar cada número si es primo o no, y luego, en otro bucle, si es primo, pasarlo a un array
//un modo de reducir las operaciones es usando la raiz cuadrada del numero (así se descartan casos como 121 que es 11 * 11)


//función para las comprobaciones:
function verificar() {

    let promptNumber;

    //Variable para el prompt y las comprobaciones:
    promptNumber = prompt("Ingresa un número entero y te mostraré todos los números primos hasta ese valor");

    if (isNaN(promptNumber)) {
        alert("Has ingresado texto. Vuelve a intentarlo");
        return
    } else (promptNumber = Number(promptNumber))
    
    if (promptNumber <= 1) {
        alert("El numero debe ser nayor que uno. Vuelve a intentarlo");
        return
    } else if (promptNumber % 1 != 0) {
        alert("Debes ingresar un número entero")
        return
    }
    
    return Number(promptNumber);
}



//función para el cálculo
function primos() {

    //creamos el array de primos
    let arrayPrimos = [];

    //guardamos en una variable el resultado de verificar
    let number = verificar();

    //si verificar no pasa las verificaciones (dará undefined), detenemos
    if (number === undefined) {
        console.log("No pasó la verificación");
        return
    } 

    //creamos un bucle que nos dice si el número a comprobar es o no primo

    for(let i = 2; i <= number; i++) {

        let primos = true;//y no "let primos;"" porque necesitamos que 2 y 3 pasen el 2do bucle

        for (let j = 2; j <= Math.sqrt(i); j++) {
            
            //console.log("i: " + i);
            //console.log("j: " + j);
            
            if (i % j === 0) {
                primos = false;
                break
            } else {primos = true}
        }
        //console.log("i2:" + i);
        
        if (primos == true) arrayPrimos.push(i)
    }

    /*//Esto NO funciona
    //creamos el bucle que revisa y pinta los primos 
    for(let i = 2; i <= number; i++) {

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                continue
            } else {arrayPrimos.push(i)}
        }
    }
    */

    //verificamos en consola el contenido del array luego del bucle
    console.log(arrayPrimos);
    
    //sacamos en un alert el resultado
    return alert(`Los números primos hasta el ${number} son:\n` + arrayPrimos.join(", "))
     
}

//llamamos a la función
primos()


//verificacion del estado de la funcion verificar
//let estado = verificar();
//console.log("status", estado); 






//Solución DESCARTADA
///ERROR me equivoqué con el planteamiento de que dividir los primos entre 2, 3,5 y 7 era suficiente. 121 da primo, pero es 11 * 11 

// La solución está en crear un recorrido en "descenso" (i--) con un for, desde el número dado por el usario, y pasarle las comprobaciones esenciales para saber si es primo: 
// Si un número es divisible entre 2, 3, 5, ó 7 y su resto es !cero, es primo
//luego, los números que cumplan con este requisito, entrarán en un array, y mostraremos el array.
//por defecto, los números 2, 3, 5, 7 los pintaremos manualmente, ya que son los número base
//ahora que lo pienso, podemos también hacer el recorrido en ascenso, con simplemente decir que revise hasta el número dado (i < number)

//bucle inicial
/*
//creamos el bucle que revisa y pinta los primos 
    for(let i = 1; i <= number; i++) {
        if (i === 1 || i === 2 || i === 3 || i === 5 || i === 7) {
            arrayPrimos.push(i)
        } else if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
            arrayPrimos.push(i)
        }
    }
*/