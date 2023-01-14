/*
window.onload = function () {
    const mobile_menu = document.querySelector('.mobile-nav')
    const menu_btn = document.querySelector('.hamburger')


    menu_btn.addEventListener('click', function (){
        mobile_menu.classList.toggle('is-active');
        menu_btn.classList.toggle('is-active');
    })
}*/
let btn = document.querySelector('.btn')

btn.addEventListener('click', function (){
    let text = document.querySelector('.text_input')
    let value = text.value
    let set_text = document.querySelector('.set_text')
    set_text.innerHTML = "<b>" + value + "</b>"
})