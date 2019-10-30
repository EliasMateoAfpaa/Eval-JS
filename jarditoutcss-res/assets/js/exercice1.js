//exercice 1 ---------------------------------------------------------------------------------------------------------------------------------------
var PU = window.prompt("Entrez un prix unitaire : ");   //dde à l'utilisateur d'entré un prix unitaire
var QTECOM = window.prompt("Entrez la quantité des produits commandées : "); //dde à l'utilisateur d'entré la quantité des produits
 //affiche le prix à payer pour la commande
var TOT = alert(PU*QTECOM); //<-- afficher prix de la commande hors promo et taxes


var PORT = alert("Le montant du port est de : "+PORT);//<-- achiffer le montant du port
    if(TOT>500){ // début condition pour déterminer la valeur du port en fct du prix de la commande
        PORT=0;
    }
    else if(TOT<500){// fin condition
    PORT=6;
    }

var REM = alert("Le montant de la remise est de : "+REM); //<-- achiffer le montant de la remise en fct du prix des produits
    if(100<TOT<200){// début condition pour déterminer la valeur de la remise en fct du prix de la commande
    REM = 5/100*TOT;
    } 
    else if (PAP>200){
    REM = 10/100*TOT;
    }
    else(PAP<100);{ //fin condition
    REM = 0/100*TOT;
    }
var PAP =alert("Le prix de la comande avec la remise et le port"+(TOT+REM+PORT)); // <-- afficher prix  de la commande avec promo et taxes
//je n'arrive pas a afficher mes resultat après la var TOT
