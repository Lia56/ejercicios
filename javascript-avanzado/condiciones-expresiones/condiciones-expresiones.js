/* Operadores Aritméticos */
// + - / * %  ()

let operacion = 3 * 5 + (10 - 5);
console.log(operacion);

let operacion2 = 3 - 5 / 2 * 4;
console.log(operacion2);

/* Operadores relacionales */
// <, >, >=, <=, ==, ===, !=, !==
//boolean true false

console.log(7 < 7);
console.log(7 <= 7);

console.log(7 == "7"); //true (== compara el valor, no el tipo de dato)
console.log(7 === "7"); //false

console.log(7 != "7"); //false
console.log(7 !== "7"); //true

/* Incremento y decremento */
// +=, -=, *=, /=

let incremento = 5;
incremento += 5; //incremento = incremento + 5
console.log(incremento);//10

incremento -= 5;
console.log(incremento); //5

incremento *= 5;
console.log(incremento); //25

incremento /= 5;
console.log(incremento); //25

/* Operador unario */
// ++, --
//sumar uno, restar uno

let sumar = 0;
console.log(sumar);//0
sumar++;
console.log(sumar);//1
sumar--;
console.log(sumar);//0

/*  */
for(let i = 0; i < 10; i++) {
    /* codigo */ 
}

/* ++variable = preincremento (primero modifica el valor y después hace uso de variable)
   variable++ = postincremento (usa la variable y después hace el incremento) */
let num = 5;
console.log(++num); //6

for (let i = 0; i < 5; i++) {
    //iteracion
    //primer iteración, se detiene
    console.log("Este es el ciclo padre")
    for (let j = 0; j < 5; j++) {
        //hace sus iteraciones propias
        console.log("Este es el ciclo hijo")
    }
}



