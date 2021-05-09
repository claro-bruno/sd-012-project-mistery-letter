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

function toSpan(string) {
  return `<span>${string}</span>`;
}

function generateSpanWords(text) {
  const arrayText = splitString(text, ' ');
  const arraySpan = map(arrayText, toSpan);
  const spanText = join(arraySpan, '');
  return spanText;
}

const btnCriarCarta = document.createElement('button');
btnCriarCarta.id = 'criar-carta';
btnCriarCarta.innerHTML = 'Criar Carta';

function renderCard() {
  const text = cartaTexto.value;
  const spanText = generateSpanWords(text);
  cartaGerada.innerHTML = spanText;
}

btnCriarCarta.addEventListener('click', renderCard);
cartaTexto.insertAdjacentElement('afterend', btnCriarCarta);

// console.log(generateSpanWords('hello word js'));
