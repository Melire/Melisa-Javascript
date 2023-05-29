/*let eleccionUsuario

const boton = document.querySelector("#botonJugar");
// Agregar listener
boton.addEventListener("click", function(evento){
	 eleccionUsuario = prompt("ingrese piedra, papel o tijera");
});

console.log (eleccionUsuario)

*/
let eleccionUsuario = prompt("ingrese piedra, papel o tijera");

const ppt = ["PIEDRA", "PAPEL", "TIJERA"];

const random = Math.floor(Math.random() * ppt.length);
console.log(random, ppt[random]);

let eleccionMaquina = ppt[random];

eleccionUsuario = eleccionUsuario.toUpperCase();
console.log(eleccionUsuario.toString());


switch (eleccionUsuario) {
    case "TIJERA": {
        if (eleccionUsuario == eleccionMaquina) {

            document.write("Empataste! la maquina eligió: " + eleccionMaquina);
        }
        else if (eleccionMaquina == "PIEDRA") {
            document.getElementById('resultante')=eleccionMaquina
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
}