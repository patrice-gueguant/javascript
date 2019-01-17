console.log("Chargement ok.");
/*
 * function nom_de_la_fonction([params]){
 *      traitements
 * }
 */

/*
 * function nom_fct(param){
 *      traitements
 * }
 */

/*
 * function nom_fonction(param1, param2,...,pamaN){
 *      traitements
 * }
 */
function hello(){
    console.log("Hello tout le monde!!");
}

hello();// hello tout le monde!
hello();// hello tout le monde!

double(12); // 24
function double(nombre){
    console.log(nombre * 2);
}
double("hello"); // NaN
double(15);// 30
double(25 * 2); // 100

function bonjour(nom){
    console.log("Bonjour Mme/Mr : " + nom);
}

bonjour("azerty"); // Bonjour Mme/Mr azerty

function addition(nombre1, nombre2){
    return nombre1 + nombre2;
}

let resultatAdd = addition(38,22);

console.log(resultatAdd)// 60

function multiplication(nb1, nb2){
    return nb1 * nb2;
}
let resultatMult = multiplication(10, 2);
console.log(resultatMult);


function concatNames(nom, prenom){
    return nom + " " + prenom;
}

let nomPrenom = concatNames("Jack", "James");
console.log(nomPrenom);

function nombreSupA20(nombre){
    if(nombre > 20){
        return true;
    } else {
        return false;
    }
}
let vraiOuFaux = nombreSupA20(21);
console.log("VraiOuFaux: " + vraiOuFaux);

function salut(){
    console.log("Salut");
}
let s = salut();
console.log(s); // undefined