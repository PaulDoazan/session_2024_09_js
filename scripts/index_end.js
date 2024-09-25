import movies from './movies.json' with {type: 'json'}

// a. Logger le premier element du tableau movies
console.log(movies[0])

// b. Logger l'annee du 4eme element du tableau movie
console.log(movies[3])

// c. Logger le titre du dernier element du tableau movies
console.log(movies[movies.length - 1])

// d. Logger le titre du film qui a la meilleure note