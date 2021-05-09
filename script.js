function generateLetter() {
  const getInputText = document.getElementById('carta-texto');
  const getCreateLetter = document.getElementById('carta-gerada');
  const wordsArray = getInputText.value.split(' ');
  getCreateLetter.innerText = '';
  for (let word of wordsArray) {
    const newSpan = document.createElement('span');
    newSpan.innerText = word;
    getCreateLetter.appendChild(newSpan);
  }
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'criar-carta') {
    generateLetter();
  }
});