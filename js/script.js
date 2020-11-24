(function(){
  'use strict'

  const modalHeader = $('.modal-header')
  const titleConfirm = $('.titleConfirm')
  const titleGift = $('.titleGift')
  const bodyConfirm = $('.bodyConfirm')
  const bodyGift = $('.bodyGift')
  const bodyGallery = $('.bodyGallery')
  const modalFooter = $('.modal-footer')
  const close = $('.close')

  $('#btn-submit').click(e => {
    e.preventDefault()
    hideItem(close)
    firebase.database().ref("/" + Math.floor(Math.random() * 50)).set({
      name: $('#name').val()
    })
    close.click()
    notification()
    let name = $('#name').val()
    $('.guestName').text(name)
    $('#name').val('')
  })
                  
  $('.btnConfirm').click(e => {
    e.preventDefault()
    hideItem(close)
    hideItem(titleGift)
    hideItem(bodyGift)
    hideItem(bodyGallery)
    showItem(modalHeader)
    showItem(titleConfirm)
    showItem(bodyConfirm)
    showItem(modalFooter)
  })

  $('.btnGift').click(e => {
    e.preventDefault()
    hideItem(close)
    hideItem(titleConfirm)
    hideItem(bodyConfirm)
    hideItem(bodyGallery)
    hideItem(modalFooter)
    showItem(titleGift)
    showItem(bodyGift)
  })

  const stories = () => {
    let arrImages = ['foto-1','foto-2','foto-3','foto-4','foto-5']
    let images = arrImages.map(e => {
      return `<div class="${e}"><img class="example-image" src="img/gallery/${e}.jpg" style="width: 100%" alt="" /></div>`
    })
    $('.bodyGallery').append(images)
    arrImages.forEach(e => {
      !!$(`.${e}`)[1] === false ? '' : $(`.${e}`)[1].remove()
    })
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

  const showItem = item => {
    item.css('display', 'block')
  }

  const hideItem = item => {
    item.css('display', 'none')
  }

  const notification = () => {
    $('.alert').show(1000)
    setInterval(() => {
      $('.alert').hide(1000)
    }, 5000)
  }

})()