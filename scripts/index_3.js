let sentence = sayHello("David")
sentence += ' !!!'

let sentence2 = sayHello("Paul")
sentence2 += ' !!!'

// Après un return, le code n'est pas exécuté
function sayHello(name) {
    if (name === "Paul") return ''

    return `Hello and welcome ${name}`
}


// écrire la fonction qui prend en paramètre un tableau et retourne la moyenne des éléments du tableau
const nbs = [21, 23, 24, 26, 83, 81, 1, 4, 7, 13]
// console.log(average(nbs))

function average(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return Math.round(sum / arr.length)
}

const habitants = [
    {
        name: "Jacques",
        age: 25,
        town: "Paris"
    },
    {
        name: "Simon",
        age: 70,
        town: "Paris"
    },
    {
        name: "Jeanne",
        age: 12,
        town: "Paris"
    },
    {
        name: "Marianne",
        age: 38,
        town: "Paris"
    },
    {
        name: "Marianne",
        age: 43,
        town: "Bordeaux"
    },
    {
        name: "Paul",
        age: 65,
        town: "Bordeaux"
    },
    {
        name: "Pierre",
        age: 91,
        town: "Bordeaux"
    },
]

// Ecrire une fonction qui prends [habitants] en 1er paramètre et une ville en second paramètre, et qui retourne un tableau des noms des habitants de cette ville
const res = getAverageAgeByTown(habitants, 'Bordeaux')
// console.log(res)

function getHabitantsByTown(arr, town) {
    const filtered = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].town === town) filtered.push(arr[i].name)
    }

    return filtered
}

function getAverageAgeByTown(arr, town) {
    const filteredAge = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].town === town) filteredAge.push(arr[i].age)
    }

    return average(filteredAge)
}

// Ecrire une fonction qui me retourne le nombre d'habitants qui ont moins de 40 ans
function under40(arr) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age < 40) {
            count++
        }
    }

    return count
}

// console.log(under40(habitants))

// Ecrire une fonction qui prend en paramètre habitants et qui retourne la phrase "Paul, Pierre et ... ont moins de 40 ans"
function getSentenceFromUnder40(arr) {
    let arrUnder40 = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age < 40) {
            arrUnder40.push(arr[i].name)
        }
    }

    let sentence = ''

    for (let i = 0; i < arrUnder40.length; i++) {
        // on teste si l'indice est sur la dernière itération de la boucle
        if (i === arrUnder40.length - 1) {
            sentence += arrUnder40[i] + ' '

            // on teste si l'indice est sur l'avant-dernière itération de la boucle
        } else if (i === arrUnder40.length - 2) {
            sentence += arrUnder40[i] + ' et '

            // on exécute cette ligne pour tous les autres cas
        } else {
            sentence += arrUnder40[i] + ', '
        }
    }

    return sentence + 'ont moins de 40 ans'
}

console.log(getSentenceFromUnder40(habitants))

// ecrire une fonction qui prend en paramètre le tableau habitants et qui retourne un tableau des habitants qui habitent Bordeaux ET qui ont moins de 40 ans

console.log(getBxOrUnder40(habitants))

// opérateur AND => &&
function getParisiansUnder40(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].town === "Paris" && arr[i].age < 40 && arr[i].name === "Marianne") {
            result.push(arr[i])
        }
    }

    return result
}

// opérateur OR => ||
function getBxOrUnder40(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].town === "Bordeaux" || arr[i].age < 40 || arr[i].name === "Simon") {
            result.push(arr[i])
        }
    }

    return result
}