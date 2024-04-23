function contrasenaValida (contra){
    if ((contra === "2Fj(jjbFsuj") || (contra === "eoZiugBf&g9")){
        return true
    }
    else{
        return false
    }
}

let constraseña = prompt('Ingrese su contraseña')

console.log(contrasenaValida(constraseña))