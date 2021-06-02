const textInput = document.querySelector('#carta-texto');
const textButton = document.querySelector('#criar-carta');
const textLetter = document.querySelector('#carta-gerada');
const styleClasses = ['newspaper', 'magazine1', 'magazine2'];
const sizeClasses = ['medium', 'big', 'reallybig'];
const rotateClasses = ['rotateleft', 'rotateright'];
const skewClasses = ['skewleft', 'skewright'];

function randomNumber2() {
  return Math.round(Math.random() * 2);
}

function generateLetter() {
  textButton.addEventListener('click', () => {
    textLetter.innerText = '';
    const inputValue = textInput.value.split(' ');
    if (textInput.value === '' || inputValue[inputValue.length - 1] === '') {
      textLetter.innerText = 'Por favor, digite o conteúdo da carta.';
      return;
    }
    inputValue.forEach((element) => {
      const novoSpan = document.createElement('span');
      novoSpan.innerText = element;
      novoSpan.classList
        .add(
          styleClasses[randomNumber2()],
          sizeClasses[randomNumber2()],
          rotateClasses[randomNumber2()],
          skewClasses[randomNumber2()]);
      textLetter.appendChild(novoSpan);
    });
  });
}

generateLetter();
