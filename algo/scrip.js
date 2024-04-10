// Definir la temperatura actual en grados Celsius
var temperatura = 20; // Puedes cambiar este valor según la temperatura actual

// Función para mostrar un mensaje dependiendo de la temperatura
function mostrarMensajeTemperatura(temperatura) {
    if (temperatura < 0) {
        console.log("Hace frío");
    } else if (temperatura >= 0 && temperatura < 25) {
        console.log("La temperatura es agradable");
    } else {
        console.log("Hace calor");
    }
}

// Llamar a la función con la temperatura actual
mostrarMensajeTemperatura(temperatura);