const input = document.getElementById('carta-texto');
const buttonCreate = document.getElementById('criar-carta');
const geneteLetter = document.getElementById('carta-gerada');
let classes = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];

const styleClass = ['newspaper', 'magazine1', 'magazine2'];
const sizeClass = ['medium', 'big', 'reallybig'];
const rotationClass = ['rotateleft', 'rotateright'];
const inclClass = ['skewleft', 'skewright'];

function addRandomStyle() {
  const r3 = Math.floor(Math.random() * 3);
  const r2 = Math.floor(Math.random() * 2);
  return `${styleClass[r3]} ${sizeClass[r3]} ${rotationClass[r2]} ${inclClass[r2]}`;
  }

let letterSplited;

buttonCreate.addEventListener('click', () => {
  letterSplited = input.value.split(' ');
  geneteLetter.innerText = '';
  for (let index = 0; index < letterSplited.length; index += 1) {
    const createSpan = document.createElement('span');
    if (input.value === '') {
      geneteLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
    createSpan.innerHTML = letterSplited[index];
    createSpan.className = addRandomStyle();
    geneteLetter.appendChild(createSpan);
    }
  }
});
