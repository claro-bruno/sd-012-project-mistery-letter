const gerarTexto = document.querySelector('#criar-carta');
const text = document.querySelector('#carta-texto');
const paragraph = document.querySelector('#carta-gerada');
const contador = document.querySelector('#carta-contador');

// Estilos do CSS
const estilos = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];

function whileRoll() {
  const quantidadeClasses = Math.ceil(Math.random() * 3 + 1);
  const classPosition = [];
  while (classPosition.length < quantidadeClasses) {
    const random = Math.floor(Math.random() * 4);
    if (!classPosition.includes(random)) {
      classPosition.push(random);
    }
    if (classPosition.length === quantidadeClasses) {
      break;
    }
  }
  return classPosition;
}

function addClasses(item) {
  const whichClass = whileRoll();
  for (let i = 0; i < whichClass.length; i += 1) {
    const styleSelection = estilos[i][Math.floor(Math.random() * estilos[i].length)];
    item.classList.add(styleSelection);
  }
}

function selectSpansCustomize() {
  const allSpans = document.querySelectorAll('span');
  for (let i = 0; i < allSpans.length; i += 1) {
    addClasses(allSpans[i]);
  }
}

function contarPalavras() {
  const spans = document.querySelectorAll('span');
  contador.innerHTML = spans.length;
  selectSpansCustomize();
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
