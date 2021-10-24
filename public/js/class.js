// Class Personne
class Personne {
    constructor(nom, lieu, argent) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = [];
        this.mainGauche = [];
        this.seDeplacer = (depart, arrivee) => {
            this.lieu = arrivee.nom;
            arrivee.personnes.push(this);
            depart.personnes.splice(depart.personnes.indexOf(this), 1);
            console.log(`${this.nom} se déplace de ${depart.nom} vers ${arrivee.nom}`);
        }
        this.payerArticle = (article) => {
            this.argent -= article.prix;
            console.log(`${this.nom} a payé ${article.prix}€ pour acheter ${article.nom}`);
        }
        this.couper = (ingredient, outil) => {
            if (ingredient.etat == "entier") {
                outil.action(ingredient);
            }
        }
    }
}

// Class Lieu
class Lieu {
    constructor(nom, personnes, paniers) {
        this.nom = nom;
        this.personnes = personnes;
        this.paniers = paniers;
    }
}

// Class Ingredients
class Ingredients {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

export {Personne, Lieu, Ingredients}