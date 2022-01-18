// las variables que se conectan al DOM llevan por delante un $

// let $title = document.getElementById("title");
// title.textContent = 'Titulo escrito desde JS';


//getElementbyId devuelve elementos
// getElementbyClassName, byName and byTagName devuelven arreglos

// querySelector
// document.querySelector('.className')
// document.querySelector('#id')
// document.querySelector('tag')

let $title = document.querySelector('#title');
$title.textContent = 'Titulo escrito desde JS';

let $paragraph = document.querySelector('p');
console.log($paragraph.textContent);

// querySelectorAll seleccionna todos los elementos que comparten la misma etiqueta
let $paragraphs = document.querySelectorAll('p');
// forma para acceder a la información que almacena el arreglo
console.log($paragraphs[1].textContent);

// Crear elementos HTML desde JS
// Este elemento no estará insertado en el HTML doc, solo estará en memoria
// Esto nos da la habilidad de modificarlo antes de insertarlo en el DOM

// Lo creamos
let subtitle = document.createElement('h3');

// Lo modificamos
subtitle.textContent = 'Este es un subtítulo desde JS';

// Lo insertamos
// document nos permite acceder a la página web
// .body nos lleva a esa parte del documento
// .append() inserta el elemento al final del documento
$title.insertAdjacentElement("beforebegin",subtitle);
$title.remove();

let $contenido = document.querySelector('#contenido');
//console.log($contenido.textContent) = '<br>';
//console.log($contenido.innerHTML = '<br>');
//console.log($contenido.outerHTML = 'Hola');
let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo';
$contenido.appendChild(contenidoParrafo);

