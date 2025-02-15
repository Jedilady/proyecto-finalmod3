// 20 - Un reloj muestra:
// -> la hora (0 <= h <= 23)
// -> los minutos (0 <= m <= 59)
// -> y los segundos (0 <= s <= 59).
// Escribe una funcion que calcule los millisegundos que han pasado desde media noche 00:00:00 hasta la hora actual teniendo en cuenta que:
//– Hay 1000 millisegundos en un segundo
//– Podemos obtener la hora, minutos y segundos con la función "getTime"



//La forma sencilla de resolver el reloj: usando getHours, getMinutes y getSeconds

console.log("Primera función: usando getHours, getMinutes y getSeconds + getTime y setHours");


//Establecemos la hora actual con new Date
function easyClock (){
    //variable para obtener la hora actual
    let currentTime = new Date();

    //Variables par aobtener la hora, minutos y segundos a partir de la hora actual
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();

    //creamos una función para transformar el formato a dos dígitos con "padStart"
    let formattedTime = (number) => (String(number).padStart(2, '0'));

    let hh = formattedTime(h);
    let mm = formattedTime(m);
    let ss = formattedTime(s);
    
    //variable para setear la hora de hoy en cero
    let midnight = new Date().setHours(0, 0, 0, 0);//Ver nota abajo
    //Nos devuelve el total de ms desde el epoch hasta la hora seteada (00:00:00:00)
    //console.log(midnight);

    //Variable para obtener los ms desde el epoch hasta el momento actual:
    let currentMS = currentTime.getTime();

    //variable que almacena la resta de los ms totales - los de la media noche:
    let todayMS = currentMS - midnight;
    //console.log(currentMS, midnight);
    
    //Retorno final de la función:
    return (console.log(`La hora actual es: ${hh}:${mm}:${ss}`) + console.log(`Y los milisegundos transcurridos hoy: ${todayMS}`));

    //Nota: para obtener la hora reseteada, y no los ms, hacemos así:
    
    //let hora = new Date(); hora.setHours(0, 0, 0, 0); console.log(hora)

    // Creamos una NUEVA variable para la fecha actual, y le pasamos setHours SIN guardarlo en una variable. 
    // Esto es porque setHours *modifica directamente* lo que hay en la variable de la fecha, y al llamar a dicha variable, obtendremos la variable ahora modificada. 
    // Pero si guardamos esto en una variable y la llamamos, nos dará el resultado en ms, que es lo que devuelve en realidad setHours
    
}

easyClock();

//Calculando la hora a partir de  getTime

console.log(" ");

console.log("Segunda función: realizando el cálculo de la hora a partir de los ms obtenidos con getTime y setHours");

function msClock() {
    //creamos una variable para obtener la fecha actual
    let currentTime = new Date();

    // variable para obtener los ms totales
    let currentMS = currentTime.getTime();

    // variable para los ms hasta media noche 
    let midnight = new Date().setHours(0, 0, 0, 0);

    //variable que almacena la resta de los ms totales - los de la media noche:
    let todayMS = currentMS - midnight;

    //convertimos los milisegundos en segundos
    let todayS = Math.floor(todayMS / 1000);

    // la hora la obtenemos con el entero de los segundos totales entre 3600
    let hour = Math.floor(todayS / 3600);
    //lo convertimos a formato 00 con slice:
    let formattedHour = ("0" + hour).slice(-2);
    //los convertimos en segundos de nuevo para poder calcular los minutos
    let hourSecs = hour * 3600

    // los minutos los obtenemos restando los segundos correspondientes a las horas, y el resto obteniendo el entero de la división / 60
    let min = Math.floor((todayS - hourSecs) / 60);
    //lo convertimos a formato 00 con slice:
    let formattedMin = ("0" + min).slice(-2);
    //convertimos de nuevo los minutos a segundos para poder obtener el resto de segundos
    let minSecs = min * 60

    //restamos el total en segundos de horas y minutos al total de segundos
    let sec = todayS - hourSecs - minSecs;
    //lo convertimos a formato 00 con slice:
    let formattedSec = ("0" + sec).slice(-2);

    return console.log(`La hora actual es: ${formattedHour}:${formattedMin}:${formattedSec}`) + console.log(`Y los milisegundos transcurridos hoy: ${todayMS}`);
    
    // Sabemos que los milisegundos transcurridos en un día son igual a:
    // ((h * 3600) + (m * 60) + s) * 1000
    // es decir, que si dividimos el total de ms del día entre 1000, tendremos la cantidad total de segundos del día
    // luego, para saber la cantidad de horas, tomamos el total de segundos / 3600, y redondeamos hacia abajo
    // para los minutos, multiplicamos las horas por 3600, las restamos al total de segundos, y dividimos entre 60, redondeando hacia abajo
    // los segundos restantes será el resultados de restar la cantidad de horas * 3600 - la cantidad de minutos * 60
}

msClock();




// NOTA PERSONAL
// Procesos varios para conseguir estos dos resultados

/*
//Obtenemos la fecha y hora actual, asignada a una constante:
const todayTime = new Date();
console.log("Hoy es:", todayTime);

//Obtenemos los ms transcurridos hasta el día de hoy, a las 00:00:00 con el método "setHours"
//creamos una nueva variable para la hora actual a la que le aplicaremos setHours. 
//si lo hacemos a "todayTime", cambiaremos la variable, y eso no nos interesa
const todayTimeToReset = new Date()
console.log("Hoy2", todayTimeToReset);
//cómo funciona esto?
//

//Obtenemos los ms que han transcurrido hasta el momento actual con el método "valueOf" aplicado a la variable con la hora actual
let valueDateToday = todayTime.valueOf();
console.log("valueDateToday", valueDateToday);

//restamos los milisegundos transcurridos menos los seteados a las 00:00:00
let todayMilisecs = valueDateToday - valueHoraCero;
console.log("this", todayMilisecs); 
console.log("this");
*/

/*
console.log("Reloj: ");
// fecha actual
let date = new Date();

// la hora en tu zona horaria actual
console.log( date.getHours() );

console.log( date.getMinutes() );

console.log( date.getSeconds() );
*/


/*
let today = new Date();
console.log(today);


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