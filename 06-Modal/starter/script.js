'use strict';
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal')

const openmodal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closemodel = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click',openmodal)
}
btnCloseModal.addEventListener('click', closemodel)
overlay.addEventListener('click', closemodel)
document.addEventListener('keydown',function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closemodel()
    }
})