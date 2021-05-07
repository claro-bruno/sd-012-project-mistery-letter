const gerarTexto = document.querySelector('#criar-carta');
const text = document.querySelector('#carta-texto');
const paragraph = document.querySelector('#carta-gerada');
const contador = document.querySelector('#carta-contador');

function contarPalavras() {
  const spans = document.querySelectorAll('span');
  contador.innerHTML = spans.length;
}

function createParagraph(splitWords) {
  for (let i = 0; i < splitWords.length; i += 1) {
    if (splitWords[i] !== '') {
      paragraph.innerHTML += `<span>${splitWords[i]}</span> `;
    }
  }
  contarPalavras();
}

function makeLetter(splitWords) {
  if (paragraph.innerHTML === '') {
    createParagraph(splitWords);
  } else {
    paragraph.innerHTML = '';
    makeLetter(splitWords);
  }
}

function validateLetter() {
  const checkEmpty = text.value.replace(/^\s+/, '').replace(/\s+$/, '');
  const splitWords = checkEmpty.split(' ');
  if (checkEmpty === '') {
    paragraph.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    makeLetter(splitWords);
  }
}

gerarTexto.addEventListener('click', validateLetter);
