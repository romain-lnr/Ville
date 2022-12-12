var httpRequest; //Une variable pour stocker la requête ajax

//Recherche des éléments de la page que nous allons manipuler avec JS
var btnville1 = document.querySelector("#b1");
var btnville2 = document.querySelector("#b2");
var btnville3 = document.querySelector("#b3");
var btnville4 = document.querySelector("#b4");
var btnville5 = document.querySelector("#b5");

//Ajoute l'événement sur le click du bouton charger
btnville1.addEventListener("click", CommentNY);
btnville2.addEventListener("click", CommentBerlin);
btnville3.addEventListener("click", CommentMoscou);
btnville4.addEventListener("click", CommentShangai);
btnville5.addEventListener("click", CommentSkopje);

//Fonction qui charge un texte en ajax
function CommentNY() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }

    fetch("SCRIPT/data.json") // Lire le fichier JSON
        //Parse le fichier JSON
        .then(response => response.json())
        .then(data => {
            httpRequest.open((document.querySelector("#title").innerText = data['Ville'][0].Title) +
                (document.querySelector("#text").innerText = data['Ville'][0].Desc));
        })
    httpRequest.open(document.querySelector("#image").src = "IMG/NY.jpg");
    httpRequest.send();
}

//Fonction qui charge un texte en ajax
function CommentBerlin() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }

    fetch("SCRIPT/data.json") // Lire le fichier JSON
        //Parse le fichier JSON
        .then(response => response.json())
        .then(data => {
            httpRequest.open((document.querySelector("#title").innerText = data['Ville'][1].Title) +
                (document.querySelector("#text").innerText = data['Ville'][1].Desc));
        })
    httpRequest.open(document.querySelector("#image").src = "IMG/Berlin.jpg");
    httpRequest.send();
}

//Fonction qui charge un texte en ajax
function CommentMoscou() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }

    fetch("SCRIPT/data.json") // Lire le fichier JSON
        //Parse le fichier JSON
        .then(response => response.json())
        .then(data => {
            httpRequest.open((document.querySelector("#title").innerText = data['Ville'][2].Title) +
                (document.querySelector("#text").innerText = data['Ville'][2].Desc));
        })
    httpRequest.open(document.querySelector("#image").src = "IMG/Moscou.jpg");
    httpRequest.send();
}

//Fonction qui charge un texte en ajax
function CommentShangai() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }

    fetch("SCRIPT/data.json") // Lire le fichier JSON
        //Parse le fichier JSON
        .then(response => response.json())
        .then(data => {
            httpRequest.open((document.querySelector("#title").innerText = data['Ville'][3].Title) +
                (document.querySelector("#text").innerText = data['Ville'][3].Desc));
        })
    httpRequest.open(document.querySelector("#image").src = "IMG/Shangai.jpg");
    httpRequest.send();
}

//Fonction qui charge un texte en ajax
function CommentSkopje() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }

    fetch("SCRIPT/data.json") // Lire le fichier JSON
        //Parse le fichier JSON
        .then(response => response.json())
        .then(data => {
            httpRequest.open((document.querySelector("#title").innerText = data['Ville'][4].Title) +
                (document.querySelector("#text").innerText = data['Ville'][4].Desc));
        })
    httpRequest.open(document.querySelector("#image").src = "IMG/Skopje.jpg");
    httpRequest.send();
}
