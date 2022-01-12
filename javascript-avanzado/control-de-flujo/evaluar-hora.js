/*Buenos dias 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5*/


let hora = prompt('¿Qué hora es?');
 
if(hora >= 6 && hora <= 11) {
    alert('Buenos días');
}else if(hora >= 12 && hora <= 18) {
    alert('Buenas tardes');
}else if(hora >= 19 && hora <= 23) {
    alert('Buenas noches');
}else if(hora >= 0 && hora <= 5){
    alert('Déjame dormir');
} else {
    alert('Lo siento, esa no es una hora válida.')
}
   



    



