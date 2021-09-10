const obj = {
  pseudo: "Satya",
  ville: "Figeac",
};

// Ajouter

obj.age = 24;

// Modifier

obj.pseudo = "Sat";

// Supprimer

delete obj.ville;
console.log(obj);

// Checker si une propriété existe

console.log("pseudo" in obj);
console.log("classe" in obj);
