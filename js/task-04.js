const incrBtn = document.querySelector('[data-action="increment"]');
const decrBtn = document.querySelector('[data-action="decrement"]');
const valueCounter = document.querySelector('#value');

let counterValue = 0;

incrBtn.addEventListener('click', onIncrValue);
decrBtn.addEventListener('click', onDecrValue);

function onIncrValue() {
  counterValue += 1;
  valueCounter.textContent = counterValue;
}

function onDecrValue() {
  counterValue -= 1;
  valueCounter.textContent = counterValue;
}
