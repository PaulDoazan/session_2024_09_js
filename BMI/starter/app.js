// IMC = poids en kg / taille² en m
const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 },
];

// récupérer dans des variables les 2 inputs
const inputHeight = document.querySelector('.height-input')
const inputWeight = document.querySelector('.weight-input')
const btn = document.querySelector('.form-btn')

// déclarer un click sur le bouton => console.log('click)
btn.addEventListener('click', onBtnClick)

// écrire la fonction qui prend en paramètres taille et poids et qui retourne un IMC
function getBmi(h, w) {
    let bmi = w / Math.pow(h / 100, 2)
    return bmi.toFixed(1)
}

function onBtnClick() {
    const convertedHeight = Number(inputHeight.value)
    const convertedWeight = Number(inputWeight.value)
    console.log(getBmi(convertedHeight, convertedWeight))
}