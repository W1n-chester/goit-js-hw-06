const input = document.querySelector(`#validation-input`);
// console.log(`data-lengt:${ input.getAttribute(`data-length`) }`)
input.addEventListener(`blur`, event => {
  // console.log(`value: ${ event.currentTarget.value.length }`)
  if (event.currentTarget.value.length === Number(input.getAttribute(`data-length`))) {
    input.classList.add(`valid`);
    input.classList.remove(`invalid`);
    return;
  }
  input.classList.remove(`valid`);
  input.classList.add(`invalid`);
});
