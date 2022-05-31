import './style.css'
const recette = document.querySelectorAll(".recette");
const ingredient = document.querySelectorAll(".ingredient");
let count=0;
const mburger =document.querySelector(".fa-bars")
const close = document.querySelector('#close')
const nav = document.querySelector('nav');
mburger.addEventListener("click",()=>{
nav.style.right='0'
})
close.addEventListener('click',()=>{
  nav.style.right='-500px'
})
for (let i = 0; i < recette.length; i++) {
  recette[i].addEventListener("click",()=>{
    if(count===i&&ingredient[i].style.display=="block"){
      ingredient[i].style.display="none"
    }else{
      ingredient[count].style.display="none"
      ingredient[i].style.display="block"
      count=i
    }
  })
}
