const btn_menu = document.querySelector('.btn_menu')
const btn_menu_close = document.querySelector('.btn_menu_close')
const menu_burguer = document.querySelector('.menu_phone')
btn_menu.addEventListener('click',()=>{
    menu_burguer.style.display='block'
    btn_menu.style.display='none'
    btn_menu_close.classList.remove('hiden')

})
btn_menu_close.addEventListener('click',()=>{
    menu_burguer.style.display="none"
    btn_menu.style.display='block'
    btn_menu_close.classList.add('hiden')
})