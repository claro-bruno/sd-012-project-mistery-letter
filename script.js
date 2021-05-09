const createLetterBtn = document.getElementById('criar-carta');
const letterPlace = document.getElementById('carta-gerada');
const letterText = document.getElementById('carta-texto');
const arrayStyle = ['newspaper magazine1 magazine2', 'medium big reallybig', 'rotateleft rotateright', 'skewleft skewright'];
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
// Gera saída de classes randomizadas - a randomização do tamanho é obrigatória
function randomize() {
  const arrayLetterstyle = [randomN(1), 1, randomN(1), randomN(1)];
  let stylesClass = '';
  for (let index = 0; index < arrayLetterstyle.length; index += 1) {
    if (arrayLetterstyle[index] !== 0) {
      const thisStyle = arrayStyle[index].split(' ');
      stylesClass = `${stylesClass} ${thisStyle[randomF(thisStyle.length)]}`;
    }
  }
  return stylesClass;
}
// Executa a ação de gerar a carta conforme os requisitos
function createSpan() {
  if (checkEmpty(letterText.value)) {
    letterPlace.innerText = '';
    const letterWords = letterText.value.split(' ');
    for (let index = 0; index < (letterWords.length); index += 1) {
      const word = letterWords[index].replace(/\s+/g, '');
      if (word !== '') { letterPlace.innerHTML += `<span class='${randomize()}'>${word}</span>`; }
      if (index !== (letterWords.length - 1)) { letterPlace.innerHTML += ' '; }
    }
  }
  letterCount.innerText = letterPlace.innerText.split(' ').length;
}

createLetterBtn.addEventListener('click', createSpan);
