let score1 = 0
let score2 = 0

const button1 = document.querySelector('#player1')
const button2 = document.querySelector('#player2')
const reset = document.querySelector('#reset')
const count1 = document.querySelector('#count1')
const count2 = document.querySelector('#count2')
const upTo = document.querySelector('#score')

button1.addEventListener('click' , function(){
    score1++;
    count1.textContent = score1;
    console.log(count1.textContent);
    if(score1 === parseInt(upTo.value, 10)){
        console.log('PLAYER 1 you win');
    button1.disabled = true;
    button2.disabled = true;
    count1.classList.toggle('green')
    count2.classList.toggle('red')
    }
})

button2.addEventListener('click' , function(){
    score2++;
    count2.textContent = score2;
    console.log(count2.textContent);
    if(score2 === parseInt(upTo.value, 10)){
        console.log('PLAYER 2 you win');
        button1.disabled = true;
        button2.disabled = true;
        count2.classList.toggle('green')
        count1.classList.toggle('red')
    }
})

reset.addEventListener('click', function(){
    score1 = 0
    score2 = 0
    count1.textContent = score1
    count2.textContent = score2
    console.log('RESET COUNT')
    button1.disabled = false;
    button2.disabled = false;
    count1.classList.remove('green', 'red')
    count2.classList.remove('red', 'green')
})