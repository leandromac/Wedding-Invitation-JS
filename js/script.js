const button = document.querySelector('#btn-submit')
const titleConfirm = document.querySelector('.titleConfirm')
const titleGift = document.querySelector('.titleGift')
const bodyConfirm = document.querySelector('.bodyConfirm')
const bodyGift = document.querySelector('.bodyGift')
const modalFooter = document.querySelector('.modal-footer')
var database = firebase.database()

button.addEventListener('click', e => {
  e.preventDefault()
  database.database().ref("/" + Math.floor(Math.random() * 50)).set({
    name: newGuest()
  })
  console.log(newGuest())              
})

$('.btnConfirm').click(e => {
  e.preventDefault()
  hideItem(titleGift)
  hideItem(bodyGift)
  showItem(titleConfirm)
  showItem(bodyConfirm)
  showItem(modalFooter)
})

$('.btnGift').click(e => {
  e.preventDefault()
  hideItem(titleConfirm)
  hideItem(bodyConfirm)
  hideItem(modalFooter)
  showItem(titleGift)
  showItem(bodyGift)
})

function newGuest() {
  return document.getElementById("name").value
}

function showItem(item) {
  item.style.display = 'block'
}

function hideItem(item) {
  item.style.display = 'none'
}