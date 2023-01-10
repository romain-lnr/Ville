var httpRequest; //Une variable pour stocker la requête ajax

// Relation avec les boutons de la page. Elles servent à repérées les ID de la page HTML.
var btnville1 = document.querySelector("#b1");
var btnville2 = document.querySelector("#b2");
var btnville3 = document.querySelector("#b3");
var btnville4 = document.querySelector("#b4");
var btnville5 = document.querySelector("#b5");

//Ajoute l'événement sur le click du bouton charger. Ces variables vont permettre de lire les informations liée aux boutons, ceux sont des écouteurs d'evenements. 
btnville1.addEventListener("click", CommentNY);
btnville2.addEventListener("click", CommentBerlin);
btnville3.addEventListener("click", CommentMoscou);
btnville4.addEventListener("click", CommentShangai);
btnville5.addEventListener("click", CommentSkopje);


//Fonction qui execute des données sur New York. 
function CommentNY() {
    httpRequest = new XMLHttpRequest();

// Si la requette ne fonctionne pas, une alerte pop-up s'affichera sur le site et le programme sort de la fonction.
    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }
//Cette fonction permet d'analyser et d'extraires des informations de New York
    fetch("SCRIPT/NY.json") // Lire le fichier JSON
        .then(response => response.json())
        .then(data => {
            httpRequest.open((document.querySelector("#title").innerText = data.Title) +
                (document.querySelector("#text").innerText = data.Desc) +
                (document.querySelector("#météo").innerText = data.Météo) +
                (document.querySelector("#population").innerText = data.Population));
        })
    httpRequest.open(document.querySelector("#image").src = "IMG/NY.jpg");
    httpRequest.send();
}

//Fonction qui execute des données sur Berlin. 
function CommentBerlin() {
    httpRequest = new XMLHttpRequest();

// Si la requette ne fonctionne pas, une alerte pop-up s'affichera sur le site et le programme sort de la fonction.
    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }
//Cette fonction permet d'analyser et d'extraires des informations de Berlin
    fetch("SCRIPT/Berlin.json") // Lire le fichier JSON
        .then(response => response.json())
        .then(data => {
            httpRequest.open((document.querySelector("#title").innerText = data.Title) +
                (document.querySelector("#text").innerText = data.Desc) +
                (document.querySelector("#météo").innerText = data.Météo) +
                (document.querySelector("#population").innerText = data.Population));
        })
    httpRequest.open(document.querySelector("#image").src = "IMG/Berlin.jpg");
    httpRequest.send();
}

//Fonction qui execute des données sur Moscou.
function CommentMoscou() {
    httpRequest = new XMLHttpRequest();

    // Si la requette ne fonctionne pas, une alerte pop-up s'affichera sur le site et le programme sort de la fonction.
    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }

    //Cette fonction permet d'analyser et d'extraires des informations de Moscou
    fetch("SCRIPT/Moscou.json") // Lire le fichier JSON
        .then(response => response.json())
        .then(data => {
            httpRequest.open((document.querySelector("#title").innerText = data.Title) +
                (document.querySelector("#text").innerText = data.Desc) +
                (document.querySelector("#météo").innerText = data.Météo) +
                (document.querySelector("#population").innerText = data.Population));
        })
    httpRequest.open(document.querySelector("#image").src = "IMG/Moscou.jpg");
    httpRequest.send();
}

//Fonction qui execute des données sur Shangai.
function CommentShangai() {
    httpRequest = new XMLHttpRequest();

    // Si la requette ne fonctionne pas, une alerte pop-up s'affichera sur le site et le programme sort de la fonction.
    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }

    //Cette fonction permet d'analyser et d'extraires des informations de Shangai
    fetch("SCRIPT/Shangai.json") // Lire le fichier JSON
        .then(response => response.json())
        .then(data => {
            httpRequest.open((document.querySelector("#title").innerText = data.Title) +
                (document.querySelector("#text").innerText = data.Desc) +
                (document.querySelector("#météo").innerText = data.Météo) +
                (document.querySelector("#population").innerText = data.Population));
        })
    httpRequest.open(document.querySelector("#image").src = "IMG/Shangai.jpg");
    httpRequest.send();
}

//Fonction qui execute des données sur Skopje.
function CommentSkopje() {
    httpRequest = new XMLHttpRequest();

    
    // Si la requette ne fonctionne pas, une alerte pop-up s'affichera sur le site et le programme sort de la fonction.
    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }

    // Si la requette ne fonctionne pas, une alerte pop-up s'affichera sur le site et le programme sort de la fonction.
    fetch("SCRIPT/Skopje.json") // Lire le fichier JSON
        .then(response => response.json())
        .then(data => {
            httpRequest.open((document.querySelector("#title").innerText = data.Title) +
                (document.querySelector("#text").innerText = data.Desc) +
                (document.querySelector("#météo").innerText = data.Météo) +
                (document.querySelector("#population").innerText = data.Population));
        })
    httpRequest.open(document.querySelector("#image").src = "IMG/Skopje.jpg");
    httpRequest.send();
}
