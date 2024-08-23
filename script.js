let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts=10;

document.getElementById('checkButton').addEventListener('click', function() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    attempts++;
    let message = '';
    
    if(attempts<maxAttempts){
        if(userGuess===randomNumber)
        {
          window.location.href='congratulations.html';
        } 
        else if(userGuess<randomNumber)
        {
            message ='Try with a larger number';

        }
        else
        {
            message ='Try with a smaller number';
        }
    } 
    else if(attempts===maxAttempts)
        {
        if(userGuess===randomNumber){
            window.location.href='congratulations.html';
        }
        else{
            window.location.href='trynxttime.html';
        }
    }
    
    document.getElementById('message').textContent = message;
    document.getElementById('attempts').textContent = attempts;
});

document.getElementById('resetButton').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('guessInput').value = '';
});
