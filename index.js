// 1. VARIABLE PRIMITIVE : CHAINE DE CARACTERE, STRING
let firstname = "Paul"
const lastname = 'Doazan'
const myPresentation = "Je m'appelle"

// backticks => version moderne de JS qu'on appelle ES6 2015
const myTown = `Talence`

// Ancienne manière de déclarer une variable, possibilité de la modifier, proche de let mais différent sur la portée des variables
var firstname2 = "Pierre"
firstname2 = "Adrien"

firstname = "Mathilde"


// Mettre ensemble (concaténer) les 3 chaînes de caractère : Je m'appelle Paul Doazan.
const fullPresentation = myPresentation + ' ' + firstname + ' ' + lastname + '.'
const fullPresentation2 = `${myPresentation} ${firstname} ${lastname}.`


// 2. VARIABLE PRIMITIVE : NOMBRE, NUMBER
let myNumber = 12
// myNumber = myNumber + 10

// Les 4 opérateurs arithmétiques Addition, Soustraction, Multiplication, Division
myNumber += 10
myNumber -= 4
myNumber *= 3
myNumber /= 2

let myModulo = myNumber % 3
myModulo += 2

let result = 21 + 2 + "!" + 4 + 43
result += 3

// 3 VARIABLE PRIMITIVE : BOOLEENS, BOOLEANS
const allowed = false
const notAllowed = false

if (allowed) {
    console.log('On est passé dans la condition')
} else {
    console.log('On est passé dans le else de la condition')
}

const legalAgeToDrive = 18
const myAge = 36

if () {
    console.log('Tu peux conduire')
} else {
    console.log('Tu ne peux pas conduire')
}