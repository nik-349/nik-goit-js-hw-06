const refSlider = document.querySelector('#font-size-control')
const refSpanText = document.querySelector('#text')


refSlider.addEventListener('input', slideMove)

function slideMove() {
    refSpanText.style.fontSize = `${this.value}px`;

}