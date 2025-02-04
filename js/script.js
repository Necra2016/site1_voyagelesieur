const btPlus = document.querySelector('.js-plus');
const conTransport = document.querySelector('.conteneur-transport');

btPlus.addEventListener('click', ouvreferme);

function ouvreferme(){
    conTransport.classList.toggle('conteneur-transport-invisible');
}