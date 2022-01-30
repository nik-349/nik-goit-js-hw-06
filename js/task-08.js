const refInputForm = document.querySelector('form.login-form')
const refInputEmail = document.querySelector('[name = email]')
const refInputPassword = document.querySelector('[name = password]')

refInputForm.addEventListener('submit', formInteraction)
refInputEmail.addEventListener('blur', formValidBlur)
refInputPassword.addEventListener('blur', formValidBlur)


function formValidBlur() {
    if (this.value === '') {
        return alert('Everything must be completed!')
    }
}

function formInteraction(event) {
    event.preventDefault()
    const formEl = event.currentTarget.elements
    
    const elMail = formEl.email.value
    const elPassword = formEl.password.value

    console.log({
        email: elMail,
        password: elPassword
    })
}
