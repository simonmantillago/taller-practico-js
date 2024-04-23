// 8. Número de aes (letra "a")
// Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la
// letra "a":

// // código de prueba
// console.log(numeroDeAes("abracadabra")) // 5
// console.log(numeroDeAes("etinol")) // 0
// console.log(numeroDeAes("")) // 0


function numeroDeAes(palabra){
    AsCount = 0
    palabra.forEach(element => {
        if ((element === 'a')||(element==='A')){
            AsCount+=1
        }
    });
    console.log(AsCount)
}

let palabra = prompt('Ingrese la palabra')
let arregloDeCaracteres = palabra.split('')

numeroDeAes(arregloDeCaracteres)