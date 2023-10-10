const trocarTema = document.getElementById('trocar-tema');
const body = document.body;
const sol = document.querySelector('.tema-sol')
const lua = document.querySelector('.tema-lua')
const servicos = document.querySelector('.servicos')
const contate = document.querySelector('.contate')
const button = document.querySelector('.button')
const img = document.querySelector('.serrrrvicos')
const img2 = document.querySelector('.ser2')
const img3 = document.querySelector('.ser3')
const img4 = document.querySelector('.ser4')
const img5 = document.querySelector('.ser5')
const img6 = document.querySelector('.ser6')


trocarTema.addEventListener('click', () => {
    body.classList.toggle('tema-escuro');
    servicos.style.backgroundColor = ('#bfb6c1')
    contate.style.backgroundColor = ('#bfb6c1')
    button.style.backgroundColor = ('#461050')
    img.style.boxShadow = '5px 5px #a1a0a1'
    img2.style.boxShadow = '5px 5px #a1a0a1'
    img3.style.boxShadow = '5px 5px #a1a0a1'
    img4.style.boxShadow = '5px 5px #a1a0a1'
    img5.style.boxShadow = '5px 5px #a1a0a1'
    img6.style.boxShadow = '5px 5px #a1a0a1'
    trocarTema.classList.toggle('botao-escuro')
})
