const gerarTexto = document.querySelector('#criar-carta');
const text = document.querySelector('#carta-texto');
const paragraph = document.querySelector('#carta-gerada');

function makeLetter() {
  const splitWords = text.value.split(' ');
  if (paragraph.innerHTML === '') {
    for (let i = 0; i < splitWords.length; i += 1) {
      paragraph.innerHTML += `<span>${splitWords[i]}</span> `;
    }
  } else {
    paragraph.innerHTML = '';
    makeLetter();
  }
}

gerarTexto.addEventListener('click', makeLetter);
