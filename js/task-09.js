function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body');
const changeColorRef = document.querySelector('.change-color');
const valueColorRef = document.querySelector('.color');

changeColorRef.addEventListener('click', onChangeBackgroundColor);

function onChangeBackgroundColor() {
  const randomHexColor = getRandomHexColor();

  bodyRef.style.backgroundColor = randomHexColor;
  valueColorRef.textContent = randomHexColor;
}
