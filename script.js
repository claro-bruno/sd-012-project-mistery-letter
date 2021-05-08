createLetterBtn = document.getElementById('criar-carta');
letterPlace = document.getElementById('carta-gerada');
letterText = document.getElementById('carta-texto');



createLetterBtn.addEventListener('click', createSpan)

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
    for (let index = 0; index < (letterWords.length); index += 1) {;
      let word = letterWords[index].replace(/\s+/g,'');
      if (word != '') { letterPlace.innerHTML +=`<span>${word}</span>`; }
      if (index != (letterWords.length - 1)) { letterPlace.innerHTML = letterPlace.innerHTML + ' ';}
    }
  }
}

