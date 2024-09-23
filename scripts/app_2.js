// 1ere étape, on récupère les balises html dans des variables
const btnDiv = document.querySelector('.button')
const titleDiv = document.querySelector('.title')
const body = document.querySelector('body')

const stripes = document.querySelectorAll('.stripe')

let customSize = 20;

// 2ème étape, on déclare un click sur le bouton
btnDiv.addEventListener('click', colorStripes)

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

function colorStripes() {
    // A l'aide d'une boucle for, mettre à jour le backgroundColor de chaque bande avec une couleur aléatoire
    const min = 50
    const max = 190

    const red = min + Math.random() * (max - min)
    const green = min + Math.random() * (max - min)
    const blue = min + Math.random() * (max - min)

    for (let i = 0; i < stripes.length; i++) {
        const randomColor = `rgb(${red - 8 * i}, ${green - 8 * i}, ${blue - 8 * i})`
        stripes[i].style.backgroundColor = randomColor
    }
}

