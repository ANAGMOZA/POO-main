function sumaNumeros() {
    let suma = 0;
    let numero = 1;
    let array = [];
    let cadena = "";

    while (numero <= 10) {
        array.push(numero);
        suma += numero;
        cadena += numero + " + ";
        numero++;
    }

    cadena = cadena.slice(0, -3) + " = " + suma;

    document.getElementById(`lista`).innerHTML = `<p>Suma de números del 1 al 10:</p> <br><h2>${cadena}</h2>`;
    document.getElementById(`array`).innerHTML = `<p>Array de números:</p> <br><h2>${array}</h2>`;
}
