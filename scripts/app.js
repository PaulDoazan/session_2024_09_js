const myBtn = document.querySelector('.button')
const myBody = document.querySelector('body')

let bRadius = 10
let bColor = "red"

// Mettre à jour le backgroundColor avec les couleurs suivantes de manière successive
let count = 0
const colors = ["rgb(255, 203, 203)", "#ffb5b5", "#407088", "#132743"]

const myRandomNb = Math.random()
console.log(myRandomNb)

myBtn.addEventListener('click', function () {
    // on alterne entre borderRadius à 10 et 20
    if (bRadius === 10) {
        bRadius = 20
    } else {
        bRadius = 10
    }
    myBtn.style.borderRadius = `${bRadius}px`

    // modification du body.style.backgroundColor

    // if (bColor === "red") {
    //     bColor = "green"
    // } else {
    //     bColor = "red"
    // }

    count++
    const index = count % colors.length
    myBody.style.backgroundColor = colors[index]
})