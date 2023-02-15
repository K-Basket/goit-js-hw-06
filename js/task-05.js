const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onChangeName);

function onChangeName(event) {
  outputRef.textContent = event.currentTarget.value;
}
