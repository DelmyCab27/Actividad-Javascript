function calcularLetraDNI() {
    let continuar = true;
    
    while (continuar) {
        let dni = prompt("Introduce tu número de DNI:");
        
        if (dni === null) {
            continuar = false;
        } else {
            dni = parseInt(dni);
            
            if (isNaN(dni) || dni < 0 || dni > 99999999) {
                alert("Debe introducir un número de DNI válido (entre 0 y 99999999).");
            } else {
                let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
                let resto = dni % 23;
                let letra = letras.charAt(resto);
                alert(`La letra correspondiente a tu DNI ${dni} es: ${letra}`);
            }
        }
    }
}
