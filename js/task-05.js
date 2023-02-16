const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onChangeName);

function onChangeName(event) {
  if (inputRef.value === '') {
    outputRef.textContent = 'Anonymous';
  } else {
    outputRef.textContent = event.currentTarget.value.trim();
  }
}
