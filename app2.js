// FUNCIONES REUTILIZABLES

// Función para verificar si un color es válido (en formato hexadecimal, RGB, o nombre de color CSS)
function isValidColor(color) {
  // Expresión regular para verificar color en formato hexadecimal (#RGB, #RRGGBB)
  const hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;

  // Expresión regular para verificar color en formato RGB (rgb(255, 255, 255))
  const rgbPattern = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;

  // Crear un elemento temporal para validar nombres de colores CSS
  const tempElement = document.createElement("div");
  tempElement.style.color = color;

  // Verificar si el color cumple con alguno de los patrones o es un nombre de color CSS
  return (
    hexPattern.test(color) ||
    rgbPattern.test(color) ||
    tempElement.style.color !== ""
  );
}

// RECUERDEN SER ORDENADOS

/**
 * VARIABLES QUE SIRVEN PARA BUSCAR ELEMENTOS DEL DOM
 */
const inputColor = document.getElementById("input-color"); // Input para el color ingresado por el usuario
const btnChangeColor = document.getElementById("btn-change-color"); // Botón para cambiar el color de fondo

const inputRegisterBrothers = document.getElementById("input-register-brothers"); // Input para la cantidad de hermanos
const brothersContainer = document.getElementById("brothers-container"); // Contenedor para los elementos de los hermanos

const gameArea = document.getElementById("game-area"); // Área para mostrar los nombres ingresados

/**
 * CREAMOS LAS FUNCIONES PARA NUESTROS EJERCICIOS
 */

// Agregar un evento al botón para cambiar el color de fondo cuando se hace clic
btnChangeColor.addEventListener("click", function () {
  // Obtener el valor del input
  const color = inputColor.value;
  // VALIDAMOS SI EL COLOR EXISTE
  if (isValidColor(color)) {
    // Si el color es válido, cambiar el color de fondo del documento
    document.body.style.backgroundColor = color;
  } else {
    // Si el color no es válido, mostrar una alerta
    alert("El color no existe");
  }
});

// Función para registrar y mostrar los nombres de los hermanos
function registerBrothers() {
  // Obtener la cantidad de hermanos del input
  const brotherQuantity = Number(inputRegisterBrothers.value);

  // Array para almacenar los nombres de los hermanos (no se usa en la lógica actual)
  const brothers = [];

  // Contador para iterar
  let counter = 0;

  // Bucle para crear inputs de nombre de hermanos
  while (counter < brotherQuantity) {
    // Crear un nuevo elemento div
    const newDiv = document.createElement("div"); // <div></div>
    
    // Crear un nuevo elemento input
    const newInput = document.createElement("input"); // <input />
    newInput.placeholder = "Ingresa el nombre de tu hermano " + counter; // Agregar placeholder
    newInput.type = "text"; // Definir el tipo de input como texto
    newInput.id = "input-name-" + counter; // Asignar un ID único
    newInput.classList.add("input-brother-name"); // Añadir clase para búsqueda posterior

    // Agregar el input al div
    newDiv.appendChild(newInput); // <div> <input /> </div>

    // Agregar el div al contenedor de hermanos
    brothersContainer.appendChild(newDiv);

    // Incrementar el contador
    counter++;
  }

    // AGREGAMOS UN BOTÓN PARA IMPRIMIR LA LISTA DE HERMANOS
    const newButton = document.createElement("button"); // Crear un botón
    newButton.textContent = "Imprimir nombres"; // Definir el texto del botón
  
    // Agregar un evento al botón para imprimir los nombres ingresados
    newButton.addEventListener("click", function () {
      // Buscar todos los elementos con la clase .input-brother-name
      const inputs = document.querySelectorAll(".input-brother-name");
      
      // Recorrer la lista de inputs y mostrar los valores
      for (let input of inputs) {
        const newP = document.createElement("p"); // Crear un elemento <p>
        newP.textContent = input.value; // Asignar el valor del input al texto del <p>
  
        // Agregar el <p> al área de juego
        gameArea.appendChild(newP);
      }
    });
  
    // Agregar el botón al contenedor de hermanos
    brothersContainer.appendChild(newButton);
  
    // Imprimir en consola el array de hermanos (actualmente vacío)
    console.log(brothers);
  }
  
  function generarColorHex() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

  function generateBlocks() {
    const blocksNumber = Number(
      prompt("Ingrese la cantidad de bloques que desea dibujar")
    );
  
    let counter = 0;
  
    while (counter < blocksNumber) {
      // Para poder crear un elemento HTML desde JS podemos la funcion createElement
      const newDiv = document.createElement("div"); // <div></div>
      newDiv.style.width = "100px";
      newDiv.style.height = "100px";
      newDiv.style.backgroundColor = generarColorHex();
      // para que este newDiv aparezca debo agregarlo en el body
      // document.body.appendChild(newDiv);
      // buscando a la etiqueta main
      document.querySelector("main").appendChild(newDiv);
      counter++;
    }
  }


  function getRandomChoice() {
    const choices = ["piedra", "papel", "tijera"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function yanQuenPo() {
    // Pide al usuario que elija entre "piedra", "papel" o "tijera"
    const userChoice = prompt("Elige: piedra, papel o tijera").toLowerCase();
    const validChoices = ["piedra", "papel", "tijera"];
  
    // Verifica si la elección del usuario es válida
    if (!validChoices.includes(userChoice)) {
      alert("Opción no válida. Por favor, elige entre 'piedra', 'papel' o 'tijera'.");
      return;
    }
  
    // Genera la elección de la computadora
    const computerChoice = getRandomChoice();
    console.log(`Computadora eligió: ${computerChoice}`);
  
    // Determina el resultado
    if (userChoice === computerChoice) {
      alert("Empate. Ambos eligieron " + userChoice + ".");
    } else if (
      (userChoice === "piedra" && computerChoice === "tijera") ||
      (userChoice === "tijera" && computerChoice === "papel") ||
      (userChoice === "papel" && computerChoice === "piedra")
    ) {
      alert("¡Ganaste! " + userChoice + " vence a " + computerChoice + ".");
    } else {
      alert("Perdiste. " + computerChoice + " vence a " + userChoice + ".");
    }
  }
  
  // Evento para el botón de "Yan Quen Po"
  document.getElementById("btn-yanquenpo").addEventListener("click", yanQuenPo);
  
