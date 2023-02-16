const boxesRef = document.querySelector('#boxes');
const createRef = document.querySelector('[data-create]');
const destroyRef = document.querySelector('[data-destroy]');
const inputRef = document.querySelector('#controls input');

const creatBoxParent = document.createElement('div');

createRef.addEventListener('click', onCreateBoxes);
destroyRef.addEventListener('click', onDestroyBoxes);

function onCreateBoxes() {
  createBoxes(inputRef.value);
}

function onDestroyBoxes() {
  creatBoxParent.remove();
  inputRef.value = '';
}

function createBoxes(amount) {
  for (let i = 0; i < `${amount}`; i += 1) {
    const creatBox = document.createElement('div');
    let sizeBox = 30;
    sizeBox += i * 10;

    creatBox.style.width = `${sizeBox}px`;
    creatBox.style.height = `${sizeBox}px`;
    creatBox.style.backgroundColor = `${getRandomHexColor()}`;

    creatBoxParent.append(creatBox);
  }
  boxesRef.append(creatBoxParent);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
