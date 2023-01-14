const btnShowPassword = document.querySelector("#generate")
const generateButton = document.querySelector('.generate-btn')
const divGeratorPassword = document.querySelector(".generator-password")
const passwordInput = document.querySelector('.password-box input')
const copyIcon = document.querySelector('.password-box .fa-copy')
const numberRange = document.querySelector('.range-box .number-range')
const rangeInput = document.querySelector('.range-box input')

let Characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789(){}[]=<>/,.!@#$%&*+-"

const generatePassword = () => {
    let newPassword = ''

    for (let i = 0; i < rangeInput.value; i++) {
        let randomValues = Math.floor(Math.random() * Characters.length) 
        newPassword += Characters[randomValues]
    }
    passwordInput.value = newPassword
}

btnShowPassword.addEventListener("click", () => {
    divGeratorPassword.classList.toggle('hide')
})

rangeInput.addEventListener('input', () => {
    numberRange.innerText = rangeInput.value
    generatePassword()
})

copyIcon.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordInput.value)
})

generatePassword()
generateButton.addEventListener('click', generatePassword)