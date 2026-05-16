console.log("Hello Word!");

// let motUtilisateur = prompt("Entrez un mot: ");
// console.log(motUtilisateur);

/*const motApplication ="Bonjour";

let motUtilisateur = prompt("Entrez le mot: "+ motApplication);

if (motApplication === motUtilisateur) {
    console.log("Bien jouee !");
}else{
    console.log("Erreur de frappe.");
}

console.log(motUtilisateur);*/

// function retournerMessageDeFin(score, nombreMotTotal) {
    
//     let message = "Votre score est de "+ score +" sur "+ nombreMotTotal;
//     return message;
// }

// function choisirPhrasesOuMots() {
    
//     let choixUtilisateur;

//     do {
//         choixUtilisateur = prompt("Veillez entrer \"mots\" pour une liste de mot ou \"phrases\" pour une liste de phrase.");
//     } while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases");
    
//     return choixUtilisateur
// }

// function lancerBoucleDeJeu(listeMotOuPhrase) {

//     let score = 0;
//     //      console.log("Vous avez choisi une liste de mots.");
    
//     // for (let i = 0; i < listeMotOuPhrase.length; i++) {

//     //     //motOuPhraseUtilisateur = prompt("Entrez le mot suivant : "+ listeMotOuPhrase[i]);
//     //     motOuPhraseEntree.push(motOuPhraseUtilisateur);
    
//     //     if (listeMotOuPhrase[i] === motOuPhraseUtilisateur) {
//     //         score++;
//     //     }
//     // }

//     // return score;
// }



// function lancerJeu() {

//     // if (choisirPhrasesOuMots() === "mots") {
//     //     console.log("Vous avez choisi une liste de mots.");
//     //     console.log(retournerMessageDeFin(lancerBoucleDeJeu(listeMots), listeMots.length));
//     //     // console.log(motOuPhraseEntree);
//     //     // console.log(listeMots);
//     // } else {
//     //     console.log("Vous avez choisi une liste de phrases.");
//     //     console.log(retournerMessageDeFin(lancerBoucleDeJeu(listePhrases), listePhrases.length));
//     //     // console.log(motOuPhraseEntree);
//     //     // console.log(listePhrases);
//     // }

// }


// do {
//     choixUtilisateur = prompt("Veillez entrer \"mots\" pour une liste de mot ou \"phrases\" pour une liste de phrase.");
// } while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases");

// switch (choisirPhrasesOuMots()) {
//     case "mots":

//         console.log("Vous avez choisi une liste de mots.");

//         for (let i = 0; i < listeMots.length; i++) {

//             motUtilisateur = prompt("Entrez le mot suivant : "+ listeMots[i]);
//             motEntree.push(motUtilisateur);

//             if (listeMots[i] === motUtilisateur) {
//                 console.log("Bien jouee !");
//                 score++;
//             }else{
//                 console.log("Erreur de frappe.");
//             }

//         }
//         break;
//     case "phrases":

//         console.log("Vous avez choisi une liste de phrases.");

//         for (let i = 0; i < listePhrases.length; i++) {
            
//             phraseUtilisateur = prompt("Entrez la phrase suivante: "+ listePhrases[i]);
//             phraseEntree.push(phraseUtilisateur);

//             if (phraseUtilisateur === listePhrases[i]) {
//                 console.log("Bien jouee !");
//                 score++;
//             } else {
//                 console.log("Erreur de frappe.");
//             }
            
//         }
//         break;
//     default:
//         console.log("Euuh je ne comrends pas.");
//         break;
// }


//--------------------------------------------------------------------------------------------------------

function retournerMessageDeFin (score, nombreMotTotal) {

    affichageScore = `${score} / ${nombreMotTotal}`;

    document.querySelector(".zoneScore span").textContent = affichageScore;
}

function afficherProposition(motAAfficher) {
    
    document.querySelector(".zoneProposition").innerHTML = `${motAAfficher}`;
}

/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}+?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

/**
 * Cette fonction verifie si un nom entree dans un formulaire est valide ou non. 
 * @param {string} balise : l'element HTML contenant le nom
 */
function validerNom(balise) {
    let nomregex = new RegExp("^[a-zA-Zà-öø-ÿ]{2,}[a-zA-Zà-öø-ÿ\\s'-]*[a-zA-Zà-öø-ÿ]$"); //^[a-zA-Zà-öø-ÿ\\s'-]{2,}$
    if (balise.value === "" || nomregex.test(balise.value) === false) {
        throw erreurs.push(new Error(`Le nom ${balise.value} est trop court ou invalide.`));
        //console.log("nom absent !");
        //return false;
    }//else if (nomregex.test(balise.value)) {
    //     console.log("nom valide !");
    //     //return true;
    // }else{ 
    //     console.log("nom non valide !");
    //     //return false;
    // }
}

function validerEmail(balise) {
    let emailregex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
    if (balise.value === "" || emailregex.test(balise.value) === false) {
        throw erreurs.push(new Error(`L'emeail ${balise.value} est invalide.`));
        
        //console.log("email absent !");
        //return false;
    }//else if (emailregex.test(balise.value)) {
    //     console.log("email valide !");
    //     //return true;
    // }else{
    //     console.log("email non valide !");
    //     //return false;
    // }
}

function gererFormulaire(score) {
    const formulaire = document.querySelector("form");
    const nom = document.getElementById("nom");
    const email = document.getElementById("email");
    
    formulaire.addEventListener("submit", (Event) => {
        try{

            Event.preventDefault();
            //afficherEmail(nom.value, email.value, score);
            console.log(nom.value +" "+ email.value +" "+ score);
            validerEmail(email);
            validerNom(nom);

        } catch (error) {
            afficherMessageErreur(erreurs);
            //erreurs.forEach(error => console.log("Une erreur est survenue: "+ error.message));
        }
    });
}

function afficherMessageErreur(messageErreur) {
    
    const divPopub = document.querySelector(".popup");
    
    messageErreur.forEach(sms => {
        const nouveauSpan = document.createElement("span");
        nouveauSpan.innerHTML = `Une erreur est survenue: ${sms.message}<br> `;
        divPopub.appendChild(nouveauSpan);
    });

}



function lancerJeu () {
    
    let score = 0;
    let i = 0;

    const boutonValider = document.getElementById("btnValiderMot");
    const inputEcriture = document.getElementById("inputEcriture");
    const optionSource = document.querySelectorAll("input[type=radio]");
    let listeProposition = listeMots;

    initAddEventListenerPopup();
    afficherProposition(listeProposition[i]);

    for (let j = 0; j < optionSource.length; j++) {
        optionSource[j].addEventListener("change", () => {
            console.log(optionSource[j].value);
            listeProposition = (optionSource[j].value === "2")? listePhrases: listeMots;
            afficherProposition(listeProposition[i]);

        });
        
    }

    boutonValider.addEventListener("click", () => {

        console.log(listeProposition[i]);
        console.log(inputEcriture.value);

        if (inputEcriture.value === listeProposition[i]) {
            score++;
            console.log(score);
        }

        retournerMessageDeFin (score, listeProposition.length);
        i++;

        if (listeProposition[i] === undefined) {
            document.querySelector(".zoneProposition").innerHTML = "Le jeu est finis."
            let boutonDesactivation = document.getElementById("btnValiderMot");
            boutonDesactivation.disabled = true;
        } else {
            afficherProposition(listeProposition[i]);
        }

        inputEcriture.value = "";
    });

    gererFormulaire(score);

    
}


