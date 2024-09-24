const myTitle = document.querySelector('.title')
const btn = document.querySelector('.button')

btn.addEventListener('click', onBtnClick)

let clicked = false

function onBtnClick() {
    clicked = !clicked

    if (clicked) {
        myTitle.textContent = "Bienvenue dans ma super App"
    } else {
        myTitle.textContent = "Au revoir !"
    }

}