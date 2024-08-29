// Definindo constantes
const menu = document.querySelector('#menu')
const container_menu = document.querySelector(".container_menu")
const sections = document.querySelectorAll('section')
const cards = document.querySelector('.cards')
const main = document.querySelector('main')

// Criando link de class button para cada section 

sections.forEach(section=>{
    let a = document.createElement('a')
    a.setAttribute('class','button')
    a.setAttribute('href',`#${section.getAttribute('id')}`)
    a.innerHTML = section.getAttribute('name')
    // (Modo mobile) Quando houver um click em algum link o menu se fechará
    a.onclick = () =>{
        container_menu.classList.remove('click')
        menu.classList.remove('click')
    }
    container_menu.appendChild(a)
})

// Quando há um click no menu hambúrguer ele troca de estado (aberto / fechado)
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