'use strict';

let secretnumber = Math.trunc(Math.random() * 21)
console.log(secretnumber)


var scroe = 20

const displaymessage = function(message){
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        if (scroe > 1) {
        displaymessage('⛔ No Number')
            // document.querySelector('.message').textContent = '⛔ No Number'
            scroe = scroe - 1
            document.querySelector('.score').textContent = scroe
        }
        else {
            displaymessage('👎🏻 You Lost the Game')
            // document.querySelector('.message').textContent = '👎🏻 You Lost the Game'
            document.querySelector('.score').textContent = 0
        }
    }
    
    else if (guess === secretnumber) {
        displaymessage('🥳 Correctr Number')
        // document.querySelector('.message').textContent = '🥳 Correctr Number'
        document.querySelector('.number').textContent = secretnumber;
        document.querySelector('body').style.backgroundColor= '#60b347'
    }

    else if(guess !== secretnumber){
        if (scroe > 1) {
            (guess > secretnumber) ? displaymessage('📈 Too High!'): displaymessage('📉 Too Low!');
            // document.querySelector('.message').textContent =(guess > secretnumber) ? '📈 Too High!': '📉 Too Low!';
            scroe = scroe - 1
            document.querySelector('.score').textContent = scroe
        }
        else {
            displaymessage('👎🏻 You Lost the Game')
            // document.querySelector('.message').textContent = '👎🏻 You Lost the Game'
            document.querySelector('.score').textContent = 0
        }
    }
    
    // else if (guess > secretnumber) {
    //     if (scroe > 1) {
        //         document.querySelector('.message').textContent = '📈 Too High!'
        //         scroe = scroe - 1
        //         document.querySelector('.score').textContent = scroe
        //     }
        //     else {
            //         document.querySelector('.message').textContent = '👎🏻 You Lost the Game'
    //         document.querySelector('.score').textContent = 0
    //     }
    // }
    // else if (guess < secretnumber) {
        //     if (scroe > 1) {
    //         document.querySelector('.message').textContent = '📉 Too Low!'
    //         scroe = scroe - 1
    //         document.querySelector('.score').textContent = scroe
    //     }
    //     else {
        //         document.querySelector('.message').textContent = '👎🏻 You Lost the Game'
        //         document.querySelector('.score').textContent = 0
        //     }
        // }
    })

document.querySelector('.again').addEventListener('click',function(){

    location.reload()
    // scroe = 20
    // secretnumber = Math.trunc(Math.random() * 21)
    // displaymessage('Start guessing...')
    // document.querySelector('.number').textContent = '?';
    // const guess = Number(document.querySelector('.guess').value='')
    // document.querySelector('body').style.backgroundColor= '#222'
})