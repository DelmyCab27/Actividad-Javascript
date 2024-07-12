function verificarEdadConducir() {
    const edad = prompt("Introduce tu edad:");

    // Convertir edad a número
    const edadNumero = parseInt(edad);

    if (isNaN(edadNumero) || edad === null || edad === "") {
        alert("Por favor, introduce un número válido.");
    } else if (edadNumero < 0 || edadNumero > 99) {
        alert("Por favor, introduce una edad razonable (entre 0 y 99 años).");
    } else if (edadNumero >= 18 && edadNumero <= 99) {
        alert("Ya puedes conducir.");
    } else {
        alert("Aún no puedes conducir.");
    }
}
