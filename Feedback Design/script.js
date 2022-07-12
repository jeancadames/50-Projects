const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.rating-container')
const sendBtn = document.getElementById('send')
const panels = document.getElementById('panel')

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e)=> {
    if(e.target.parentNode.classList.contains('rating')){
        removeActive();
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', (e) => {
    panels.innerHTML = `
        <i class="fa fa-heart"></i>
        <strong>Thank You</strong>
        <br>
        <stron>Feedback: ${selectedRating}</strong>
        <p>We will use your feedback to improve our customer</p>
    `
})

function removeActive(){
    for(let i =0; i< ratings.length; i++){
        ratings[i].classList.remove('active')
    }
}