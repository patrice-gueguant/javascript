console.log('OK');
let tableau = [
    "GOOGLE",
    "AMAZON",
    "FACEBOOK",
    "APPLE",
    "MICROSOFT"
];

tableau[10] = "IBM";
for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === undefined) {
        console.log("Variable vide");
    } else {
        console.log(tableau[i]);
    }
}

tableau[0] = "ALPHABET";
console.log(tableau);

tableau.splice(0,1, "c'est GOOGLE");
console.log(tableau);

tableau.splice(0,2, "GOOMAZON");

console.log(tableau);

tableau.splice(0,0, "COUCOU");
console.log(tableau);

tableau[10] = undefined;
delete tableau[10]; // tableau[10] = undefined;

console.log(tableau);

tableau[10] = "IBM";
console.log(tableau);
tableau.splice(5,6);
console.log(tableau);

let variableVide  ;
if(variableVide !== undefined){
    console.log(variableVide);
}else{
    console.log(typeof variableVide);
}
if(typeof variableVide === "undefined"){
    console.log("La variable est vide!!!!!");
}

/*
 * création d'un tableau
 * let nom_tableau = [valeurs];
 *
 * modifier une valeur dans un tableau
 *      nom_tableau[indice] = nouvelle_valeur;
 *      nom_tableau.splice(indice, nombre_elements, nouvelle_valeur);
 * Ajouter une valeur à la fin
 *      nom_tableau.push(valeur);
 *
 * Ajouter une valeur au début
 *      nom_tableau.unshift(valeur);
 *
 * Supprimer une valeur (dernier élément du tableau)
 *      nom_tableau.pop();
 *
 * Supprimer une valeur (1ier élément)
 *      nom_tableau.shift();
 *
 * Supprimer un élémént
 *      delete(nom_tableau[indice]);
 *
 *  Taille d'un tableau
 *      nom_tableau.length
 *
 * Remplacer un ou plusieurs éléments
 *      nom_tableau.splice(indice, nombre_element, nouvelle_valeur);
 *
 * Supprimer un ou plusieurs éléments
 *      nom_tableau.splice(indice, nombre_elements);
 *
 * Transformer une chaine de caractères en tableaux
 *      let tab = nom_tableau.split(chaine);
 */