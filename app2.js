// FUNCIONES REUTILIZABLES
function isValidColor(color) {
    // Expresión regular para verificar color en formato hexadecimal (#RGB, #RRGGBB)
    const hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;
  
    // Expresión regular para verificar color en formato RGB (rgb(255, 255, 255))
    const rgbPattern = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
  
    // Crear un elemento temporal para validar nombres de colores CSS
    const tempElement = document.createElement("div");
    tempElement.style.color = color;
  
    // Verificar si el color cumple con alguno de los patrones o es un nombre de color válido
    return (
      hexPattern.test(color) ||
      rgbPattern.test(color) ||
      tempElement.style.color !== ""
    );
  }

  
/**Variables que sirven para buscar elementos */
const inputColor=document.getElementById("input-color");
const btnChangeColor=document.getElementById("btn-change-color")

/**Creamos las funciones para nuestros ejercicios */


/** Para poder saber cuando el usuario hizo click en el botón
 * haremos lo siguiente
 * addEventListener("evento",function)
 */

btnChangeColor.addEventListener("click", function () {
    // Obtener el valor del input
    const color = inputColor.value;
  
    // VALIDAMOS SI EL COLOR EXISTE
    if (isValidColor(color)) {
      document.body.style.backgroundColor = color;
    } else {
      alert("El color no existe");
    }
  });
  