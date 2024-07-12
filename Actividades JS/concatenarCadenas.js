function concatenarCadenas() {
    let cadenaConcatenada = "";
    let continuar = true;
    
    while (continuar) {
        let cadena = prompt("Introduce una cadena (o pulsa cancelar para salir):");
        
        if (cadena === null) {
            continuar = false;
        } else {
            cadenaConcatenada += cadena + "-";
        }
    }
    
    if (cadenaConcatenada.length > 0) {
        cadenaConcatenada = cadenaConcatenada.slice(0, -1);
    }
    
    alert(`Cadenas concatenadas: ${cadenaConcatenada}`);
}
