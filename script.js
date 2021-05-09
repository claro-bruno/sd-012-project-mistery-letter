const content = document.getElementById('content');
content.innerHTML = '';

const cartaTexto = document.createElement('input');
cartaTexto.id = 'carta-texto';
content.appendChild(cartaTexto);

const cartaGerada = document.createElement('p');
cartaGerada.id = 'carta-gerada';
content.appendChild(cartaGerada);

function splitString(string, char) {
  const array = [];
  let word = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === char) {
      array.push(word);
      word = '';
    } else {
      word += string[index];
    }
  }
  array.push(word);
  return array;
}

function map(array, callback) {
  const arrayResult = [];

  for (let index = 0; index < array.length; index += 1) {
    const result = callback(array[index]);
    arrayResult.push(result);
  }
  return arrayResult;
}

function join(array, char) {
  let string = '';

  for (let index = 0; index < array.length; index += 1) {
    if (index === array.length - 1) {
      string += array[index];
      break;
    }
    string += array[index] + char;
  }
  return string;
}

const styleClasses = [
  'newspaper',
  'magazine1',
  'magazine2',
  'newspaper',
  'magazine1',
  'magazine2',
];
const sizeClasses = [
  'medium',
  'big',
  'reallybig',
  'medium',
  'big',
  'reallybig',
];
const rotateClasses = [
  'rotateleft',
  'rotateright',
  'rotateleft',
  'rotateright',
];
const slopeClasses = ['skewleft', 'skewright', 'skewleft', 'skewright'];

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function classDraw() {
  const classStyle = styleClasses[randomNumber(0, 5)];
  const classSize = sizeClasses[randomNumber(0, 5)];
  const classRotate = rotateClasses[randomNumber(0, 3)];
  const classSlope = slopeClasses[randomNumber(0, 3)];
  return `${classStyle} ${classSize} ${classRotate} ${classSlope}`;
}

function toSpan(string) {
  const classes = classDraw();
  return `<span class="${classes}">${string}</span>`;
}

function generateSpanWords(text) {
  const arrayText = splitString(text, ' ');
  const arraySpan = map(arrayText, toSpan);
  const spanText = join(arraySpan, ' ');
  return spanText;
}

const btnCriarCarta = document.createElement('button');
btnCriarCarta.id = 'criar-carta';
btnCriarCarta.innerHTML = 'Criar Carta';

function failRender() {
  const textFail = 'Por favor, digite o conteúdo da carta.';
  cartaGerada.innerHTML = textFail;
}

function renderCard() {
  const text = cartaTexto.value;

  if (!text || text === ' ') {
    return failRender();
  }
  const spanText = generateSpanWords(text);
  cartaGerada.innerHTML = spanText;
}

btnCriarCarta.addEventListener('click', renderCard);
cartaTexto.insertAdjacentElement('afterend', btnCriarCarta);

// console.log(generateSpanWords('hello word js'));
