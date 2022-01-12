let nombre = document.getElementById('nombre');


function getName(){
   let nuevoNombre = prompt('¿Cuál es tu nombre?');
   nombre.textContent = 'Hola, ' + nuevoNombre;
}

