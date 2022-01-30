const refInput = document.querySelector('#validation-input')
refInput.addEventListener('blur', blurInputValid)
const ref = document.querySelector('[data-length]')
const attribute = Number(ref.getAttribute('data-length'))



function blurInputValid() {
    if (this.value.length === attribute) {
        refInput.classList.remove('invalid')
        refInput.classList.add('valid')
    } 
    if (this.value.length > attribute || this.value.length < attribute) {
            refInput.classList.remove('valid')
                refInput.classList.add('invalid')

    }
}

