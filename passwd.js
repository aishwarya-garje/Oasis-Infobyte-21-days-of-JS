const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

function generatePassword(length, useLowercase, useUppercase, useNumbers, useSpecialChars) {
    let charset = '';
    if (useLowercase) charset += lowercaseChars;
    if (useUppercase) charset += uppercaseChars;
    if (useNumbers) charset += numberChars;
    if (useSpecialChars) charset += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generate');

    generateButton.addEventListener('click', function () {
        const length = document.getElementById('length').value;
        const useLowercase = document.getElementById('lowercase').checked;
        const useUppercase = document.getElementById('uppercase').checked;
        const useNumbers = document.getElementById('numbers').checked;
        const useSpecialChars = document.getElementById('special-chars').checked;
        const generatedPassword = generatePassword(length, useLowercase, useUppercase, useNumbers, useSpecialChars);
    document.getElementById('password').value = generatedPassword;

    const copyButton = document.getElementById('copy');
      copyButton.addEventListener('click', function () {
        const passwordField = document.getElementById('password');
        passwordField.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    });
    
    const clearButton = document.getElementById('clear');
     clearButton.addEventListener('click', function () {
        document.getElementById('password').value = '';
    });

        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
        
        setTimeout(function () {
            successMessage.style.display = 'none';
        }, 3000); 
    });
});

