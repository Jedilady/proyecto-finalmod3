// 2 - Crear un algoritmo que invierta un string

//creamos la función que invertirá un string dado
function invertirString(string) {
    string.split('').reverse().join('')
}

//creamos una variable que almacene el pompt del usuario:
let stringPrompt = prompt("Dime una frase y te la digo al revés");

//creamos la variable a llamar para ejecutar la función y pasarle el prompt
let frase = invertirString(stringPrompt);

//pasamos una verificación mínima: el campo no puede estar vacío
if (stringPrompt === "") {
    alert("No puedes dejar el campo vacío")
} 
//ejecutamos la función, cuyo resultado se mostrará en el alert
else {
    alert(frase)
}