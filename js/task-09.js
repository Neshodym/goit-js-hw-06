function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttunRef = document.querySelector('.change-color');
const colorValueRef = document.querySelector('.color');
const bodyRef = document.body;
buttunRef.addEventListener('click', onChangeColor);

function onChangeColor() {
  const bodyRefCurrentColor = bodyRef.style.backgroundColor = getRandomHexColor();
  colorValueRef.textContent = bodyRefCurrentColor;
}