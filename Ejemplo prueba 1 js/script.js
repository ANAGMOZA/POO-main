/* Recibir un array numerico con numeros negativos y positivos. todos los valores negativos reemplazarlos por 0 */
function noNegative(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }    
    }
    return arr;
};

let array =[-2,-4,5,6,10,-20]
alert(noNegative(array));