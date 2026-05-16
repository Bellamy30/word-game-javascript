console.log("Hello Word!");

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
       
    }
}

function validerEmail(balise) {
    let emailregex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
    if (balise.value === "" || emailregex.test(balise.value) === false) {
        throw erreurs.push(new Error(`L'emeail ${balise.value} est invalide.`));
        
        
    }
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


