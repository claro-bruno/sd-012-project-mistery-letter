const input = document.getElementById('carta-texto');
const buttonCreate = document.getElementById('criar-carta');
const geneteLetter = document.getElementById('carta-gerada');

let letterSplited;

buttonCreate.addEventListener('click', () => {
  letterSplited = input.value.split(' ');
  for (let index = 0; index < letterSplited.length; index += 1) {
    if (geneteLetter.innerHTML === "") {
      geneteLetter.innerHTML = 'Por favor, digite o conteúdo da carta.'
    }
    const createSpan = document.createElement('span');
    createSpan.innerHTML = letterSplited[index];
    geneteLetter.appendChild(createSpan);
  }
});
