const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onControlForm);

function onControlForm(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;

  if (email.value.trim() === '' || password.value === '') {
    return alert('Внимание! Все поля должны быть заполнены');
  }

  const elements = {
    Email: `${email.value.trim()}`,
    Password: `${password.value}`,
  };
  console.log(elements);

  event.currentTarget.reset();
}
