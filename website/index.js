// Alerte coucou
// alert("Salut !");

//  Console Log
console.log("Welcome in this javascript test :)");

// Utilisation de variables
// Fonction pour dynamisé le nom d'utilisateur
const setPseudo = () => {
    let pseudo = "3thernity";
    console.log(pseudo);
    document.getElementById("pseudo").innerText = pseudo;
};

setPseudo([]);
// Utilisation typeof
const toto = 1;
console.log(typeof toto);

// Object
let personne = {
    pseudo: "3thernity",
    age: 20,
};

console.log(personne);
console.log(typeof personne);

personne.pseudo = "TroisThernity";
console.log(personne);
// Fonction pour dynamisé l'object personne



// Structure Conditionnel
const checkAge = () => {
    if (personne.age < 18) {
        console.log("Vous n'avez pas l'âge requis pour acceder à ce site");
    } else {
        console.log("Bonne visite !");
    }
};

checkAge();
