// 2. Calcular impuestos
// Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si
// edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo
// contrario retornar 0.

// // código de prueba
// console.log(calcularImpuestos(18, 1000)) // 400
// console.log(calcularImpuestos(40, 10000)) // 4000
// console.log(calcularImpuestos(17, 5000)) // 0
// console.log(calcularImpuestos(30, 500)) // 0

function calcularImpuestos (edad,ingresos) {
    if ((edad >= 18) && (ingresos >= 1000)){
        console.log(ingresos *0.4)
        return
    }
    else{
        console.log('0')
        return
    }
}
let edad = prompt('Ingrese su edad')
let ingresos = prompt('Ingrese sus ingresos')

calcularImpuestos(edad,ingresos)