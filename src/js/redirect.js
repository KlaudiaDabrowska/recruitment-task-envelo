export const buttonToStepZero = document.querySelector('.modal-button1')
const buttonToFirstStep = document.querySelector('.modal-button2')

buttonToStepZero.addEventListener('click', () => {
  window.location.href = 'index.html'
})
buttonToFirstStep.addEventListener('click', () => {
  window.location.href = 'viewForm.html'
})
