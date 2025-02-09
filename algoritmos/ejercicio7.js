// 7 - Ordenar un array de números en orden ascendente (sin usar sort).

//definimos un array
const array = [32, 4949, 4950, 86849, 394, 293, 3, 5, 12, 98, -543, 0, 3.4, -8, 32940483];
//console.log(`Array 1:`, array);

const arrayFor = [32, 4949, 4950, 86849, 394, 293, 3, 5, 12, 98, -543, 0, 3.4, -8, 32940483, -111111];
//console.log(`Array 2:`, arrayFor);

const arrayFor2 = [-8, 5, 3, 12, 32, 98, 293, 394, 4949, 4950]
//console.log(`Array 3:`, arrayFor2);

//Luego de investigar, tengo que comprender bien la solución.

//Solución "Algoritmo bubble sort"
// luego de estudiar esta solución y sus variantes, paso a replicarlas por mi misma

//Prueba con "do... while"

//Declaramos la función
function whileBubble(array) {

    //declaramos las variables
    
    // para referirnos al largo del array, que usaremos más adelante
    let n = array.length;

    // para indicar que se ha producido un cambio en el bucle, y pararlo cuando ya no haya más cambios (ergo, el array está ordenado)
    let cambio = false;

    // para almacenar el valor temporal del cambio
    let temp;

    //variable para saber cuántas vueltas da el bucle
    let veces = 0;

    do {
        //primero, nos aseguramos de que la variable que detendrá el bucle se restablece a false
        cambio = false;
        // EXPLICACIÓN:
        // El bucle se ejecuta mientras cambio sea true. 
        // Lo que lo cambia a true es que se produzca un cambio, al menos uno
        // Mientras se produzcan cambios, el array no está ordenado
        // Estaremos seguros de que el array se ha ordenado cuando NO se produzca ningún cambio
        // Ergo, cambio permanecerá en false solamente cuando no haya cambios (esté ordenado)
        // Por eso, se coloca aquí y no al final del bucle (cosa que hice, en un else), 
        // si no hay cambios, pasará a false, y si la última cifra resulta ser la mayor, el cambio no se produce, y se marca false, deteniendo el bucle antes de tiempo
        // de hecho, es una pérdida de recursos pasar un false innecesario :)

        //luego, creamos el bucle que recorrerá el array, un for de toda la vida
        for (let i = 0; i < n -1; i++) {//i < array.length -1 para no salirnos del array al comparar con el último par
            //console.log(array[i], array[i+1]);
            
            //creamos la condición que hará el cambio
            // si al comparar dos cifras adyacentes, la primera es mayor que la segunda, se intercambian, y marcamos un cambio
            if (array[i] > array[i + 1]) {
                //almacenamos el valor a mover en la variamble temporal
                temp = array[i];
                //asignamos el valor de la segunda posición a la primera
                array[i] = array[i + 1];
                //asignamos el valor almacenado en temp en la segunda posición, y ya tenemos la pareja ordenada
                array[i + 1] = temp;
                
                //como ha ocurrido un cambio, marcamos cambio true para que el bucle empiece de nuevo al terminar el recorrido
                cambio = true;
            } 
            //console.log(array);
        } 
        //reducimos el scope a recorrer por el bucle reduciendo en 1 el largo, pues ya no hace falta comparar lo que está ordenadado al final
        n--;

        // aumentamos el contador de vueltas
        veces++;
        
    } while (cambio);
    
    return (
        console.log(array)
        + 
        console.log("Cantidad de ejecuciones del bucle do while`", veces)
    );
}
let arrayWhile1 = [...array];
console.log(`Array 1:`, arrayWhile1);
console.log(`Array 1 ordenado con do...while:`);
whileBubble(arrayWhile1);

let arrayWhile2 = [...arrayFor];
console.log(`Array 2:`, arrayWhile2);
console.log(`Array 2 ordenado con do...while:`);
whileBubble(arrayWhile2);

let arrayWhile3 = [...arrayFor2];
console.log(`Array 3:`, arrayWhile3);
console.log(`Array 3 ordenado con do...while:`);
whileBubble(arrayWhile3);


//prueba con un for anidado, la solución "tradicional" encontrada en internet

//creamos la función
function forBubble(array) {

    //declaramos las variables

    // para referirnos al largo del array
    let n = array.length;

    // para almacenar el valor temporal del cambio
    let temp;

    // variable para detener el bucle
    let cambio;

    //variable para contar las veces que el bucle se ejecuta;
    let veces = 0;

    //creamos el primer for
    for (let i = 0; i < n - 1; i++) {

        //re-seteamos cambio en false al inicio
        cambio = false;
        
        //creamos un segundo for 
        // vamos a comprobar cada par de numeros la cantidad de numeros que haya en el array
        for (let j = 0; j < n - 1; j++) {
            //
            //console.log(array[j], array[j+1]);

            //creamos un if para comparar posiciones, e intercambiar si la primera posición es mayor
            if (array[j] > array[j+1]) {
        
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp; 

                //establecemos cambio en true, para que no se ejecute el break que está luego
                cambio = true;
            }
            
        }
        //aumentamos el contador
        veces+=1;

        //terminamos el bucle principal si no hubo cambios en el for anidado
        if (!cambio) {
            break;
        }
        
    }
    return (
        console.log(array)
        +
        console.log("Cantidad de ejecuciones del bucle:", veces + 1)
    );
}

let arrayForF1 = [...array];
console.log(`Array 1:`, arrayForF1);
console.log(`Array 1 ordenado con "For" anidado:`);
forBubble(arrayForF1);

let arrayForF2 = [...arrayFor];
console.log(`Array 2:`, arrayForF2);
console.log(`Array 2 ordenado con "For" anidado:`);
forBubble(arrayForF2);

let arrayForF3 = [...arrayFor2];
console.log(`Array 3:`, arrayForF3);
console.log(`Array 3 ordenado con "For" anidado:`);
forBubble(arrayForF3);

//PRUEBAS ANTERIORES
//Primera prueba, usando mi propia lógica:

//creamos una constante para un nuevo array
/*
let arrayOrdered = [];
let arrayTemp = [...array];
let i = 0;
*/

/*
while (arrayTemp[i] !== "") {
    if (arrayTemp[i] > arrayTemp[i+1]) {
        console.log(arrayTemp[i]);
    arrayOrdered.push(arrayTemp[i]);
    arrayTemp.shift([i]);
    i++;
    console.log(arrayTemp[i]);
    } else {
     i++
    }
}
    //SE GENERA UN BUCLE INFINITO
*/
//Ajuste del anterior:
/*
while (i < arrayTemp.length - 1) { // No vamos a comparar fuera del array
    if (arrayTemp[i] > arrayTemp[i + 1]) {
        console.log(arrayTemp[i]);
        arrayOrdered.push(arrayTemp[i]);
        arrayTemp.shift(); // Eliminar el primer elemento
    } else {
        i++;
    }
}
    //Obtengo un resultado ordenado, pero se salta varios items
    */


//console.log(arrayOrdered);
//console.log(arrayTemp);
