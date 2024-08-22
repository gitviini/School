const menu = document.querySelector('#menu')
const container_menu = document.querySelector(".container-menu")


menu.onclick = () =>{
    menu.classList.toggle('click')
    container_menu.classList.toggle('click')
}