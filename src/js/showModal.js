export const submitBtn = document.querySelector('.second-submit')
const modal = document.querySelector('.modal')
const loader = document.querySelector('.loader')

const showModal = () => {
  modal.style.display = 'block'
  loader.style.display = 'none'
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  loader.style.display = 'block'
  setTimeout(showModal, Math.floor(Math.random() * 1000 + 1))
})
