const containerDiv = document.querySelector('.subcontainer')
const btnDiv = document.querySelector('.refresh')

for (let i = 0; i < 10; i++) {
    const newTitle = document.createElement("div")
    newTitle.textContent = "Hello World"

    containerDiv.appendChild(newTitle)
}

// événement de souris click droit
// btnDiv.addEventListener('contextmenu', onClick)

btnDiv.addEventListener('click', onClick)

let onOff = false
function onClick() {
    onOff = !onOff
    // if (onOff) {
    //     containerDiv.textContent = "Le bouton est allumé"
    // } else {
    //     containerDiv.textContent = "Le bouton est éteint"
    // }

    // Une condition ternaire
    onOff ? containerDiv.textContent = "Le bouton est allumé" : containerDiv.textContent = "Le bouton est éteint"
}


// AND OR => && ||
let hasInterdictionOfDriving = true
let hasLotOfMoneyToBribePolice = false
let age = 21

// ! la négation
if (age >= 18 && !hasInterdictionOfDriving || hasLotOfMoneyToBribePolice) {
    console.log('Tu peux conduire')
} else {
    console.log(`Tu ne peux pas conduire`)
}

