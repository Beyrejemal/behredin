const navMenu =document.getElementById('nav__menu'),
      navToggle =document.getElementById('nav__toggle'),
      navClose =document.getElementById('nav__close')

if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}      


if(navClose)(
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
)




///////////////////////////////////////////////////////////////////////////////////remove

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{ 
    const navMenu = document.getElementById('nav__menu')

    navMenu.classList.remove('show-menu')

}

navLink.forEach(n => n.addEventListener('click', linkAction))





/////////////////////////////////////////////////////////////////dark theme/////////////

const themeButton =document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedicon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(darkTheme) ? 'ri-moon-line' : 'ri-sun-lene'


if(selectedTheme){
    document.body.classList[selectedTheme=== 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedTheme=== 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



//////////////////////////////////scroll reveal animation////////////


const sr = ScrollReveal({
    origin: 'top',
    distanse: '60ox',
    duration: 2500,
    delay: 300,
})

sr.reveal(`.home__data, .home__info2, .project__container, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, { origin: 'top'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'bottom'})
sr.reveal(`.qualification__container, .services__container`, {interval: 100})