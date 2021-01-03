const body = document.body
const nav = document.querySelector('nav')
const burger = document.querySelector('.burger')

//Affiche/cache le menu de navigation lorsque on clique sur l'icone
burger.addEventListener('click', () => {
  if(nav.classList.contains('active')){
    body.removeAttribute('scroll')
    nav.classList.remove('active')
  }else{
    body.setAttribute('scroll', true)
    nav.classList.add('active')
  }
})

