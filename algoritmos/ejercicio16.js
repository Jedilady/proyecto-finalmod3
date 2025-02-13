// 16 - Escribir una función que convierta un número romano a número arábigo.

//Para solucionar este ejercicio, usaremos una analogía similar al ejercicio de 1337 sp34k (realizado previo a este)
//tendremos un objeto con los valores de los numeros romanos sobre el cual iteraremos con un for of (nota. con el for of no lo logré, pero sí con el for normal)
//luego, haremos ciertas comprobaciones par adeterminar si debemos restar o smar cada número según su posición

//Cuál es la lógica de los números romanos? comparamos por parejas. si la posición izq es mayor o igual a la derecha, se suman. si es menor, se resta.
//con esto en mente, podemos hacer un if que vaya comparando cada pareja para saber si debe sumar o restar el valor

//creamos el objeto con los números romanos básicos
const romanos = {
    "I": 1,
    "V": 5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000,
}

let romanNumber = "MMMDCCCLXXXVIII"//MMXXV 2025,MCMIV 1904, MCMXCIV 1994, MMMCDXC 3490, MMMDCCCLXXXVIII 3888, XIV 14, XXIX 29, LXXXIV 84, CXLV 145, CDXLIV 444, DCCCXC 890, CMXCIX 999
console.log("Este es nuestro número romano:", romanNumber);


function romanToArabic(string) {
    let resultado = 0;

    for (let i = 0; i < string.length; i++) {
        //console.log(i, string[i], romanos[string[i]], romanos[string[i + 1]]);

        let j = romanos[string[i]]
        let k = romanos[string[i + 1]]

        //prevenir que compare por fuera del bucle
        //si en el for definía "i < string.length - 1", no usa el último número
        //seguro tiene una solución más elegante, pero por ahora me sirve :)
        if (k === undefined) {
            k = 0;
        }
        
        if (j >= k) {
            resultado += j
            //console.log(j, k, "Result suma: ", resultado);
        } else {
            resultado -= j
            //console.log(j, k, "Result resta: ", resultado);
        }
    
    }

    return console.log("Y este es el resultado en arábigo: ", resultado);
}

romanToArabic(romanNumber)


//Otros intentos fallidos, y de cómo fui llegando a la solución <3
//y sin hacer uso de las notas de la tuto con Cris (que me sirvió como base), ni de preguntarle a chatGPT por pistas!!!
//Lo hiceee yoooo!!!!!!

    //primer intento
    /*
        for (const letra of string) {
            if (romanos[letra] < resultado) {
                resultado += romanos[letra]
            } else if (romanos[letra] >= resultado) {
                resultado -= romanos[letra]
            }
        }
    */

    //segundo intento
    /*
        for (const letra of string) {
            if (resultado < romanos[letra]) {
                resultado += romanos[letra]
            } else if (resultado >= romanos[letra]) {
                resultado -= romanos[letra]
            }
        }
    */
    
    //tercer intento
    //Aquí me di cuenta de que el for of no me iba a servir, pero iba por buen camino con la lógica
    /*    
        for (const letra of string) {
            console.log(letra, romanos[letra], romanos[letra + 1]);
            
            if (romanos[letra] >= romanos[letra + 1]) {
                resultado += romanos[letra]
            } else {
                resultado -= romanos[letra]
            }
        }
    */
        
       
        