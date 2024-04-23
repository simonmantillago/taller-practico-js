// 10. Multiplicar arreglo
// Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de
// todos los elementos.

// // código de prueba
// console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
// console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
// console.log(multiplicarArreglo([])) // 1

function multiplicarArreglo(arr) {
    if (arr.length === 0) {
        return 1;
    } else {
       return arr[0] * multiplicarArreglo(arr.slice(1));
    }
}

let lista = [4, 1, 2, 3]
console.log(multiplicarArreglo(lista)) 