(function(){
  'use strict'

  const titleConfirm = document.querySelector('.titleConfirm')
  const titleGift = document.querySelector('.titleGift')
  const bodyConfirm = document.querySelector('.bodyConfirm')
  const bodyGift = document.querySelector('.bodyGift')
  const modalFooter = document.querySelector('.modal-footer')

  $('#btn-submit').click(e => {
    e.preventDefault()
    firebase.database().ref("/" + Math.floor(Math.random() * 50)).set({
      name: $('#name').val()
    })
    $('.close').click()
    notification()
    let name = $('#name').val()
    $('.guestName').text(name)
    $('#name').val('')
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

  function showItem(item) {
    item.style.display = 'block'
  }

  function hideItem(item) {
    item.style.display = 'none'
  }

  function notification() {
    $('.alert').show(1000)
    setInterval(() => {
      $('.alert').hide(1000)
    }, 5000)
  }

})()