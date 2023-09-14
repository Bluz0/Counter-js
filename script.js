
//let nb_stud = 25;
//nb_stud += 1;

//document.getElementById("p1").innerHTML = "Donc tu es " + nom; recupere un element depuis html et l'affiche

// let username = window.prompt("Wesh t'es qui ?"); 

/* Clique bouton pour envoie nom
let username;
document.getElementById("sub").onclick = function(){

    username = document.getElementById("user").value;
    console.log(username);

}

*/

// TYPE :
// si tu passe dans le window prompt == str
// Donc stv passer de str à int : exp : Number(age);
// Inversement : exp : String(age);
// Pour les booléen : Boolean(age); 
// Connaitre le type : console.log(age , typeof age);

/*
let age = 21;
age = Boolean(age);
console.log(age , typeof age);
*/

/*
CONSTANTE

const PI = 3.14159;
let rayon;
let perimetre;

rayon = window.prompt("Entre le rayon de ton cercle amigo ! : ");
rayon = Number(rayon);


perimetre = 2*PI*rayon;

console.log("Le perimetre est de",perimetre);

let variable = ... : peut etre modifié
alors que const VARIABLE = ... non
*/


//MATHS
// x = Math.round(x); arrondi
//x = Math.floor(x); arrondi en bas
//x = Math.ceil(x);arrondi au plus haut 
// x = Math.sqrt(x); racine de x
// x = Math.max( 1,2,3)
// idem pour min
//x = Math.abs(x);

let n = 0;

document.getElementById("Compteur").innerHTML = n;

document.getElementById("moins").onclick = function(){

    n -= 1;
    document.getElementById("Compteur").innerHTML = n;

}

document.getElementById("restart").onclick = function(){

    n = 0;
    document.getElementById("Compteur").innerHTML = n;

}

document.getElementById("plus").onclick = function(){

    n += 1;
    document.getElementById("Compteur").innerHTML = n;

}

