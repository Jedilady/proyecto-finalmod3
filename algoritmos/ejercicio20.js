// 20 - Un reloj muestra:
// -> la hora (0 <= h <= 23)
// -> los minutos (0 <= m <= 59)
// -> y los segundos (0 <= s <= 59).
// Escribe una funcion que calcule los millisegundos que han pasado desde media noche 00:00:00 hasta la hora actual teniendo en cuenta que:
//– Hay 1000 millisegundos en un segundo
//– Podemos obtener la hora, minutos y segundos con la función "getTime"

//Obtenemos la hora actual:
let today = new Date();

//Obtenemos la hora de hoy a las 00:00:00 con el método "Set Today"
//Esto ya setea ms a cero
let horaCero = today.setHours(0, 0, 0, 0);

//Obtenemos los ms que han transcurrido HOY con el método valueOf
const valueDateToday = dateToday.valueOf();

//restamos los milisegundos transcurridos menos los seteados a las 00:00:00
console.log(valueDateToday - valueHoraCero); 

/*
console.log("Reloj: ");
// fecha actual
let date = new Date();

// la hora en tu zona horaria actual
console.log( date.getHours() );

console.log( date.getMinutes() );

console.log( date.getSeconds() );

let today = new Date();

today.setHours(0, 0, 0, 0);
console.log(today); 

//let horaCero = today.setHours(0, 0, 0, 0);



const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));

console.log(date1.valueOf());
// Expected output: 823230245000

const date2 = new Date("02 Feb 1996 03:04:05 GMT");

console.log(date2.valueOf());
// Expected output: 823230245000


const dateToday = new Date();
let horaCero = today.setHours(0, 0, 0, 0);

const valueDateToday = dateToday.valueOf();

const valueHoraCero = horaCero.valueOf();

//console.log(date2.valueOf());
console.log(valueDateToday);
console.log( valueHoraCero);
console.log(valueDateToday - horaCero);
*/





/*
let now = new Date();
console.log( now );

let Dec31_1970 = new Date(-24 * 3600 * 1000);
alert( Dec31_1970 );
*/
/*
// fecha actual
let date = new Date();

// la hora en tu zona horaria actual
console.log( date.getHours() );

console.log( date.getDate() );

console.log( date.getMinutes() );

console.log( date.getSeconds() );

console.log( date.getTime() );
console.log( date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());

console.log("set date");
*/

/*
today.setHours(1);
console.log(today); 

today.setHours(0);
console.log(today); // Sigue siendo el día de hoy, pero con la hora cambiada a 0.
*/

// la hora respecto de la zona horaria UTC+0 (Hora de Londres sin horario de verano)
//alert( date.getUTCHours() );