class Personne {
    constructor(nom, lieu, argent){
        this.nom = nom
        this.lieu = lieu
        this.argent = argent
        this.mainDroite = []
        this.mainGauche = []
    }

//########################### MÉTHODES #######################################

//############ SE DÉPLACER ##################
seDeplacer(depart, arrivee) {
    arrivee.personnes.push(this.nom)
    depart.personnes.pop(depart)
}

//######### PAYER ARTICLES ####################
payerArticle(ingredients){
    personnes.argent = personnes.argent - ingredients.prix
    if (personnes.argent == 0) {
        console.log(`${personnes.nom}` +" achete " +`${el.nom}` +" pour " +`${el.prix}` +" euro");
    }else {
        console.log(`${personnes.nom} rentre à la maison car pas assez d'argent.`);
    }
}

//############# COUPER INGRÉDIENTS ########################
    couper(){
        epicerie.ingredient.etat = "coupé"
    }
}

//##################### INGRÉDIENTS CLASS ####################
class Ingredients {
    constructor(nom, etat, prix) {
        this.nom = nom
        this.etat = etat
        this.prix = prix
    }
}
let oignons = new Ingredients("oignons", "coupé", 1)
let oeuf = new Ingredients("oeuf", "entier", 5)
let epice = new Ingredients("epice", "moulu", 10)
let fromage = new Ingredients("fromage", "entier", 5)

//#######################################################################

let personnes = new Personne("Heredia", "maison", 500)

let maison = {}
maison.nom = "maison"
maison.personnes = []

let epicerie = {
    nom : "epicerie",
    personnes : [],
    panniers : [{
        type : "pannier",
        contenue : [],
    }],
    ingredient : [oeuf, oignons, epice, fromage]
}
let ingredientFull = epicerie.ingredient;

//################# POELE ##################
let poêle = {
    contenu : [],
    cuir(bientot) {
    this.contenu[0] = bientot
    setTimeout(() => {
        console.log("Votre oeuf est prêt, Bonne Appétit!!!");
    }, 4000)
}
}
poêle.cuir("cuit")

//################### BOL ##########################
let bol = {
    contenu : [],
    melanger(nomMelange) {
        let newMelange = {
            nom : nomMelange,
            etat : "pas cuit"
        }
        this.contenu.splice(0, 4, newMelange)
    }
}

//############################ OUTILS #############################
let outils = {
    nom: "couteau",
    action: personnes.couper()
}

//############################# DÉBUT OMELETTE ############################################
personnes.seDeplacer(epicerie,maison);
console.log(`${maison.personnes} est actuellement à la ${maison.nom}.`);
// console.log(maison);

//####################### DIRECTION L'ÉPICERIE a l'epicerie ####################
personnes.seDeplacer(maison,epicerie);
console.log(`${epicerie.personnes} est parti à l'${epicerie.nom}.`);
// console.log(maison);

//################### MON PANIER DANS LA MAIN DROITE #######################
epicerie.panniers.push(personnes.mainDroite);
console.log(`${personnes.nom} a pris un ${epicerie.panniers[0].type}.`); 
console.log(personnes.mainDroite);  

//###################### PRENDRE LES INGRÉDIENTS 1 PAR 1 ##################
ingredientFull.forEach(el => {
    console.log(`${personnes.nom} a pris un ${el.nom}`);
})

//################ PAYER LES ARTICLES #################
ingredientFull.forEach(el => {
    console.log(personnes.payerArticle(el));
});

//################## CE QUI ME RESTE COMME ARGENT ####################
console.log(`le solde de votre compte : ${personnes.argent}€.`);

//############# JE RENTRE A LA MAISON ###############
personnes.seDeplacer(epicerie,maison);
console.log(`${maison.personnes} rentre à la ${maison.nom}.`);

//############ METTRE INGRÉDIENTS DANS LE BOL ###################
ingredientFull.forEach(el => {
    bol.contenu.push(el)
    console.log(`${el.nom} a étais ajouter dans le bol`);  
});

//########### VÉRIFIER QUE LE PANIER EST VIDE ####################    
personnes.mainDroite[0]
console.log(personnes.mainDroite[0]);

//############### RETOURNER LE PANIER A L'EPICERIE #########################
personnes.seDeplacer(maison,epicerie);
console.log(`${epicerie.personnes} est partie à l'${epicerie.nom} déposer le pannier.`);
console.log(`${personnes.nom} depose le panier.`);
personnes.mainDroite.pop();
console.log(personnes.mainDroite);

//############### RENTER A LA MAISON #################
personnes.seDeplacer(epicerie,maison);
console.log(`${maison.personnes} est actuellement à la ${maison.nom}.`);

//######### SALUT AYHAN #################
console.log("J'SUIS ÉNERVÉ!!!.");

//############ VÉRIFIER LE CONTENU ############
bol.contenu.forEach(el => {
    if (el.etat == "entier") {
        personnes.couper(el);
        console.log(`${el.nom} a été découper`);
    }
});

//############ MÉLANGER ##################
//A CORRIGER
// Ingredients.push(bol)
bol.melanger('omelette');
console.log("Nous avons le résultat de tout ingrédients mélangés dans le bol.");
console.log(bol);

//############ VERSER DANS LA POELE ET VIDER LE BOL ################ 
bol.contenu.push(ingredientFull)
// poêle.contenu.push(bol.contenu[0]);
// bol.contenu.splice(0,1);
console.log("On verse le contenu du bol dans la poêle.");
poêle.contenu.push(bol.contenu);
console.log(poêle);
