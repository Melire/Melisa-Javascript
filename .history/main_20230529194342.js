

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
    document.getElementById('resultantePerdiste').innerHTML="";
    document.getElementById('resultanteGanaste').innerHTML="";
    document.getElementById('resultanteEmpataste').innerHTML="";
    switch (eleccionUsuario) {
        case "TIJERA": {
            if (eleccionUsuario == eleccionMaquina) {

                document.getElementById('resultanteEmpataste').innerHTML = "Empataste! la máquina eligió: " + eleccionMaquina;
            }
            else if (eleccionMaquina == "PIEDRA") {
                document.getElementById('resultantePerdiste').innerHTML = "Perdiste! la máquina eligió: " + eleccionMaquina;
            }
            else {
                document.getElementById('resultanteGanaste').innerHTML = "Ganaste! la máquina eligió: " + eleccionMaquina;
            }
        }
            break;

        case "PIEDRA":
            if (eleccionUsuario == eleccionMaquina) {

                document.getElementById('resultanteEmpataste').innerHTML = "Empataste! la máquina eligió: " + eleccionMaquina;

            }
            else if (eleccionMaquina == "PAPEL") {

                document.getElementById('resultantePerdiste').innerHTML="Perdiste! la máquina eligió: " + eleccionMaquina;
            }
            else {
                document.getElementById('resultanteGanaste').innerHTML="Ganaste! la máquina eligió: " + eleccionMaquina;
            }
            break;

        case "PAPEL":
            if (eleccionUsuario == eleccionMaquina) {

                document.getElementById('resultanteEmpataste').innerHTML="Empataste! la máquina eligió: " + eleccionMaquina;
            }
            else if (eleccionMaquina == "TIJERA") {

                document.getElementById('resultantePerdiste').innerHTML="Perdiste! la máquina eligió: " + eleccionMaquina;
            }
            else {
                document.getElementById('resultanteGanaste').innerHTML= "Ganaste! la máquina eligió: " + eleccionMaquina;
            }
            break;
        default: document.getElementById('resultantePerdiste').innerHTML="El valor ingresado no es valido";
    }
});