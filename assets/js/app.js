const welcomeScreen = document.querySelector(".welcomeScreen")
const gameForm = document.querySelector(".playerForm")
const input = document.querySelector(".playerForm input")
const enterBtn = document.querySelector(".enter-btn")

const instructionScreen = document.querySelector(".instructionScreen")
const instruction = document.querySelector(".instructionScreen p")
const startBtn = document.querySelector(".start-btn")

let playerName = null

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
