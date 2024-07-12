function mostrarCalificacion() {
    let nota = prompt("Introduce tu nota:");
    
    if (nota === null) {
        return;
    }
    
    nota = parseFloat(nota);
    
    if (isNaN(nota)) {
        alert("Debes introducir un número válido para la nota.");
        mostrarCalificacion();
        return;
    }
    
    let calificacion = "";
    if (nota >= 0 && nota < 3) {
        calificacion = "Muy deficiente";
    } else if (nota >= 3 && nota < 5) {
        calificacion = "Insuficiente";
    } else if (nota >= 5 && nota < 6) {
        calificacion = "Suficiente";
    } else if (nota >= 6 && nota < 7) {
        calificacion = "Bien";
    } else if (nota >= 7 && nota < 9) {
        calificacion = "Notable";
    } else if (nota >= 9 && nota <= 10) {
        calificacion = "Sobresaliente";
    } else {
        alert("La nota debe estar entre 0 y 10.");
        mostrarCalificacion();
        return;
    }
    
    alert(`Tu calificación es: ${calificacion}`);
}
