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

// if (allowed) {
//     console.log('On est passé dans la condition')
// } else {
//     console.log('On est passé dans le else de la condition')
// }

const legalAgeToDrive = 18
const myAge = "18"

firstname = ''

// les opérateurs de comparaison : < > <= >= == === != !==
// if (myAge >= legalAgeToDrive) {
//     console.log('Tu peux conduire')
// } else {
//     console.log('Tu ne peux pas conduire')
// }

// if (myAge != legalAgeToDrive) {
//     console.log(`Tu n'as pas 18 ans`)
// } else {
//     console.log(`Tu viens d'être majeur`)
// }


// 4 VARIABLE COMPLEXE : LES TABLEAUX, ARRAYS
const myArray = ["Bordeaux", "Mérignac", "Pessac"]
myArray[2] = "Bruges"
myArray.push('Bègles')
myArray.push('Cenon')
myArray.push('Lormont')
myArray.push('Eysines')

myArray[5] = 31
myArray[3] = "Gradignan"

// Modifier par "Gradignan" le 4è élément du tableau


// 5 VARIABLE COMPLEXE : LES OBJETS, OBJECTS
const myIdentity = {
    firstname: ["Paul", "Pierre"],
    lastname: 'Doazan',
    age: 36,
    town: {
        name: "Bordeaux",
        population: 300000,
        districts: ["Pessac", "Merignac", "Talence"]
    }
}

myIdentity.town.districts.push('Gradignan')

// console.log(myIdentity.town.districts[myIdentity.town.districts.length - 1])

// A l'aide de l'objet myIdentity, construire la phrase "Bonjour, je m'appelle Paul Doazan, j'ai 36 ans, et j'habite à Talence".
console.log(myIdentity.firstname)