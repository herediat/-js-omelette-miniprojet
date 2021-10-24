import {Personne, Lieu, Ingredients} from "./class.js"


// Instance Personne
let perso = new Personne("perso", "", 50);

// Instance Ingredients
let poivron = new Ingredients('poivron', 'entier', 1)
let oignon = new Ingredients('oignon', 'entier', 2)
let oeuf = new Ingredients('oeuf', 'entier', 4)
let epice = new Ingredients('epice', 'moulu', 3.25)
let paprika = new Ingredients('paprika', 'moulu', 1.5)
let fromage = new Ingredients('fromage', 'coupé', 1.6)

// Instance Lieu
let maison = new Lieu("Maison", []);
let epicerie = new Lieu("Epicerie", [], [
    { nom: "Panier 1", contenu: [] },
    { nom: "Panier 2", contenu: [] },
    { nom: "Panier 3", contenu: [] }
]);

epicerie.etagere = [poivron, oignon, oeuf, epice, paprika, fromage];

// Outil Couteau
let couteau = {
    nom: "couteau",
    action(ingredient) {
        ingredient.etat = "coupé"
        console.log(`${ingredient.nom} est coupé`);
    }
}

// Outil Bol
let bol = {
    nom: "bol",
    contenu: [],
    melanger(nomMelange) {
        let newMelange = {
            nom: nomMelange,
            etat: "pas cuite"
        }
        while (this.contenu.length > 0) {
            this.contenu.shift();
        }
        this.contenu.push(newMelange);
    }
}

// Outil Poele
let poele = {
    nom: "poele",
    contenu: [],
    cuire() {
        console.log(`L'${this.contenu[0].nom} est en préparation`);
        this.contenu[0].etat = "cuite"
        setTimeout(() => {
            console.log(`${this.contenu[0].nom} est ${this.contenu[0].etat}`);
        }, 4000);
    }
}


export {perso, maison, epicerie, couteau, bol, poele}