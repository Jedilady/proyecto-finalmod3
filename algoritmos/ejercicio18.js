// 18 - Crear un programa que transforme una frase en "notación hacker" (leet speak).

//para solucionar este ejercicio, podemos crear un objeto que contenga las alternativas a cada letra en l337 

const check = "The quick brown fox jumps over the lazy dog";

const leetObject = {
    "a": 4,
    "b": 8,
    "l": 1,
    "s": 5,
    "t": 7,
    "z": 2,
    "o": 0,
    "e": 3,
    "g": 9,
    "q": "k",
    "h": "#"
}

console.log("Este es nuestro string a traducir: \n", check);

console.log("y estas son las equivalencias: \n", leetObject);


function leetSpeakForOf(phrase) {

    let phraseToCheck = phrase.toLowerCase();

    let newString = "";
    
    for (const element of phraseToCheck){
        //console.log(element);
        //console.log(leetObject[element]);
        //console.log(leetObject[key]);

        if (leetObject[element] !== undefined || element === leetObject[element]) {
            newString += leetObject[element]
        } 
        else {
            newString += element
        } 

        //console.log(newString);

    }

    return console.log("Solución con 'For...of': \n", newString);
}

leetSpeakForOf(check);


//Arroja un undefined al final que no sé de dónde sale

function leetSpeakWhile(phrase) {
    let phraseToCheck = phrase.toLowerCase();

    let newString = "";

    let i = 0;
    //console.log(phraseToCheck.length);
    
        while(i < phraseToCheck.length) {
        
            let letra = phraseToCheck[i]
        
        if (leetObject[letra] !== undefined) {
            newString+= leetObject[letra];
        } else {
            newString+= letra;
        }
        //console.log(letra, leetObject[letra]);
        i++
    }

    return console.log("Solución con 'while': \n", newString);

}

leetSpeakWhile(check);


//Alternativa encontrada investigando en red:
/*
for (const element of palabra) {
    newString += leetObject[element] ?? element;
}
    */