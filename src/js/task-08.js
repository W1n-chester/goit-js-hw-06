const form = document.querySelector(`.login-form`);
form.addEventListener(`submit`, submitForm);

function submitForm(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (!(email.value && password.value)) {
    alert(`All fields are required`);
    return;
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  form.reset();
}
