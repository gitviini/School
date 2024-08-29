const menu = document.querySelector('#menu')
const container_menu = document.querySelector(".container_menu")
const sections = document.querySelectorAll('section')
const cards = document.querySelector('.cards')
const main = document.querySelector('main')

sections.forEach(section=>{
    let a = document.createElement('a')
    a.setAttribute('class','button')
    a.setAttribute('href',`#${section.getAttribute('id')}`)
    a.innerHTML = section.getAttribute('name')
    a.onclick = () =>{
        container_menu.classList.remove('click')
        menu.classList.remove('click')
    }
    container_menu.appendChild(a)
})

menu.onclick = () =>{
    if(menu.classList.value == 'click'){
        menu.classList.remove('click')
        container_menu.classList.remove('click')
    }
    else{
        menu.classList.add('click')
        container_menu.classList.add('click')   
    }
}