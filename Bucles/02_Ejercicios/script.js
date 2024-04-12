function sumaNumeros(){
    let sum = 0;
    let i = 1;
    let sumaParcial = "";
    
    while (i <= 10) {
        sum += i;
        if (i < 10) {
            sumaParcial += i + " + ";
        } else {
            sumaParcial += i;
        }
        i++;
    }
    
    document.getElementById(`lista`).innerHTML = `<p>Suma de números del 1 al 10:</p> <br><h2>${sumaParcial} = ${sum}</h2>`;
}