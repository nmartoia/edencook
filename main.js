import './style.css';
const recette = document.querySelectorAll(".re");
const ingredient = document.querySelectorAll(".ingredient");
let count=0;
const mburger =document.querySelector(".fa-bars")
const close = document.querySelector('#close')
const nav = document.querySelector('nav');
const article = document.querySelectorAll(".article");
const add = document.querySelectorAll(".add");
const achat = document.querySelector('#achat');
const btnshop =document.querySelector('.fa-bag-shopping')
const shopping = document.querySelector('.shopping')
const shop = document.getElementById('shop')
mburger.addEventListener("click",()=>{
  if(document.body.clientWidth>'768'){
    nav.style.right='-500px'
  }else{
    nav.style.right='0'
    shopping.style.right='-100vw'
  }
})
close.addEventListener('click',()=>{
  nav.style.right='-500px'
  
})
btnshop.addEventListener("click",()=>{
  if(document.body.clientWidth>'768'||shopping.style.right=='5vw'){
    shopping.style.right='-100vw'
  }else{
    shopping.style.right='5vw'
    nav.style.right='-500px'
  }
})
shop.addEventListener("click",()=>{
  if(document.body.clientWidth>'768'||shopping.style.right=='5vw'){
    shopping.style.right='-100vw'
  }else{
    shopping.style.right='5vw'
    nav.style.right='-500px'
  }
})
for (let i = 0; i < recette.length; i++) {
  recette[i].addEventListener("click",()=>{
    if(count===i&&ingredient[i].style.display=="list-item"){
      ingredient[i].style.display="none"
    }else{
      ingredient[count].style.display="none"
      ingredient[i].style.display="list-item"
      count=i
    }
  })
}
for (let i = 0; i < add.length; i++) {
  add[i].addEventListener("click",()=>{
        let p = document.createElement('p')
        let li = document.createElement('li')
        li.textContent=article[i].textContent
        p.textContent=0
        achat.appendChild(li)
  })
}
window.addEventListener('resize', ()=>{
  if(document.body.clientWidth>'768'){
    nav.style.right='-500px'
    shopping.style.right="-100vw"
  }
})
