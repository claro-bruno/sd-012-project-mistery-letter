const inputCartaTexto = document.querySelector('#carta-texto');
const paragrafoCartaGerada = document.querySelector('#carta-gerada');
const botaoCriarCarta = document.querySelector('#criar-carta');

function criarCarta() {
  let palavra = '';
  for (let index = 0; index < inputCartaTexto.value.length; index += 1) {
     if (index === (inputCartaTexto.value.length - 1)) {
      palavra += inputCartaTexto.value[index];
      let trecho = document.createElement('span');
      trecho.innerText = palavra;
      paragrafoCartaGerada.appendChild(trecho);
      trecho.style.padding = '5px';
      palavra = '';
    } else if (inputCartaTexto.value[index] !== ' ') {
      palavra += inputCartaTexto.value[index];
    } else {
      let trecho = document.createElement('span');
      trecho.innerText = palavra;
      paragrafoCartaGerada.appendChild(trecho);
      trecho.style.padding = '5px';
      palavra = '';
    }
  }
}

botaoCriarCarta.addEventListener('click', criarCarta);
