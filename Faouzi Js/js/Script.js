//exercise 1

let prénom = ''
let nom =''


let container = document.createElement("div"); //Creation of the container and form
document.body.appendChild(container)
let form = document.createElement("form");
container.appendChild(form);

let p = document.createElement("p");//Creating paragraphs
container.appendChild(p);
p.textContent = "Quel est votre prénom ?  ";
let champ = document.createElement("input");
container.appendChild(champ);
champ.type = "texte";
p.style.display = "inline";



let p1 = document.createElement("p");//Creating paragraphs
container.appendChild(p1);
p1.textContent = "Quel est votre nom ?  ";
let champ1 = document.createElement("input");
container.appendChild(champ1);
champ1.type = "texte";


let para = document.createElement("p");//Creating the button ok
container.appendChild(para);
let btnOk = document.createElement("input");
container.appendChild(btnOk);
btnOk.type = "button";
btnOk.value = "OK";

btnOk.addEventListener("click", valide, false);



let para1 = document.createElement("p");
container.appendChild(para1);
let labelerreur = document.createElement("label");
labelerreur.textContent = "Completer les champs";
labelerreur.style.color = "red";
container.appendChild(labelerreur);
labelerreur.hidden = true;


function valide() {
  if (champ.value == null || champ.value == "" || champ1.value == null || champ1.value == "" ) {
  labelerreur.hidden = false;
} else {
  container.hidden = true;
  container1.hidden = false;
}
}

let container1 = document.createElement("div"); //Creation of the container
document.body.appendChild(container1)
let p2 = document.createElement("p");
container1.hidden = true;

container1.appendChild(p2);
let concat =
p2.textContent = "Bonjour " + prénom + "!";


//exercise 2

let container = document.createElement("div"); //Creation of the container and form
document.body.appendChild(container)
let form = document.createElement("form");
container.appendChild(form);

let p = document.createElement("p");//Creating paragraphs
container.appendChild(p);
p.textContent = "Salaire mensuel brut  ?  ";
let champ = document.createElement("input");
container.appendChild(champ);
champ.type = "number";
container.style.position = "relative";
p.style.display = "inline"


let p1 = document.createElement("p");//Creating paragraphs
container.appendChild(p1);
p1.textContent = "Salaire mensuel net  ?  ";
let champ1 = document.createElement("input");
container.appendChild(champ1);
champ1.type = "number";


let p2 = document.createElement("p");//Creating paragraphs
container.appendChild(p2);
p2.textContent = "Salaire annuel brut  ?  ";
let champ2 = document.createElement("input");
container.appendChild(champ2);
champ2.type = "number";


let p3 = document.createElement("p");//Creating paragraphs
container.appendChild(p3);
p3.textContent = "Salaire annuel net  ?  ";
let champ3 = document.createElement("input");
container.appendChild(champ3);
champ3.type = "number";

var numObj = 12345.6789;

numObj.toFixed();



//exercise 3

function countEvenElementsOfArray(array) {
  let i = 0;
  let currentElmt;
  let nbEvenElements = 0;
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    if (currentElmt % 2 === 0) {
      nbEvenElements++;
    }
  }
  return nbEvenElements;
}

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let nbEvenElements = countEvenElementsOfArray(array);
console.log(nbEvenElements);

//exercise 4

function copyArrayElementsPlus1(array) {
  let i = 0;
  let currentElmt;
  let copyArray = [];
  while (i < array.length) {
    currentElmt = array[i] + 1;
    i++;
    copyArray.push(currentElmt);
  }
  return copyArray;
}

let array = ['salut','mais','lui','bonjour','alala','donc','elle','vous','moi'];

let allElmtsArrayPlus1 = copyArrayElementsPlus1(array);

function displayElementsArray(array) {
  let i = 0;
  let currentElmt;
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    console.log(currentElmt);
  }
}

displayElementsArray(allElmtsArrayPlus1);
