let sentence = sayHello("David")
sentence += ' !!!'

let sentence2 = sayHello("Paul")
sentence2 += ' !!!'

// Après un return, le code n'est pas exécuté
function sayHello(name) {
    if (name === "Paul") {
        return ''
    }

    return `Hello and welcome ${name}`
}


// écrire la fonction qui prend en paramètre un tableau et retourne la moyenne des éléments du tableau
const nbs = [21, 23, 24, 26, 83, 81, 1, 4]

function average() {

}