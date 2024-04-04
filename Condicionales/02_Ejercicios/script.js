console.log(vinculo)

function agregarNumeros()
{
    let resultado =""
    let num1 = prompt("agregue el primer numero")
    let num2 = prompt("agregue el segundo numero")
    if(num1 > num2){
        resultado = ` el primer numero es mayor: ${num1} - el segundo es menor: ${num2}`
    }else{
        resultado = ` el segundo numero es mayor: ${num2} - el primero es menor: ${num1}`
    }
    document.getElementById(`lista`).innerHTML = resultado;
}