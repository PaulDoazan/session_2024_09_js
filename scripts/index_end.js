import movies from './movies.json' with {type: 'json'}

// a. Logger le premier element du tableau movies
// console.log(movies[0])

// b. Logger l'annee du 4eme element du tableau movie
// console.log(movies[3])

// c. Logger le titre du dernier element du tableau movies
// console.log(movies[movies.length - 1])

// d. Logger le titre du film qui a la meilleure note
// console.log(bestMovie(movies))
// .sort()
bestMovie(movies)
function bestMovie(arr) {
    let result = arr[0]

    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i].rate > result.rate) result = arr[i]
    // }

    arr.sort((a, b) => {
        return a.rate - b.rate
    })

    console.log('Tri de tableau : ', arr)

    return arr[0]
}

// e. Logger le titre du film le plus ancien
console.log(oldestMovie(movies))

function oldestMovie(arr) {
    let result = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].year < result.year) result = arr[i]
    }

    return result
}

// f. Logger un tableau de tous les titres de film qui ont au moins 3 acteurs
console.log(movieWithAtleast3actors(movies))
function movieWithAtleast3actors(arr) {
    let results = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].actors.length >= 3) results.push(arr[i].title)
    }

    return results
}

// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films
console.log(getMovieTitles(movies))
function getMovieTitles(arr) {
    let titles = []

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        titles.push(element.title)
    }

    return titles
}

// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiee
console.log(moviesByYear(movies, 1980))
function moviesByYear(arr, yearParam) {
    let results = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element.year === yearParam) results.push(element.title)
    }
    return results
}

// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur
console.log(moviesByDirector(movies, "Christopher Nolan"))
function moviesByDirector(arr, directorName) {
    let results = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element.director === directorName) results.push(element.title)
    }
    return results
}

// 4. écrire une fonction qui prend en paramètre le tableau movies, le nom d'un acteur, et qui me retourne un tableau des films dans lesquels joue cet acteur
console.log(moviesByActor(movies, "Brad Pitt"))
function moviesByActor(arr, actorName) {
    let results = []
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].actors.includes(actorName)) results.push(arr[index])
    }
    return results
}


// ARROW FUNCTION, une autre syntaxe pour déclarer des fonctions, attention à l'ordre entre déclaration et exécution
const myFunction = () => {
    console.log('hello from arrow function')
}

