const hamburguer = document.querySelector(".hamburguer");
const navMenu = document = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
hamburguer.classList.toggle('active');
navMenu.classList.toggle('active');
})

const slide = document.querySelectorAll(".container-card")
const btnVoltar = document.getElementById("prox-btn")
const btnProx = document.getElementById("voltar-btn")

let slideAtivo = 0;

function esconderSlide() {
    slide.forEach(item => item.classList.remove('on'))
}

function mostrarSlide() {
    slide[slideAtivo].classList.add('on')
}

function proxSlide() {
    esconderSlide()
    if(slideAtivo === slide.length-1){
        slideAtivo = 0
    } else {
        slideAtivo++
    }
    mostrarSlide()
}

function voltarSlide() {
    esconderSlide()
    if(slideAtivo === 0){
        slideAtivo = slide.length-1
    } else {
        slideAtivo--
    }
    mostrarSlide()
}

btnProx.addEventListener('click', proxSlide)
btnVoltar.addEventListener('click', voltarSlide)

console.log(slide)