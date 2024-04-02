const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessField = document.getElementById('guessField');

const message = document.getElementById('message');

function checkGuess() {
    const userGuess = parseInt(guessField.value);
    
    if (userGuess === randomNumber) {
        message.textContent = 'Congratulations! You guessed the correct number!';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        message.textContent = 'Too high! Try again.';
    }
        guessField.value = '';
}
