/*alert("Hola Mundo!!");

/*console.log("Hola, estoy aqui");

document.write("esto se escribe en el documento");*/

// Variables

/*
string miNombre = "Gisele";
miNombre : string = "Milagros";

var miEdad = 34; // una variable de tipo global, su scope es global, y definiendo una variable y le asigno un valor 

var nombreForm = "" ;
var mailForm = "";
var comentarioForm = "";
var contrasenia = "";
var mi_apellido = "";// declarar una variable estoy creando la cajita,pero no le asigne ningun valor

console.log(nombreForm);

nombreForm = '';
nombreForm = 34;
console.log(nombreForm);

let miNombre ;
console.log(miNombre);

const pi = 3.1416;

let verdad = false; //

let numeroString= "5";
let numeroString2 = "10";

let suma = parseFloat(numeroString) + parseInt(numeroString2);
console.log(suma);

*/
/*
if (condicion1){
    if(condicion2){
        if(condicion3){
            if(condicion4){
                console.log("voy al cine");
            }
        }
    }
}

if ( ((llueve) && (tengo paraguas) && (tengo ganas) ) || (pasan rapido y furioso 10)    ){
    console.log("voy al cine");
} */

let numero = 6;
/*
if(numero === 4){
    console.log("es 4");
}

if (numero === 5){
    console.log("es 5");
}
console.log("pedro alfonso");
if(numero === 8){
    console.log("es 8");
}

if (numero === 6){
    console.log("es 6");
}

if( numero !== 6 ){
    console.log("es diferente de 6, el numero es:" + numero);

}else
{
    console.log("es igual a 6");
}

if (numero !==0) {
    console.log("es diferente de 0, el numero es:" + numero);
}
*/


    // como pedirle al usuario que ingrese informacion con js  
  
    let eleccionUsuario = prompt("ingrese piedra, papel o tijera");
    
    const ppt = ["PIEDRA","PAPEL","TIJERA"];
  
    const random = Math.floor(Math.random() * ppt.length);
    console.log(random, ppt[random]);

    let eleccionMaquina = ppt[random];

if (eleccionUsuario==eleccionMaquina) {

}
document.write ("Ganaste! la maquina eligio ganar"):