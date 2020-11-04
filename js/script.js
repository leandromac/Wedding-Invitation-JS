(function(){
  'use strict'

  const titleConfirm = document.querySelector('.titleConfirm')
  const titleGift = document.querySelector('.titleGift')
  const bodyConfirm = document.querySelector('.bodyConfirm')
  const bodyGift = document.querySelector('.bodyGift')
  const modalFooter = document.querySelector('.modal-footer')

  console.log(e)

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
    }, 8000)
    setTimeout(() => {
      schedule()
    }, 9000)
  }

  function schedule() {
    let a = document.createElement('a')
    a.href = 'https://calendar.google.com/event?action=TEMPLATE&tmeid=MXJzNXBzNGdrNGN0NG4zNHRkaTQ0NG44ZGMgbmFuZG9mbWFjZWRvQG0&tmsrc=nandofmacedo%40gmail.com'
    a.target = '_blank'
    a.click()
  }

})()