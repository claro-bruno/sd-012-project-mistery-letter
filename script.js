const content = document.getElementById('content');
content.innerHTML = '';

const cartaTexto = document.createElement('input');
cartaTexto.id = 'carta-texto';
content.appendChild(cartaTexto);

const cartaGerada = document.createElement('p');
cartaGerada.id = 'carta-gerada';
content.appendChild(cartaGerada);
