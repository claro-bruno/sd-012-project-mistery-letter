const textInput = document.querySelector('#carta-texto');
const textButton = document.querySelector('#criar-carta');
const textLetter = document.querySelector('#carta-gerada');

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
      textLetter.appendChild(novoSpan);
    });
  });
}

generateLetter();
