// 1ere étape, on récupère les balises html dans des variables
const btnDiv = document.querySelector('.button')
const titleDiv = document.querySelector('.title')
const body = document.querySelector('body')

let customSize = 20;

// 2ème étape, on déclare un click sur le bouton
btnDiv.addEventListener('click', randomColor)

// 3ème étape, on implémente la fonction randomColor qui est exécutée à chaque click sur le bouton
function randomColor() {
    const red = Math.random() * 255
    const green = Math.random() * 255
    const blue = Math.random() * 255

    customSize++
    titleDiv.style.fontSize = `${customSize}px`
    titleDiv.style.color = `rgb(${255 - red},${255 - green},${255 - blue})`
    body.style.backgroundColor = `rgb(${red},${green},${blue})`
}

