
const refInput = document.querySelector('#name-input')
const refSpan = document.querySelector('#name-output')

refInput.addEventListener('input', inpText)
function inpText() {
    refSpan.textContent = this.value
    if (this.value === '') {
        refSpan.textContent = 'Anonymous';
    }
}








