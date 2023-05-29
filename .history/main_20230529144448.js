

const boton = document.querySelector("#botonJugar");
// Agregar listener
boton.addEventListener("click", function () {
    let eleccionUsuario;
    const ppt = ["PIEDRA", "PAPEL", "TIJERA"];

    const random = Math.floor(Math.random() * ppt.length);
    console.log(random, ppt[random]);

    let eleccionMaquina = ppt[random];

    eleccionUsuario = prompt("ingrese piedra, papel o tijera");
    eleccionUsuario = eleccionUsuario.toUpperCase();
    console.log(eleccionUsuario.toUpperCase());

    switch (eleccionUsuario) {
        case "TIJERA": {
            if (eleccionUsuario == eleccionMaquina) {

                document.getElementById('resultanteEmpataste').innerHTML = "Empataste! la maquina eligió: " + eleccionMaquina;
            }
            else if (eleccionMaquina == "PIEDRA") {
                document.getElementById('resultantePerdiste').innerHTML = "Perdiste! la maquina eligió: " + eleccionMaquina;
            }
            else {
                document.getElementById('resultanteGanaste').innerHTML = "Ganaste! la maquina eligió: " + eleccionMaquina;
            }
        }
            break;

        case "PIEDRA":
            if (eleccionUsuario == eleccionMaquina) {

                document.getElementById('resultanteEmpataste').innerHTML = "Empataste! la maquina eligió: " + eleccionMaquina;

            }
            else if (eleccionMaquina == "PAPEL") {

                document.getElementById('resultantePerdiste').innerHTML="Perdiste! la maquina eligió: " + eleccionMaquina;
            }
            else {
                ddocument.getElementById('resultanteGanaste').innerHTML="Ganaste! la maquina eligió: " + eleccionMaquina;
            }
            break;

        case "PAPEL":
            if (eleccionUsuario == eleccionMaquina) {

                document.getElementById('resultanteEmpataste').innerHTML="Empataste! la maquina eligió: " + eleccionMaquina;
            }
            else if (eleccionMaquina == "TIJERA") {

                document.getElementById('resultantePerdiste').innerHTML="Perdiste! la maquina eligió: " + eleccionMaquina;
            }
            else {
                document.getElementById('resultanteGanaste').innerHTML= "Ganaste! la maquina eligió: " + eleccionMaquina;
            }
            break;
        default: document.getElementById('resultante').innerHTML="El valor ingresado no es valido";
    }
});

//console.log (eleccionUsuario)


/*let eleccionUsuario = prompt("ingrese piedra, papel o tijera");*/

/*const ppt = ["PIEDRA", "PAPEL", "TIJERA"];

const random = Math.floor(Math.random() * ppt.length);
console.log(random, ppt[random]);

let eleccionMaquina = ppt[random];*/




/*switch (eleccionUsuario) {
    case "TIJERA": {
        if (eleccionUsuario == eleccionMaquina) {

            document.write("Empataste! la maquina eligió: " + eleccionMaquina);
        }
        else if (eleccionMaquina == "PIEDRA") {
           document.write("Perdiste! la maquina eligió: " + eleccionMaquina);
        }
        else {
            document.write("Ganaste! la maquina eligió: " + eleccionMaquina);
        }
    }
    break;

    case "PIEDRA":
        if (eleccionUsuario == eleccionMaquina) {

            document.write("Empataste! la maquina eligió: " + eleccionMaquina);
        }
        else if (eleccionMaquina == "PAPEL") {

            document.write("Perdiste! la maquina eligió: " + eleccionMaquina);
        }
        else {
            document.write("Ganaste! la maquina eligió: " + eleccionMaquina);
        }
        break;

    case "PAPEL":
        if (eleccionUsuario == eleccionMaquina) {

            document.write("Empataste! la maquina eligió: " + eleccionMaquina);
        }
        else if (eleccionMaquina == "TIJERA") {

            document.write("Perdiste! la maquina eligió: " + eleccionMaquina);
        }
        else {
            document.write("Ganaste! la maquina eligió: " + eleccionMaquina);
        }
        break;
    default: document.write ("El valor ingresado no es valido");
}*/