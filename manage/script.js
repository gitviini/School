const menu = document.querySelector('#menu')
const container_menu = document.querySelector(".container_menu")
const sections = document.querySelectorAll('section')
const cards = document.querySelector('.cards')
const main = document.querySelector('main')

cards.onload = () =>{
    
}

sections_list = {}

sections.forEach(section=>{
    let a = document.createElement('a')
    a.setAttribute('class','button')
    a.setAttribute('href',`#${section.getAttribute('id')}`)
    a.innerHTML = section.getAttribute('name')
    a.onclick = () =>{
        container_menu.classList.remove('click')
    }
    container_menu.appendChild(a)
})

menu.onclick = () =>{
    menu.classList.toggle('click')
    container_menu.classList.toggle('click')
}