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
  return spanArray;
}

function randomLetterStyles(spans) {
  //Itera sobre todas as palavras do array
  console.log(spans)
  for (let span of spans) {
    // console.log(word);
    // Define quantos grupos de estilos vou aplicar
    let randomNumberGroups = Math.floor(Math.random() * allGroups.length);
    //Faz o loop dentro dos possíveis grupos de estilos
    for (let index = 0; index <= randomNumberGroups; index += 1) {
      let choseGroup = Math.floor(Math.random() * allGroups.length);
      let randomNumberStyle = Math.floor(Math.random() * allGroups[choseGroup].length);
      
      span.classList.add(allGroups[choseGroup][randomNumberStyle]);

    }


  }


}

function randomElementStyles(target) {

  let randomNumberGroups = Math.floor(Math.random() * allGroups.length);
  //Faz o loop dentro dos possíveis grupos de estilos
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