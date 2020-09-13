const welcomeScreen = document.querySelector(".welcomeScreen")
const gameForm = document.querySelector(".playerForm")
const input = document.querySelector(".playerForm input")

const instructionScreen = document.querySelector(".instructionScreen")
const instruction = document.querySelector(".instructionScreen p")

window.addEventListener('DOMContentLoaded', () => {
    alert('For better playing experience play this game on any wide screen devices')
})

let playerName = null


if (gameForm) {
    gameForm.addEventListener('submit', (e) => {
        e.preventDefault()
        playerName = input.value.trim()
        if (!playerName.length) {
            alert('please enter a valid name')
        } else {
            instruction.textContent = `Hi ${playerName}! your task is to find 5 crystal tresures in the mansion of Master Wong. These treasures are scared as they protect the world from chaos. Beware you only have 3mins to find them less, hidden ninjas will be there and will kill you. May the odds be with you!`

            welcomeScreen.classList.add('disappearScreen')
            instructionScreen.classList.add('appearScreen')
        }
    })
}






