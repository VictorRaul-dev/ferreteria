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
        // Crear un elemento HTML desde JS con createElement
        const newDiv = document.createElement("div");
        newDiv.style.width = "100px";
        newDiv.style.height = "100px";
        newDiv.style.backgroundColor = generarColorHex();

        // Para que este newDiv aparezca, lo agregamos al body o al main
        document.querySelector("main").appendChild(newDiv);

        counter++;
    }
}
