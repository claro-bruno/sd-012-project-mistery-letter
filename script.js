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
// Cria uma array forçando possuir pelo menos 1 elemento obrigatório
function randomArray() {
  for (let index = 0; index < 2; index += 0) {
    let array = [randomN(1), randomN(1), randomN(1), randomN(1)];
    let t = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      t += array[index2];
    }
    if (t > 0) {return array }
  }
}

// Gera saída de classes randomizadas - a randomização do tamanho é obrigatória
function randomize() {
  const word = document.getElementsByTagName('span');
  for (let index = 0; index < (word.length); index += 1) {
    const arrayWordstyle = randomArray();
    for (let indexSt = 0; indexSt < (arrayWordstyle.length); indexSt += 1) {
      if (arrayWordstyle[indexSt] !== 0) {
        word[index].classList.add(arrayStyle[indexSt][randomF(arrayStyle[indexSt].length)])
      }
    }
  }
}
// Executa a ação de gerar a carta conforme os requisitos
function createSpan() {
  if (checkEmpty(letterText.value)) {
    letterPlace.innerText = '';
    const letterWords = letterText.value.split(' ');
    for (let index = 0; index < (letterWords.length); index += 1) {
      const word = letterWords[index].replace(/\s+/g, '');
      if (word !== '') { letterPlace.innerHTML += `<span>${word}</span>`; }
      if (index !== (letterWords.length - 1)) { letterPlace.innerHTML += ' '; }
    }
  }
  letterCount.innerText = letterPlace.innerText.split(' ').length;
  randomize();
}

createLetterBtn.addEventListener('click', createSpan);
