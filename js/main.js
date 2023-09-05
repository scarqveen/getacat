document.getElementById('firstCat').onclick = firstCatLessGo
document.getElementById('secondCat').onclick = secondCatLessGo
document.getElementById('thirdCat').onclick = thirdCatLessGo

function firstCatLessGo(){
  document.querySelector('.catStage').style.backgroundImage = 'url(https://i.pinimg.com/474x/08/64/0b/08640b34412b64c5be6d0296bc6192cd.jpg)'
}

function secondCatLessGo() {
  document.querySelector('.catStage').style.backgroundImage = 'url(https://i.pinimg.com/474x/0b/fc/4f/0bfc4fe46cc00f7e43e1c6135fca9941.jpg)'
}

function thirdCatLessGo(){
  document.querySelector('.catStage').style.backgroundImage = 'url(https://i.pinimg.com/474x/62/54/ae/6254ae4c00b9c2b680416ce266903c42.jpg)'
}

