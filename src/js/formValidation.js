export const phoneNumberInput = document.querySelector('.first-input')
const codeInput = document.querySelector('.second-input')
const submitBtn = document.querySelector('.first-submit')
const phoneError = document.querySelector('.phone-error')
const codeError = document.querySelector('.code-error')

const isPhoneValid = () => phoneNumberInput.value.length === 9
const isPickupCodeValid = () => codeInput.value.length === 4

export const isFormValid = () => {
  if (isPhoneValid() && isPickupCodeValid()) {
    return true
  } else {
    return false
  }
}

const formValidatorListener = () => {
  if (isFormValid()) {
    submitBtn.disabled = false
  } else {
    submitBtn.disabled = true
  }
}

const phoneOnChange = () => {
  if (isPhoneValid()) {
    phoneError.innerText = ''
  } else {
    phoneError.innerText = 'Numer telefonu musi zawierać 9 cyfr'
  }
}

const codeOnChange = () => {
  if (isPickupCodeValid()) {
    codeError.innerText = ''
  } else {
    codeError.innerText = 'Kod odbioru musi zawierać 4 cyfry'
  }
}

window.addEventListener('load', () => {
  submitBtn.disabled = true
})
phoneNumberInput.addEventListener('input', phoneOnChange)
phoneNumberInput.addEventListener('input', formValidatorListener)
codeInput.addEventListener('input', codeOnChange)
codeInput.addEventListener('input', formValidatorListener)
