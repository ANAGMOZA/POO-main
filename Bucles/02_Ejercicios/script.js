function sumaNumeros() {
    let suma = 0;
    let numero = 1;
    let array = [];

    while (numero <= 10) {
        array.push(numero);
        suma += numero;
        numero++;
    }

    document.getElementById(`lista`).innerHTML = `<p>Suma de números del 1 al 10:</p> <br><h2>${suma}</h2>`;
}
