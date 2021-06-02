const textInput = document.querySelector('#carta-texto');
const textButton = document.querySelector('#criar-carta');
const textLetter = document.querySelector('#carta-gerada');

function generateLetter() {
  textButton.addEventListener('click', () => {
    const inputValue = textInput.value.split(' ');
    inputValue.forEach((element) => {
      const novoSpan = document.createElement('span');
      novoSpan.innerText = element;
      textLetter.appendChild(novoSpan);
    });
  });
}

generateLetter();