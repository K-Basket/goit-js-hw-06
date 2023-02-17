const inputRef = document.querySelector('#validation-input');
const valid = 'valid';
const invalid = 'invalid';

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    updateClass(valid, invalid);
  } else {
    updateClass(invalid, valid);
  }

  function updateClass(add, remove) {
    inputRef.classList.add(add);
    inputRef.classList.remove(remove);
  }
}
