var validation = document.getElementById("bouton_envoi");

var nom = document.getElementById("nom");
var nom_m = document.getElementById("nom_manquant");

var prenom = document.getElementById("prenom");
var prenom_m = document.getElementById("prenom_manquant");

var Naissance = document.getElementById("Naissance");
var Naissance_m = document.getElementById("Naissance_manquant");

var codepostal = document.getElementById("codepostal");
var codepostal_m = document.getElementById("codepostal_manquant");

var Adresse = document.getElementById("Adresse");
var Adresse_m = document.getElementById("Adresse_manquant");

var Ville = document.getElementById("Ville");
var Ville_m = document.getElementById("Ville_manquant");

var mail = document.getElementById("mail");
var mail_m = document.getElementById("mail_manquant");

var commentaire = document.getElementById("commentaire");
var commentaire_m = document.getElementById("commentaire_manquant");

var nom_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
var prenom_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
validation.addEventListener("click", f_valid);

function f_valid(e){

    if (nom.validity.valueMissing) {
        e.preventDefault();
        nom_m.textContent = "Il manque votre nom";
        nom_m.style.color = "red";

        prenom_m.textContent = "Il manque votre Prénom";
        prenom_m.style.color = "red";

        Naissance_m.textContent = "Il manque votre Date de naissance";
        Naissance_m.style.color = "red";
        
        codepostal_m.textContent = "Il manque votre code postal";
        codepostal_m.style.color = "red";
        
        Adresse_m.textContent = "Il manque votre Adresse";
        Adresse_m.style.color = "red";

        Ville_m.textContent = "Il manque votre Ville";
        Ville_m.style.color = "red";

        mail_m.textContent = "Il manque votre adresse mail et elle doit ressemble à XXXXXXX@XXXX.com ";
        mail_m.style.color = "red";

        commentaire_m.textContent = "Il manque votre commentaire ";
        commentaire_m.style.color = "red";

    }else if(nom_v.test(nom.value) == false){
        event.preventDefault();
        nom_m.textContent = "Syntaxe incorrecte";
        nom_m.style.color = "orange";

    }else{

    }
}
