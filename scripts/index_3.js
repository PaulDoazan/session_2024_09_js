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


// EXERCICES PIZZAS

const pizzas = [
    {
        name: 'Margherita',
        price: 11.50,
        ingredients: ['mozzarella', 'tomate', 'basilic ', "huile d'olive"],
        baseTomate: true
    },
    {
        name: 'Regina',
        price: 12,
        ingredients: ['mozzarella', 'tomate', 'origan', 'jambon', 'champignons'],
        baseTomate: true
    },
    {
        name: '4 saisons',
        price: 15,
        ingredients: ['artichaut', 'courgette', 'poivron', 'mozzarella', 'oignon rouge'],
        baseTomate: true
    },
    {
        name: 'Napolitaine',
        price: 14,
        ingredients: ['tomate', 'mozzarella', 'anchois', 'olives noires', 'origan'],
        baseTomate: true
    },
    {
        name: '4 fromages',
        price: 16,
        ingredients: ['tomate', 'mozzarella', 'emmental', 'comté', 'roquefort'],
        baseTomate: true
    },
    {
        name: 'Montagnarde',
        price: 19,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: 'Chèvre-miel',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel'],
        baseTomate: false
    },
    {
        name: 'Hawaïenne',
        price: 17,
        ingredients: ['mozzarella', 'tomate', 'jambon', 'ananas'],
        baseTomate: true
    }
]

// 1. écrire une fonction qui prend en parametre un tableau, cette fonction retourne tous les .name des elements du tableau dans un tableau names[]
// console.log(getPizzasNames(pizzas))

function getPizzasNames(arr) {
    let names = []

    for (let i = 0; i < arr.length; i++) {
        names.push(arr[i].name);
    }

    return names
}

// 2. Ecrire une fonction qui prend en parametre le tableau pizzas et qui retourne le prix moyen des pizzas

// console.log(getAveragePrice(pizzas))
function getAveragePrice(arr) {
    let totalPrice = 0;

    for (let i = 0; i < arr.length; i++) {
        totalPrice += arr[i].price;
    }

    let avg = totalPrice / arr.length

    // méthode équivalente au Math.round()
    return avg.toFixed(2)
}

// 3. Ecrire une fonction qui prend en parametre un nom de pizza et qui retourne un tableau des ingredients de cette pizza
// console.log(getPizzaByName("Montagnarde"))

// BREAK permet de mettre à fin à une boucle for
function getPizzaByName(pizzaName) {
    let result
    for (let i = 0; i < pizzas.length; i++) {
        if (pizzas[i].name === pizzaName) {
            result = pizzas[i].ingredients
            break
        }
    }

    result.push('poivrons')
    return result
}

// 4. Ecrire une fonction qui prend en parametre un ingredient et un tableau de pizzas, la fonction retourne un tableau des noms des pizzas qui ont cet ingredient
// la méthode de tableau nécessaire => .includes()
// console.log(getPizzasByIngredient(pizzas, 'jambon'))
function getPizzasByIngredient(arr, ingredientName) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].ingredients.includes(ingredientName)) {
            result.push(arr[i].name)
        }
    }

    return result
}

// 5. Ecrire une fonction qui prend en parametre un tableau de pizzas et qui retourne un tableau de tous les ingredients, en evitant les elements dupliques
// Dans un premier temps, faire l'exercice avec les éléments dupliqués

console.log(getAllIngredients(pizzas))

function getAllIngredients(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        // une deuxième boucle for imbriquée pour parcourir les ingrédients de chaque pizza
        for (let j = 0; j < arr[i].ingredients.length; j++) {
            if (!result.includes(arr[i].ingredients[j])) {
                result.push(arr[i].ingredients[j])
            }
        }
    }

    return result
}