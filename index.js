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
    },
    gender: "male"
}

const myIdentity2 = {
    firstname: ["Margot", "Mathilde"],
    lastname: 'Durand',
    age: 36,
    town: {
        name: "Bordeaux",
        population: 300000,
        districts: ["Pessac", "Merignac", "Talence"]
    },
    gender: "female"
}

myIdentity.town.districts.push('Gradignan')

// console.log(myIdentity.town.districts[myIdentity.town.districts.length - 1])

// A l'aide de l'objet myIdentity, construire la phrase "Bonjour, je m'appelle Pierre Doazan, j'ai 36 ans, et j'habite à Talence"
const sentence = `Bonjour, je m'appelle ${myIdentity.firstname[1]} ${myIdentity.lastname}, j'ai ${myIdentity.age} ans, et j'habite à ${myIdentity.town.districts[2]}.`
// console.log(sentence)

// A l'aide de l'objet myIdentity, construire la phrase "Je suis un.e habitant.e de Bordeaux."
// if (myIdentity.gender === "male") {
//     console.log(`Je suis un habitant de ${myIdentity.town.name}.`)
// } else {
//     console.log(`Je suis une habitante de ${myIdentity.town.name}.`)
// }


// BOUCLE FOR, FOR LOOP
// for (let i = 10; i > 0; i--) {
//     console.log(`passage de boucle n°${i}`)
// }

const numbers = [2, 5, 21, 13, 3]

// Afficher dans la console pour chacun des éléments du tableau "l'élément vaut : ", à l'aide d'une boucle for

for (let i = 0; i < numbers.length; i++) {
    // console.log(`l'élément n°${i} vaut : ${numbers[i]}`)
}

// console.log("On est sorti de la boucle for")

// A l'aide d'une boucle for, calculer la somme des éléments du tableau numbers
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

const people = ["Simon", "Stéphane", "Mathilde", "Marianne", "Margot"]

// Ecrire à l'aide de la boucle for la phrase "Simon, Stéphane, Mathilde, Marianne et Margot sont de la même famille.", 

let str = ""

for (let i = 0; i < people.length; i++) {
    if (i === people.length - 2) {
        str += people[people.length - 2] + " et "
    } else if (i === people.length - 1) {
        str += people[people.length - 1] + " "
    } else {
        str += people[i] + ", "
    }
}

str += "sont de la même famille."

console.log(str)