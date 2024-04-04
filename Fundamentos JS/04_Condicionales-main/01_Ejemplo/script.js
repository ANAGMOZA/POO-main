
function identificarMayorEdad()
{
    //identificar si es mayot o menor de edad
    let edad = prompt("por favor ingrese su Edad: ");
    if(edad >= 18){
        alert(`Es mayor de Edad - tiene: ${edad} `);
    } else{
        alert(`Es menor de Edad - tiene: ${edad}`);
    }
    
} 