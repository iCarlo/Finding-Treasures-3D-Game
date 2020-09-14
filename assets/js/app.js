const welcomeScreen = document.querySelector(".welcomeScreen")
const gameForm = document.querySelector(".playerForm")
const input = document.querySelector(".playerForm input")

const instructionScreen = document.querySelector(".instructionScreen")
const instruction = document.querySelector(".instructionScreen span")

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
            instruction.textContent = playerName

            welcomeScreen.classList.add('disappearScreen')
            instructionScreen.classList.add('appearScreen')
        }
    })
}






