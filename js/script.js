
const addCart = document.querySelector('.addCart')
const receipt = document.querySelector('.receipt')
const receiptWindow = document.querySelector('.receipt__window')
const receiptOut = document.querySelector('.receipt__window-out')
const receiptBtnClose = document.querySelector('.receipt__window-btn')

let arrProducts = [],
totalName = 'обрашайтес данным контактам',
totalPrice = '<a href="tel:998900103934">+998 90 010 39 34</a>',
totalKcall = '<a href="https://www.instagram.com/prostudio.pages.dev/">@prostudio.pages.dev</a>',
totalEmail = '<a href="https://t.me/abduzohir_mmm">@abduzohir_mmm</a>'

addCart.addEventListener('click', function(){
  for(let i = 0; i < arrProducts.length; i++){
    totalName += `\n${arrProducts[i].name}\n`
    totalPrice += arrProducts[i].Summ()
    totalKcall += arrProducts[i].Kcall()
  }
  receiptOut.innerHTML = `Для заказа ${totalName}\n\ninstagram: ${totalKcall}\nНомер тел: ${totalPrice}\nTelegram: ${totalEmail}`
  
  receipt.style.display = 'flex'
  setTimeout(function(){
    receipt.style.opacity = '1'
  }, 100)
  setTimeout(function(){
    receiptWindow.style.top = '10%'
  }, 300)
})

receiptBtnClose.addEventListener('click', function(){
  window.location.reload()
})
