function removeLetter() {
  const parentElement = document.getElementById('carta-gerada');
  const elementsToRemove = document.querySelectorAll('span');

  for (let index = 0; index < elementsToRemove.length; index += 1) {
    parentElement.removeChild(elementsToRemove[index]);
  }
}

function createLetter() {
  const createButton = document.getElementById('criar-carta');

  createButton.addEventListener('click', () => {
    removeLetter();

    const inputText = document.getElementById('carta-texto').value;
    const splitedText = inputText.split(' ');
    const parentElement = document.getElementById('carta-gerada');

    for (let index = 0; index < splitedText.length; index += 1) {
      const word = document.createElement('span');
      word.innerHTML = splitedText[index];

      parentElement.appendChild(word);
    }
  });
}

createLetter();
