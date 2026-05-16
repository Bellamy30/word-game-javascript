lancerJeu ();












/**
 * Les commentaires qui suivent sont un exemple permettant de lever des exceptions et les afficher a partir d'un taleau.
 */

// let nombre1 = 0;
// let nombre2 = 3;
// const erreurs = [];

// function multiplier(a, b) {
//     if (a === 0) {
//         erreurs.push( new Error(`Your first number ${a} must be different of 0.`));
//     }
//     return a * b;
// }

// function division(a, b) {
//     if (b === 0) {
//         throw erreurs.push(new Error(`Your second number ${b} must be different of 0.`));
//     }
//     return a / b;
// }

// try {

//     console.log(multiplier(nombre1, nombre2) +"\n"+multiplier(2, 4) +"\n"+ division(nombre2, nombre1) +"\n"+ division(8, 2));
    
// } catch (error) {
//     //console.log("Une erreur a ete declenche: "+ error.message);
//     erreurs.forEach(error => console.log("Une erreur a ete declenche: "+ error.message));
// }

//console.log("Scrore = "+ score);
// if (choisirPhrasesOuMots() === "mots") {
//     console.log(motOuPhraseEntree);
//     console.log(listeMots);
// } else {
//     console.log(motOuPhraseEntree);
//     console.log(listePhrases);
// }

// let inputEcriture = document.getElementById("inputEcriture");
// let boutonValidation = document.getElementById("btnValiderMot");
// let zoneProposition = document.querySelector(".zoneProposition");
// //document.querySelector(".zoneScore").querySelector("span").textContent = 3;
// let zoneOption = document.querySelectorAll(".zoneOptions");

// console.log(inputEcriture +'\n'+ boutonValidation +'\n'+ zoneProposition +'\n'+ zoneOption);

// let optionSource = document.querySelectorAll("input[type=radio]");
// for(i = 0; i < optionSource.length; i++) {
//     console.log(optionSource[i]);
//     console.log(optionSource[i].checked);
//     console.log(optionSource[i].value);
// }

// for (let i = 0; i < optionSource.length; i++) {
//     optionSource[i].addEventListener("change", () => {
//         console.log(new Number(optionSource[i].value));
//     });
// }

