function generateLetter() {
  const getInputText = document.getElementById('carta-texto');
  const getCreateLetter = document.getElementById('carta-gerada');
  if (getInputText.value.match(/\S/g) !== null) {
    getCreateLetter.innerText = '';
    const wordsArray = getInputText.value.split(' ');
    for (let word of wordsArray) {
      const newSpan = document.createElement('span');
      newSpan.innerText = word;
      getCreateLetter.appendChild(newSpan);
    } 
  } else {
    getCreateLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'criar-carta') {
    generateLetter();
  }
});