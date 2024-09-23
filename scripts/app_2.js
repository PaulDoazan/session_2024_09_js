// 1ere étape, on récupère les balises html dans des variables
const btnDiv = document.querySelector('.button')
const body = document.querySelector('body')

btnDiv.addEventListener('click', randomColor)

function randomColor() {
    const red = Math.random() * 255
    const green = Math.random() * 255
    const blue = Math.random() * 255

    // color

    body.style.backgroundColor = `rgb(${red},${green},${blue})`
}

// 2ème étape, on déclare un click sur le bouton

// 3ème étape, on implémente la fonction randomColor qui est exécutée à chaque click sur le bouton