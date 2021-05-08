function isNotValidText(words) {
  if (words.length <= 0) {
    return true;
  } if (words[0] === '') {
    return true;
  }
}

function generateClasses(index) {
  const styleClasses = ['newspaper', 'magazine1', 'magazine2'];
  const sizeClasses = ['medium', 'big', 'reallybig'];
  const rotationClasses = ['rotateleft', 'rotateright'];
  const skewClasses = ['skewleft', 'skewright'];
  const randomStyle = styleClasses[Math.floor(Math.random() * styleClasses.length)];
  const randomSize = sizeClasses[Math.floor(Math.random() * sizeClasses.length)];
  const randomRotation = rotationClasses[Math.floor(Math.random() * rotationClasses.length)];
  const randomSkew = skewClasses[Math.floor(Math.random() * skewClasses.length)];
  const randoms = [randomStyle, randomSize, randomRotation, randomSkew];
  return randoms[index];
}

function classListAddRandom(word) {
  word.classList.add(generateClasses(0), generateClasses(1));
  word.classList.add(generateClasses(2), generateClasses(3));
}

function createWord(words, letter) {
  const count = document.getElementById('carta-contador');
  count.innerHTML = words.length;
  for (let index = 0; index < words.length; index += 1) {
    const word = document.createElement('span');
    word.innerHTML = words[index];
    classListAddRandom(word);
    word.addEventListener('click', () => {
      word.className = '';
      classListAddRandom(word);
    });
    letter.appendChild(word);
  }
}

function generateLetterClick() {
  const letterInput = document.getElementById('carta-texto');
  const letter = document.getElementById('carta-gerada');
  const sentence = letterInput.value;
  const words = sentence.split(' ');
  letter.innerText = '';
  letterInput.focus();
  console.log(words);
  if (isNotValidText(words)) {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    createWord(words, letter);
  }
}

function generateLetter() {
  const letterInput = document.getElementById('carta-texto');
  const generateButton = document.getElementById('criar-carta');
  letterInput.focus();
  generateButton.addEventListener('click', generateLetterClick);
  letterInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      generateLetterClick();
    }
  });
}

window.onload = () => {
  generateLetter();
};
