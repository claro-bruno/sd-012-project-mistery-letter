const textInput = document.querySelector('#carta-texto');
const textButton = document.querySelector('#criar-carta');
const textLetter = document.querySelector('#carta-gerada');
const textCounter = document.querySelector('#carta-contador');
const styleClasses = ['newspaper', 'magazine1', 'magazine2'];
const sizeClasses = ['medium', 'big', 'reallybig'];
const rotateClasses = ['rotateleft', 'rotateright'];
const skewClasses = ['skewleft', 'skewright'];

function randomNumber2() {
  return Math.round(Math.random() * 2);
}

function randomNumber1() {
  return Math.round(Math.random());
}

function addingClasses(element) {
  const elemento = element;
  elemento.className = '';
  element.classList
    .add(
      styleClasses[randomNumber2()],
      sizeClasses[randomNumber2()],
      rotateClasses[randomNumber1()],
      skewClasses[randomNumber1()],
    );
}

function changeWords(elemento) {
  elemento.forEach((element) => {
    element.addEventListener(('click'), () => {
      addingClasses(element);
    });
  });
}

function generateLetter() {
  textButton.addEventListener('click', () => {
    textLetter.innerText = '';
    const inputValue = textInput.value.split(' ');
    if (textInput.value === '' || inputValue[0] === '') {
      textLetter.innerText = 'Por favor, digite o conteúdo da carta.';
      return;
    }
    if (inputValue[inputValue.length - 1] === '') inputValue.pop();
    textCounter.innerText = inputValue.length;
    inputValue.forEach((element) => {
      const novoSpan = document.createElement('span');
      novoSpan.innerText = element;
      addingClasses(novoSpan);
      textLetter.appendChild(novoSpan);
    });
    const spans = document.querySelectorAll('span');
    changeWords(spans);
  });
}

generateLetter();
