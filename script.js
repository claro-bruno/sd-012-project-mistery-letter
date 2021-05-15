const inputCartaTexto = document.querySelector('#carta-texto');
const paragrafoCartaGerada = document.querySelector('#carta-gerada');
const botaoCriarCarta = document.querySelector('#criar-carta');
let palavra = '';

function removeCarta() {
  const palavras = document.querySelectorAll('span');
  for (let index = 0; index < palavras.length; index += 1) {
    paragrafoCartaGerada.removeChild(palavras[index]);
  }
}

function criarSpan() {
  const trecho = document.createElement('span');
  trecho.innerText = palavra;
  paragrafoCartaGerada.appendChild(trecho);
  trecho.style.padding = '5px';
  palavra = '';
}

function criarCarta() {
  for (let index = 0; index < inputCartaTexto.value.length; index += 1) {
    if (index === (inputCartaTexto.value.length - 1)) {
      palavra += inputCartaTexto.value[index];
      criarSpan();
    } else if (inputCartaTexto.value[index] !== ' ') {
      palavra += inputCartaTexto.value[index];
    } else {
      criarSpan();
    }
  }
}

botaoCriarCarta.addEventListener('click', function() {
  removeCarta();
  criarCarta();
});
