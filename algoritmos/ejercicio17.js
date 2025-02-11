// 17 - Crear un algoritmo que valide si un string tiene paréntesis balanceados.

//recorremos el string, y por cada "(" sumamos 1 y ")" restamos 1 a una variable
//al final, la cuenta de la variable debe dar 0. pero si en algún momento llega a ser -1, 

let parentesis = prompt("Agrega paréntesis, y te digo si están balanceados");

function parentesisBalanceados(string) {
    let cuenta = 0;

    for(let char of string){
        if (char === "(") {
            cuenta+=1
        }
        if (char === ")") {
            cuenta-=1
        }
        if (cuenta < 0) {
            return alert("Los paréntesis no están balanceados")
        }
    }

    if (cuenta === 0) {
        return alert("Los paréntesis están balanceados")
    } else {
        return alert("los paréntesis no están balanceados")
    }
}

parentesisBalanceados(parentesis)


