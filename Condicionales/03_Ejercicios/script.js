function IdentificadorUsuario(){

    
let nombreUsuario = "usuario123";
let contraseña = "secreto";

let userInputUsername = prompt("Introduzca su nombre de usuario:");
let userInputPassword = prompt("Introduzca su contraseña:");

if (userInputUsername === nombreUsuario && userInputPassword === contraseña) {
  alert("Acceso concedido");
} else {
  alert("Acceso denegado");
}
}
