const myTitle = document.querySelector('.title')
const btn = document.querySelector('.button')
const bgContainer = document.querySelector(".background-container")

btn.addEventListener('click', onBtnClick)

// méthode createElement pour créer une nouvelle balise html
const newDiv = document.createElement("div");

// on met à jour la propriété textContent de la nouvelle balise
newDiv.textContent = "Ma nouvelle div"

// on ajoute une classe css à la nouvelle balise, les différentes propriétés css de cette classe seront donc appliquées
newDiv.classList.add('stripe')

// on insère la nouvelle balise dans la balise bgContainer
bgContainer.appendChild(newDiv)

// regrouper la création d'une div dans une fonction et exécuter cette fonction à chaque click sur le bouton

let clicked = false

function onBtnClick() {
    clicked = !clicked

    if (clicked) {
        myTitle.textContent = "Bienvenue dans ma super App"
    } else {
        myTitle.textContent = "Au revoir !"
    }

}