const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotateGroup = ['rotateleft', 'rotateright'];
const skewGroup = ['skewleft', 'skewright'];
const allGroups = [styleGroup, sizeGroup, rotateGroup, skewGroup];

function generateLetter() {
  const getInputText = document.getElementById('carta-texto');
  const getCreateLetter = document.getElementById('carta-gerada');
  const spanArray = [];

  if (getInputText.value.match(/\S/g) !== null) {
    getCreateLetter.innerText = '';
    const wordsArray = getInputText.value.split(' ');
    const getWordCount = document.getElementById('carta-contador');
    getWordCount.innerText = wordsArray.length;
    for (let word of wordsArray) {
      const newSpan = document.createElement('span');
      newSpan.innerText = word;
      getCreateLetter.appendChild(newSpan);
      if(newSpan.innerText !== '') {
        spanArray.push(newSpan);
      }
    }
    randomLetterStyles(spanArray);
   
  } else {
    getCreateLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

function randomLetterStyles(spans) {
  // let usedGroupsArray = [];
  for (let span of spans) {
    let randomNumberGroups = Math.floor(Math.random() * allGroups.length);
    for (let indexGroup = 0; indexGroup <= randomNumberGroups; indexGroup += 1) {
      let choseGroup = Math.floor(Math.random() * allGroups.length);
      let randomNumberStyle = Math.floor(Math.random() * allGroups[choseGroup].length);
      span.classList.add(allGroups[choseGroup][randomNumberStyle]);
      // if (checkUsedGroups(choseGroup, usedGroupsArray) === 'used') {
      //   indexGroup = indexGroup - 1;
      // } else {
      //   span.classList.add(allGroups[choseGroup][randomNumberStyle]);
      //   usedGroupsArray.push(choseGroup);
      // }
    }
  }
}

function checkUsedGroups(group, usedGroups) {
  for (let indexCheck = 0; indexCheck < usedGroups.length; indexCheck += 1) {
    if (group === usedGroups[indexCheck]) return 'used';
  }
}

function randomElementStyles(target) {
  let randomNumberGroups = Math.floor(Math.random() * allGroups.length);
  for (let index = 0; index <= randomNumberGroups; index += 1) {
    let choseGroup = Math.floor(Math.random() * allGroups.length);
    let randomNumberStyle = Math.floor(Math.random() * allGroups[choseGroup].length);
    target.className = '';
    target.classList.add(allGroups[choseGroup][randomNumberStyle]);
  }
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'criar-carta') {
    generateLetter();
  }
  if (event.target.tagName === 'SPAN') {
    const eventTarget = event.target;
    randomElementStyles(eventTarget);
  }
});