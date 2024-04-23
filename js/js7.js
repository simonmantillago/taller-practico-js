// 7. Sumar rango de números
// Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función
// debe retornar la suma de los números en ese rango (incluyéndolos).
// Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

// // código de prueba
// console.log(sumarRango(0, 10)) // 55
// console.log(sumarRango(12, 14)) // 39
// console.log(sumarRango(5, 5)) // 0

function sumarRango(num1,num2){
    let count = 0;
    for (let i = num1; i <= num2; i++) {
        count+=i;
    }
    return count;   
}

let num1 = parseInt(prompt('Ingrese el primer numero'))
let num2 = parseInt(prompt('Ingrese el segundo numero'))

console.log(sumarRango(num1,num2))