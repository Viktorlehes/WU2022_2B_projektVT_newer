let accordians = document.querySelectorAll('.FAQ_question')
let FAQ_id = document.querySelectorAll('.FAQ')

accordians.forEach((e, i) => {
    e.addEventListener('click', (e) => {
        e.preventDefault()
        accordians[i].classList.toggle('Button_selected')
        FAQ_id[i].classList.toggle('FAQ_selected')
    })
})