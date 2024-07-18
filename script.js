let generateButton = document.getElementById('generate-button');
let passwordInput = document.getElementById('password-input');

function generatePassword() {
    let password = ""
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123!@#$%^&*()_+"

    for (let i = 0; i < 8; i++) {
        password += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    passwordInput.value = password
    console.log(password)
    // OK that was cool - console.log the return value from the function so it shows in the console!
}



// console.log(password)

generateButton.addEventListener('click', generatePassword)


