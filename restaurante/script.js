

const btnAbreMenu =document.querySelector("#botao-abre-menu")
const btnFechaMenu =document.querySelector("#botao-fecha-menu")

const menu = document.querySelector("#mobile-menu")

btnAbreMenu.addEventListener('click', mostraMenu)
btnFechaMenu.addEventListener('click', fechaMenu)

function mostraMenu(){
    menu.style.display = 'flex'
    btnAbreMenu.style.display = 'none'
    btnFechaMenu.style.display = 'block'
    document.querySelector('.banner').style.display = 'none'
    document.querySelector('.menu').style.background = '#283540'
}

function fechaMenu(){
    menu.style.display = 'none'
    btnAbreMenu.style.display = 'block'
    btnFechaMenu.style.display = 'none'
    document.querySelector('.banner').style.display = 'block'
    document.querySelector('.menu').style.background = 'transparent'
}


//mostra seção do cardapio
const btnPrincipal = document.querySelector('#btn-principal');
const btnSobremesa = document.querySelector('#btn-sobremesa');
const btnBebidas = document.querySelector('#btn-bebidas');

const principal = document.querySelector('.prato-principal');
const sobremesa = document.querySelector('.sobremesa');
const bebidas = document.querySelector('.bebidas');

btnPrincipal.addEventListener('click', mostraPrincipal);
btnSobremesa.addEventListener('click', mostraSobremesa);
btnBebidas.addEventListener('click', mostraBebidas);

function mostraPrincipal(){
    principal.style.display = 'block';
    bebidas.style.display = 'none';
    sobremesa.style.display = 'none';
}

function mostraSobremesa(){
    principal.style.display = 'none';
    bebidas.style.display = 'none';
    sobremesa.style.display = 'block';
}

function mostraBebidas(){
    principal.style.display = 'none';
    bebidas.style.display = 'block';
    sobremesa.style.display = 'none';
}
