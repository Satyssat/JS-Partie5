const obj = {
  pseudo: "Satya",
  ville: "Figeac",
  admin: false,

  direBonjour: function () {
    console.log("Boujour je suis " + this.pseudo);
  },
};

// Ajouter

obj.age = 24;
obj["pseudo"] = "Saty";

// Modifier

obj.age = 35;

// Supprimer
// delete obj.ville;

// Checker si une propriété existe

// console.log("pseudo" in obj);
// console.log("classe" in obj);

// Parcourir un objet

for (const key in obj) {
  //   console.log(`${key} : ${obj[key]}`);
}

// console.log(obj.direBonjour());

// Pour obtenir les clés d'un objet

const keys = Object.keys(obj);

// console.log(keys);

const values = Object.values(obj);
// console.log(values);

// Mettre tous les éléments dans un tableau

const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1m75",
  poids: "60kg",
};

// Fusionner objets

const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

// Empecher les mofifications

const newObj = Object.freeze(obj);
newObj.pseudo = "yolo";
// console.log(newObj);

// Constructeur d'objet

// Fonction Constructeur

function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  this.getCity = function () {
    console.log(this.pseudo + " habite à " + this.ville);
  };
}

const user1 = new User(`Lise`, `La rochelle`);
const user2 = new User(`Cathy`, `Paris`);
// console.log(user1.getCity());

//-----------------------------
// Factory Functions
function creaUser(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}

const user3 = new creaUser(`Jérome`, `Lalinde`);
// console.log(user3);

//------------------------
// Creation de classe

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  sayMyName = function () {
    console.log(`Bonjour je suis ${this.pseudo}`);
  };
}

const user5 = new Utilisateur("kiwi", "Figeac");

Utilisateur.prototype.sayCity = function () {
  console.log(`${this.pseudo} habite à ${this.ville}`);
};

Object.assign(Utilisateur.prototype, {
  method1() {
    //
  },
  method2() {
    //
  },
});

// console.log(user5.sayCity());

//-----------------
// L'héritage
//------------------

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(`${this.name} dit : ${text}`);
  }
}

class Dog extends Animal {
  run() {
    console.log(`le Chien court`);
  }
}

class Cat extends Animal {
  hunt() {
    console.log("Je chasse un oiseau");
  }
}

const Rintintin = new Dog("Rintintin", 9);
console.log(Rintintin);
