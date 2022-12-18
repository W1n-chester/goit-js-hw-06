function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector(`body`);
const btn = body.querySelector(`button`);
const span = body.querySelector(`.color`);
btn.addEventListener(`click`, changeColor);
function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}
