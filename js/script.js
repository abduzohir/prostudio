
const addCart = document.querySelector('.addCart')
const receipt = document.querySelector('.receipt')
const receiptWindow = document.querySelector('.receipt__window')
const receiptOut = document.querySelector('.receipt__window-out')
const receiptBtnClose = document.querySelector('.receipt__window-btn')

let arrProducts = [],
totalName = 'обрашайтес данным контактам',
totalPrice = '+998 90 010 39 34',
totalKcall = '@prostudio.pages.dev',
totalEmail = 'abduzohir7@gamil.com'

addCart.addEventListener('click', function(){
  for(let i = 0; i < arrProducts.length; i++){
    totalName += `\n${arrProducts[i].name}\n`
    totalPrice += arrProducts[i].Summ()
    totalKcall += arrProducts[i].Kcall()
  }
  receiptOut.innerHTML = `Для заказа ${totalName}\n\ninstagram: ${totalKcall}\nНомер тел: ${totalPrice}\nemail: ${totalEmail}`
  
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
