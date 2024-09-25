import movies from './movies.json' with {type: 'json'}

// a. Logger le premier element du tableau movies
// console.log(movies[0])

// b. Logger l'annee du 4eme element du tableau movie
// console.log(movies[3])

// c. Logger le titre du dernier element du tableau movies
// console.log(movies[movies.length - 1])

// d. Logger le titre du film qui a la meilleure note
console.log(bestMovie(movies))

function bestMovie(arr) {
    let result = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].rate > result.rate) result = arr[i]
    }

    return result
}

// e. Logger le titre du film le plus ancien

// f. Logger un tableau de tous les titres de film qui ont au moins 3 acteurs

// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films

// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiee

// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur

// 4. écrire une fonction qui prend en paramètre le tableau movies, le nom d'un acteur, et qui me retourne un tableau des films dans lesquels joue cet acteur