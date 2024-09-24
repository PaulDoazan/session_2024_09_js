const myTitle = document.querySelector('.title')
const btn = document.querySelector('.add')
const btnRefresh = document.querySelector('.refresh')
const bgContainer = document.querySelector(".background-container")

btn.addEventListener('click', onBtnClick)
btn.addEventListener('click', addNewElement)

let addedElements = []
let lastRowCreated
let count = 0

function addNewElement() {
    if (count === 0) {
        const newRow = document.createElement("div");
        lastRowCreated = newRow
        newRow.classList.add('stripe-row')
        bgContainer.appendChild(newRow)
    }

    // window est un objet natif Javascript qui donne accès à la fenêtre du navigateur
    // la propriété innerWidth donne la largeur de la fenêtre en pixels
    // console.log(window.innerWidth)
    // méthode createElement pour créer une nouvelle balise html
    const newDiv = document.createElement("div");
    addedElements.push(newDiv)

    // on met à jour la propriété textContent de la nouvelle balise
    // newDiv.textContent = "Ma nouvelle div"

    // on ajoute une classe css à la nouvelle balise, les différentes propriétés css de cette classe seront donc appliquées
    newDiv.classList.add('stripe')
    const color = randomColor()
    newDiv.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`
    // for (let i = 0; i < addedElements.length; i++) {
    //     const element = addedElements[i];
    //     element.style.width = `${window.innerWidth / addedElements.length}px`
    // }

    // on insère la nouvelle balise dans la balise bgContainer
    lastRowCreated.appendChild(newDiv)

    count++
    if (count === 10) count = 0
}


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

function randomColor() {
    const red = Math.random() * 255
    const green = Math.random() * 255
    const blue = Math.random() * 255

    return [red, green, blue]
}