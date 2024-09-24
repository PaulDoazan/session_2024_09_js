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
console.log(average(nbs))

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
console.log(res)

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