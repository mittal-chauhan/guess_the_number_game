'use strict';

// document.querySelector('.message').textContent;
// document.querySelector('.number').textContent = 47;

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = 'No Number';
    }else if(guess === number){

        document.querySelector('.message').textContent = 'CORRECT NUMBER!!';
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = 'green';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;

        }
    }else if(guess > number){
        if(score > 0){
            document.querySelector('.message').textContent = '📈TOO HIGH..';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '😥You lost the game!'; 
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }else if(guess < number){
        if (score > 0){
            document.querySelector('.message').textContent = '📉TOO LOW..';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '😥You lost the game!'; 
            document.querySelector('body').style.backgroundColor = 'red';
        }  
    }
})

document.querySelector('.again').addEventListener
    ('click', function() {
        score = 20;
        number = Math.trunc(Math.random() * 20) + 1;

        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
    })

// function refreshPage(){
//     window.location.reload();
// }