const main = document.querySelector('#main');

main.remove();

const newHeader = document.createElement('h1');

newHeader.textContent = 'Angelo is the champion';

newHeader.setAttribute('id', 'victory');

const body = document.querySelector(body);

body.appendChild(newHeader);

