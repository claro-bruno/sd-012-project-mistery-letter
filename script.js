const createLetterBtn = document.getElementById('criar-carta');
const letterPlace = document.getElementById('carta-gerada');
const letterText = document.getElementById('carta-texto');
const arrayStyle = [['newspaper', 'magazine1', 'magazine2'], ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'], ['skewleft', 'skewright']];
const letterCount = document.getElementById('carta-contador');

// Checa se a carta está vazia ou cheia de espaços em brancos sem texto
function checkEmpty(letter) {
  const check = letter.replace(/\s+/g, '');
  if (check === '') {
    letterPlace.innerText = 'Por favor, digite o conteúdo da carta.';
    return false;
  }
  return true;
}

// Randomiza com arredondamento
function randomN(max) {
  return (Math.round(Math.random() * max));
}
// Randomiza sempre jogando para baixo
function randomF(max) {
  return (Math.floor(Math.random() * max));
}
// Cria uma array randomica forçando possuir pelo menos 1 elemento obrigatório
function randomArray() {
  while (true) {
    const array = [randomN(1), randomN(1), randomN(1), randomN(1)];
    let t = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      t += array[index2];
    }
    if (t > 0) { return array; }
  }
}

// Gera e acrescenta classes a todos os <spans> do documento de forma randômica
function putRandomclass (elmnt) {
  const arrayWordstyle = randomArray();
  for (let index = 0; index < (arrayWordstyle.length); index += 1) {
    if (arrayWordstyle[index] !== 0) {
      elmnt.classList.add(arrayStyle[index][randomF(arrayStyle[index].length)]);
    }
  }
}

function randomize() {
  const word = document.getElementsByTagName('span');
  for (let index = 0; index < (word.length); index += 1) {
    putRandomclass(word[index]);
  }
}

// Executa a ação de gerar a carta e contador conforme os requisitos
function createSpan(elmnt,index) {
  const word = elmnt[index].replace(/\s+/g, '');
  if (word !== '') { letterPlace.innerHTML += `<span>${word}</span>`; }
  if (index !== (elmnt.length - 1)) { letterPlace.innerHTML += ' '; }
}

function createLetter() {
  if (checkEmpty(letterText.value)) {
    letterPlace.innerText = '';
    const letterWords = letterText.value.split(' ');
    for (let index = 0; index < (letterWords.length); index += 1) {
      createSpan(letterWords, index);
    }
  }
  letterCount.innerText = letterPlace.innerText.split(' ').length;
  randomize();
}

createLetterBtn.addEventListener('click', createLetter);
