function changeBackgroundColor(){
    const backgroundColor= prompt("Ingres un color de fondo para la web");

    document.body.style.backgroundColor=backgroundColor;
}

//changeBackgroundColor();

function registerBrothers(){
    //PASO 1: Debemos saber la cantida de hermanos
    const brotherQuantity=Number(prompt("Ingrese la cantidad de hermanos:"));
    // PASO 2: Creamos un arreglo vacio donde vamos agregar los nombres de los hermanos
    const brothers=[];

    // Paso 3: Crear una variable counter para ir contando la cantidad de veces que ejecutamos el while
    let counter=0;
    // Paso 4: Creamos un while usando la condición de counter < brotherQuantity
    while(counter<brotherQuantity){
        //Paso 5: Preguntamos al usuario el nombre del hermano
        const brotherName=prompt("Ingresa el nombre de tu hermano "+counter);
        //Paso 6: Agregamos el nombre del hermano al arreglo de nombres
        brothers.push(brotherName);
        // Paso 7: Aumentamos en 1  counter
        counter++;
    }
    //Paso 8: Mostramos en consola el valor del arreglo de hermanos
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
  
