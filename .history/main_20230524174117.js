/*alert("Hola Mundo!!");

console.log("Hola, estoy aqui");

document.write("esto se escribe en el documento");

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

console.log(typeof(numero)); // number 

numero = "hola 6"; // string 
console.log(typeof(numero)); // string

numero = parseInt(numero); // NaN
console.log(typeof(numero));

if ( (typeof(numero) == "number") && (numero != NaN) ){
    console.log("entra en el condicional: " + numero);
}else
{
    console.log("no entra en el condicional");
}


let diaString ="LUNES";

    switch (diaString) {

        case "Lunes":
        document.write("Es Lunes")
        break;

        case "Martes":
        document.write("Es Martes")
        break;

        case "Miercoles":
        document.write("Es Miércoles")
        break;
        
        case "Jueves":
        document.write("Es Jueves")
        break;

        case "Viernes":
        document.write("Es viernes")
        break;

        case "Sabado":
        case "Domingo":
        document.write("Es fin de semana")
        break;
        
        default:
        document.write("Ese día no existe");

    } 

    let variable = 7;
    let resultado = (variable > 8) ? "la variable es mayor a 8" : variable ; 
    console.log(resultado);

    // como pedirle al usuario que ingrese informacion con js  
    let eleccionMaquina = "TIJERA";
    let eleccionUsuario = prompt("ingrese piedra, papel o tijera");
    
    
     