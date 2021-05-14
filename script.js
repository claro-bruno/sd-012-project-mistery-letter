const inputCartaTexto = document.querySelector('#carta-texto');
const paragrafoCartaGerada = document.querySelector('#carta-gerada');
const botaoCriarCarta = document.querySelector('#criar-carta');

function criarCarta() {
  let trecho = document.createElement('span');
  trecho.innerText = inputCartaTexto.value;
  paragrafoCartaGerada.appendChild(trecho);
}

botaoCriarCarta.addEventListener('click', criarCarta);
