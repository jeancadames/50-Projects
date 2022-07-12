const img = document.querySelectorAll('.content');
const listEl = document.querySelectorAll('li');

listEl.forEach((list, idx) => {
    list.addEventListener('click', () => {
        removeActive()
        hideImage()
        list.classList.add('active')
        img[idx].classList.add('show')
    })
    console.log(idx)
})

function removeActive(){
    listEl.forEach(list => {
        list.classList.remove('active');
    })
}

function hideImage(){    
    img.forEach(img => {
        img.classList.remove('show');
    })
}
    
    