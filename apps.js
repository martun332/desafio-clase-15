

addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu){
        btn_menu.addEventListener('click', () =>{
            const menu_itemsprueba = document.querySelector('.menu_itemsprueba')
            menu_itemsprueba.classList.toggle('show')
        })
    }
})