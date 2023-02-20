const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
inputRef.addEventListener('input', onSlider);
function onSlider(event) {
    textRef.style.fontSize = event.currentTarget.value + 'px';
}