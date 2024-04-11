// Obtener la referencia al elemento ul en el HTML
const numerosLista = document.getElementById('numeros-lista');

// Inicializar el contador en 0
let contador = 0;

// Mientras el contador sea menor o igual que 100
while (contador <= 100) {
    // Crear un nuevo elemento de lista li
    const nuevoElemento = document.createElement('li');
    // Establecer el texto del elemento li como el valor actual del contador
    nuevoElemento.textContent = contador;
    // Agregar el elemento li a la lista ul
    numerosLista.appendChild(nuevoElemento);
    // Incrementar el contador en 5 para mostrar los números de 5 en 5
    contador += 5;
}