/* Función: bloque de código reutilizable.
Puede tener o no parámetros de entrada.
Puede devolver o no un valor
*/

function sumar(numero1, numero2){
    //Operaciones o código a ejecutar
    return numero1 + numero2; //return devuleve un valor, debe ser la última parte de la función
    
}

function restar(numero1, numero2) {
    document.write(`La resta de ${numero1} y ${numero2} es ${numero1 - numero2}. <br>`);
}

let numero1 = parseInt(prompt('Número 1'));
let numero2 = parseInt(prompt('Número 2'));
let suma = sumar(numero1, numero2);

restar(numero1, numero2);

document.write(`La suma de ${numero1} y ${numero2} es ${suma}. <br>`); //se deben utilizar comillas inveridas (se conoce como 'template string'). Se usa ${variable} para hacer referencia a código js

//se puede también escribir de la siguiente manera:

document.write('La suma de ' + numero1 + ' y ' + numero2 + ' es ' + suma + '.');




 