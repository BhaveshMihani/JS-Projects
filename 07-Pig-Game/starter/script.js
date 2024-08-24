'use strict';

const score0EL = document.querySelector('#score--0')
const score1EL = document.querySelector('#score--1')
const diceEl =document.querySelector('.dice')
const btnRoll = document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')

const current0El = document.querySelector('#current--')
const current1El = document.querySelector('#current--1')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

var playing = true 
score0EL.textContent = 0;
score1EL.textContent = 0;
let currentScore = 0
let activeplayer = 0
const scores = [0,0]

const switchplayer = function(){
    document.querySelector(`#current--${activeplayer}`).textContent=0;
        activeplayer = activeplayer === 0 ? 1:0
        currentScore = 0
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
}

diceEl.classList.add('hidden');
btnRoll.addEventListener('click',function(){
    if(playing){

        const dice = Math.trunc(Math.random()*6)+1
        diceEl.src = `dice-${dice}.png`;
        diceEl.classList.remove('hidden')
        
        if(dice !== 1){
            currentScore += dice;
            document.querySelector(`#current--${activeplayer}`).textContent=currentScore;
        }
        else{
            switchplayer()
        }
    }
})
    
    btnHold.addEventListener('click',function(){
        if(playing){

            scores[activeplayer] += currentScore;
            document.querySelector(`#score--${activeplayer}`).textContent=scores[activeplayer];

    if(scores[activeplayer] >= 100){
        playing=false
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--remove');
    }
    else{
        switchplayer()
    }   
}
})

btnNew.addEventListener('click',function(){
    location.reload()
})