/*Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado*/



let precio = parseInt(prompt('¿Cuál es el precio de tu compra?'));
let cupon = prompt('Escribe el nombre de tu cupón:');


switch(cupon){
    case 'Bronce':
        alert('El precio original es de ' + precio + '. El precio total es de ' + precio*.95 + '.');
        break;
    case 'Plata':
        alert('El precio original es de ' + precio + '. El precio total es de ' + precio*.9 + '.');
        break;
    case 'Oro':
        alert('El precio original es de ' + precio + '. El precio total es de ' + precio*.85 + '.' );
        break;
    case 'Platino':
        alert('El precio original es de ' + precio + '. El precio total es de ' + precio*.8 + '.' );
        break;
    default:
        alert('Ese no es un cupón válido.');
        break;
}

