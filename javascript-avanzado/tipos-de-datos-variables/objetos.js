/*let miObjeto = {
    // pares de clave valor
    nombre: 'Lia Lovatto'
}*/

let nombre = 'Lia Lovatto';
let edad = 31;
let direccion = 'Cedro 36, Real del Bosque';
let numero = 3455332343;

console.log(nombre);

let persona = {
    nombre: 'Lia Lovatto',
    edad: 28,
    dirección: { //objeto dentro del objeto
        ciudad: 'Santiago de Queretaro',
        estado: 'Queretaro'
    },
    número: [ //se usan corchetes porque es un arreglo
        5438876783,
        7667366377
    ]
    };

    // arreglos vs objetos
    // almacenar información
    arreglo = ['valor1', 'valor2', 'valor3'];
    arreglo[1];

    let otroObjeto ={
        nombre: 'Carmen',
        apellidos: 'Rodriguez'
    }
    otroObjeto.nombre;

console.log(persona);
console.log(persona.edad); //para ver solo un dato del objeto
numero[1];

let collarMascota ={
    animal: 'perro',
    color: 'azul',
    raza: 'labrador',
    talla: ['xs', 's', 'm', 'l', 'xl' ],
    material: 'piel sintética',
    medidas: {
        largo: '93cm',
        alto:'52cm'
    }
}

console.log(collarMascota);
console.log(collarMascota.talla[1]);
console.log(collarMascota.medidas.alto);