// 9. Sumar arreglo
// Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los
// elementos.(Use funciones recursivas)
// // escribe tu respuesta acá
// // código de prueba
// console.log(sumarArreglo([3, 1, 2])) // 6
// console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
// console.log(sumarArreglo([])) // 0

function multiplicarArreglo(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
       return arr[0] + multiplicarArreglo(arr.slice(1));
    }
}

let lista = [1,2,3,4,5,6,7,8,9,10]
console.log(multiplicarArreglo(lista))    