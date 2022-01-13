/*Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio.*/


let numeros = new Array();
numeros = [2, 4, 4, 22, 5, 53, 12, 1, 34, 8, 88, 6, 17, 43, 9, 56, 84, 32, 26, 47];

let suma = 0;

for (let i = 0; i < numeros.length; i++){
    suma += numeros[i];
}

document.write('La suma de los números es igual a ' + suma + '<br>');
document.write('El promedio es de ' + suma / numeros.length);