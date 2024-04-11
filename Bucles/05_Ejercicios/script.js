function encontrarNumerosPares() {
    let n = prompt("Ingrese la cantidad de números pares a encontrar");
    let numerosPares = [];
    for (let numeros = 0; numerosPares.length < n; numeros++) {
    if (numeros % 2 === 0) {
        numerosPares.push(numeros);
    }
    }
    document.getElementById('lista').innerHTML = `<p>Los primeros ${n} números pares son:</p> <br><h2>${numerosPares}</h2>`;
}