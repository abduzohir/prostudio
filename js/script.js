function Summ(){return this.amount * this.price}
function Kcall(){return this.amount * this.kcall}
const products = {
  plainBurger: {
    name: 'Гамбургер простой',
    price: 10000,
    kcall: 500,
    amount: 0,
    Summ: Summ,
    Kcall: Kcall,
  },
  freshBurger: {
    name: 'Гамбургер FRESH',
    price: 20500,
    kcall: 700,
    amount: 0,
    Summ: Summ,
    Kcall: Kcall,
  },
  freshCombo: {
    name: 'FRESH COMBO',
    price: 31900,
    kcall: 1230,
    amount: 0,
    Summ: Summ,
    Kcall: Kcall,
  },
}
const extraProducts = {
  doubleMayonnaise: {
    name: 'Двойной майонез',
    price: 500,
    kcall: 200,
  },
  lettuce: {
    name: 'Салатный лист',
    price: 400,
    kcall: 40,
  },
  cheese: {
    name: 'Сыр',
    price: 700,
    kcall: 130,
  },
}
const addCart = document.querySelector('.addCart')
const receipt = document.querySelector('.receipt')
const receiptWindow = document.querySelector('.receipt__window')
const receiptOut = document.querySelector('.receipt__window-out')
const receiptBtnClose = document.querySelector('.receipt__window-btn')

let arrProducts = [],
totalName = 'обрашайтес данным контактам',
totalPrice = '+998 90 010 39 34',
totalKcall = '@croso.uz',
totalEmail = 'abduzohir7@gamil.com'

addCart.addEventListener('click', function(){
  for(const key in products){
    const pObj = products[key]
    if(pObj.amount > 0){
      arrProducts.push(pObj)
      pObj.name += `:${pObj.amount}`
      for(const info in pObj){
        if(pObj[info] === true){
          pObj.name += `\n${extraProducts[info].name}`
        }
      }
      pObj.name += `\nСтоимость: ${pObj.Summ()}\nКаллории: ${pObj.Kcall()}`
    }
  }
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
