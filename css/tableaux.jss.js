console.log("OK")

let voitures = [
    "ASTRA", // 0
    "C3", // 1
    "GOLF", // 2
    "CORSA", // 3
    "MEGANE", // 4
    12, // 5
    true // 6
];

console.log(
    "1ère voiture: " + voitures[0]);
console.log(
    "2ème voiture: " + voitures[1]);
console.log(
    "3ème voiture: " + voitures[2]);
console.log(
    "4ème voiture: " + voitures[3]);
console.log(
    "5ème voiture: " + voitures[4]);
console.log(
    "6ème voiture: " + voitures[5]);
console.log(
    "7ème voiture: " + voitures[6]);

console.log(voitures);

console.log(voitures.length);

for (let i = 0; i < voitures.length ; i++) {
    console.log(
        "à l'indice "
        + i
        + " se trouve "
        + voitures[i]);
}

console.log(voitures[100]);

voitures[6] = "FORD";
voitures[5] = "RAV4";
for (let i = 0; i < voitures.length ; i++) {
    console.log(
        "à l'indice "
        + i
        + " se trouve "
        + voitures[i]);
}


voitures[7] = "500X";
for (let i = 0; i < voitures.length ; i++) {
    console.log(
        "à l'indice "
        + i
        + " se trouve "
        + voitures[i]);
}

voitures[30] = "SERIE 1";
console.log("====================");
console.log("Ajout de la voiture à l'indice 30");
for (let i = 0; i < voitures.length ; i++) {
    console.log(
        "à l'indice "
        + i
        + " se trouve "
        + voitures[i]);
}

console.log("======================");
console.log(voitures.length);

// Ajouter à la fin du tableau
voitures.push("CLASSE C");
voitures.push("A3");
console.log(voitures);

// Ajouter au début du tableau
voitures.unshift("QASHQAI2");
console.log(voitures);

// Supprimer le premier élément
voitures.shift();
console.log(voitures);

// Supprimer le dernier élément
voitures.pop();
console.log(voitures);

et tabNombresPremiers =
    [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79,
        83, 89, 97 ];


Afficher la somme des nombres premiers
