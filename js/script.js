(function(){
  'use strict'

  const modalHeader = document.querySelector('.modal-header')
  const titleConfirm = document.querySelector('.titleConfirm')
  const titleGift = document.querySelector('.titleGift')
  const bodyConfirm = document.querySelector('.bodyConfirm')
  const bodyGift = document.querySelector('.bodyGift')
  const bodyGallery = document.querySelector('.bodyGallery')
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
    hideItem(bodyGallery)
    showItem(titleConfirm)
    showItem(bodyConfirm)
    showItem(modalFooter)
  })

  $('.btnGift').click(e => {
    e.preventDefault()
    hideItem(titleConfirm)
    hideItem(bodyConfirm)
    hideItem(bodyGallery)
    hideItem(modalFooter)
    showItem(titleGift)
    showItem(bodyGift)
  })

  let arrImages = [
    'foto-1',
    'foto-2',
    'foto-3',
    'foto-4',
    'foto-5'
  ]

  function stories() {
    let images = arrImages.map(e => {
      return `<div><img class="example-image" src="img/gallery/${e}.jpg" style="width: 100%" alt="" /></div>`
    })
    $('.bodyGallery').append(images)
  }

  $('.btn-galery').click(e => {
    e.preventDefault()
    $('.slick-next').click()
    hideItem(modalHeader)
    hideItem(titleConfirm)
    hideItem(bodyConfirm)
    hideItem(bodyGift)
    hideItem(bodyConfirm)
    hideItem(modalFooter)
    showItem(bodyGallery)
    stories()
  })

  // let turnOnOf = false
  // $('.btn-galery').click(e=> {
  //   e.preventDefault()
  //   turnOnOf = !turnOnOf
  //   if(turnOnOf == true) {
  //       $('.galery').fadeIn(1000)
  //   }
  //   if(turnOnOf == false) {
  //       $('.galery').fadeOut(1000)
  //   }
  // })

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