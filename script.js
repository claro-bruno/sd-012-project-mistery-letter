createLetterBtn = document.getElementById('criar-carta');
letterPlace = document.getElementById('carta-gerada');
letterText = document.getElementById('carta-texto');
arrayStyle = ['newspaper magazine1 magazine2', 'medium big reallybig', 'rotateleft rotateright', 'skewleft skewright'];


function checkEmpty(letter) {
  const check = letter.replace(/\s+/g,'');
  if (check == '') {
    letterPlace.innerText = 'Por favor, digite o conteúdo da carta.';
    return false;
  }
  return true;
}

function createSpan() {
  console.log(checkEmpty(letterText.value));
  if (checkEmpty(letterText.value)) {
    letterPlace.innerText='';
    let letterWords = letterText.value.split(' ');
    for (let index = 0; index < (letterWords.length); index += 1) {
      let word = letterWords[index].replace(/\s+/g,'');
      if (word != '') { letterPlace.innerHTML +=`<span class='${randomize()}'>${word}</span>`; }
      if (index != (letterWords.length - 1)) { letterPlace.innerHTML = letterPlace.innerHTML + ' ';}
    }
  }
}

createLetterBtn.addEventListener('click', createSpan);

function randomN(max) {
  return (Math.round(Math.random() * max));
}

function randomF(max) {
  return (Math.floor(Math.random() * max));
}

function randomize() {
  let arrayLetterstyle = [randomN(1), 1, randomN(1), randomN(1)];
  let stylesClass = '';
  for (let index = 0; index < arrayLetterstyle.length; index += 1) {
    if (arrayLetterstyle[index] != 0) {
      let thisStyle = arrayStyle[index].split(' ');
      stylesClass = stylesClass+' '+thisStyle[randomF(thisStyle.length)];
    }
  }
  return stylesClass;
}