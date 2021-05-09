const createdLetter = 'carta-gerada';

function removeLetter() {
  const parentElement = document.getElementById(createdLetter);
  const elementsToRemove = document.querySelectorAll('span');

  for (let index = 0; index < elementsToRemove.length; index += 1) {
    parentElement.removeChild(elementsToRemove[index]);
  }
}

function createLetter() {
  removeLetter();
  const inputText = document.getElementById('carta-texto').value;
  const splitedText = inputText.split(' ');
  const parentElement = document.getElementById(createdLetter);

  for (let index = 0; index < splitedText.length; index += 1) {
    const word = document.createElement('span');
    word.innerHTML = splitedText[index];

    parentElement.appendChild(word);
  }
}

function eventClickButton() {
  const createButton = document.getElementById('criar-carta');

  createButton.addEventListener('click', () => {
    const inputText = document.getElementById('carta-texto');

    if (inputText.value === '' || inputText.value === ' ') {
      const parentElement = document.getElementById(createdLetter);
      parentElement.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
      createLetter();
    }
  });
}

eventClickButton();
