function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    if (isNaN(length) || length <= 0 || length >= 15) {
        alert('Please enter a valid number greater than 0 for the password length and less than 15');
        return;
    }

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let allChars = "";
    if (includeUppercase) allChars += uppercase;
    if (includeLowercase) allChars += lowercase;
    if (includeNumbers) allChars += numbers;
    if (includeSymbols) allChars += symbols;

    if (allChars === "") {
        alert('Please select at least one character type.');
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById('display').value = password;
}

function copyToClipboard() {
    const passwordField = document.getElementById('display');
    passwordField.disabled = false; 
    passwordField.select();
    document.execCommand('copy');
    passwordField.disabled = true; 
    alert('Password copied to clipboard!');
}
