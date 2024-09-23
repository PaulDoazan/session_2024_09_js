// 1ere étape, on récupère les balises html dans des variables
const btnDiv = document.querySelector('.button')
const body = document.querySelector('body')

btnDiv.addEventListener('click', randomColor)

function randomColor() {
    const red = 213
    const green = 123
    const blue = 90

    body.style.backgroundColor = "rgb( ,  , )"
}

// 2ème étape, on déclare un click sur le bouton

// 3ème étape, on implémente la fonction randomColor qui est exécutée à chaque click sur le bouton