// 5 types de variable :
// 3 primitives : string, number, boolean

// 2 complexes : array, object

let arr1 = [12, 13, 14]
let arr2 = [4, 32, 21]
let arr3 = [12, 77, 31]

let sum1 = 0

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        sum1 += arr1[i];
    }
}

// console.log(sum1)

let sum2 = 0
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        sum2 += arr2[i];
    }
}

// console.log(sum2)

let sum3 = 0
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0) {
        sum3 += arr3[i];
    }
}


// écrire la fonction qui prend en paramètre un tableau et qui retourne la somme des nombres pairs de ce tableau
function calculSum(arrParam, moduloParam) {
    let sum = 0
    for (let i = 0; i < arrParam.length; i++) {
        if (arrParam[i] % 2 === moduloParam) {
            sum += arrParam[i];
        }
    }
    return sum
}

const res1 = calculSum(arr1, 0)
const res2 = calculSum(arr2, 1)
const res3 = calculSum(arr3, 1)

console.log(res1, res2, res3)



function addTen(firstParameter) {
    const result = firstParameter + 10
    return result
}

function substractFive(nb) {
    const result = nb - 5
    return result
}

function multiplyByTwo(nb) {
    const result = nb * 2
    return result
}

const nb1 = addTen(12)
const removedNb = substractFive(nb1)
const finalResult = multiplyByTwo(removedNb)

console.log(finalResult)

// Ecrire une fonction qui prend un nom (string) en paramètre et qui retourne une chaine de caractère "Bienvenue {param} !" 

let name1 = "Antoine"
let name2 = "Manon"

const w1 = welcome(name1)
const w2 = welcome(name2)

function welcome(param) {
    return `Bienvenue ${param} !`
}


// écrire une fonction qui prend en paramètre un tableau de nombres et qui retourne un tableau des nombres pairs

const nbs = [12, 23, 14, 43, 5, 6, 2, 8, 90, 102, 31]

function sortNumbers(arrParam) {
    const arrResult = []
    for (let i = 0; i < arrParam.length; i++) {
        if (arrParam[i] % 2 === 0) {
            arrResult.push(arrParam[i])
        }
    }
    return arrResult
}

const evenNbs = sortNumbers(nbs)
// const oddNbs = sortNumbers(nbs)
// console.log(evenNbs)


const people = [
    { name: "Simon", gender: "male" },
    { name: "Stéphane", gender: "male" },
    { name: "Paul", gender: "male" },
    { name: "Mathilde", gender: "female" },
    { name: "Marianne", gender: "female" },
    { name: "Marion", gender: "female" },
    { name: "Louis", gender: "male" },
]

// écrire une fonction qui prend en paramètre un tableau d'objet et un genre, et qui retourne un nouveau tableau, onlyWomen, onlyMen