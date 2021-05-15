const inputCartaTexto = document.querySelector('#carta-texto');
const paragrafoCartaGerada = document.querySelector('#carta-gerada');
const botaoCriarCarta = document.querySelector('#criar-carta');
const classes = {
  estilo: ['magazine1', 'magazine2'],
  tamanho: ['medium', 'big', 'reallybig'],
  rotacao: ['rotateleft', 'rotateright'],
  inclinacao: ['skewleft', 'skewright'],
};
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
  for (let key in classes) {
    let numeroMagico = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    if (numeroMagico < classes[key].length) {
      trecho.classList.add(classes[key][numeroMagico]);
    }
  }
  paragrafoCartaGerada.appendChild(trecho);
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

function gerarCarta() {
  if (inputCartaTexto.value === '' || inputCartaTexto.value.trim().length === 0) {
    paragrafoCartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    paragrafoCartaGerada.innerText = '';
    removeCarta();
    criarCarta();
  }
}

botaoCriarCarta.addEventListener('click', gerarCarta);

function mudarClasses(event) {
  event.target.className = '';
  for (let key in classes) {
    let numeroMagico = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    if (numeroMagico < classes[key].length) {
      event.target.classList.add(classes[key][numeroMagico]);
    }
  }
}

paragrafoCartaGerada.addEventListener('click', mudarClasses);
