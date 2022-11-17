// alert("coucou")


/// accéder à un element

const burger = document.querySelector(".burger")

const menu = document.querySelector(".menu")

// console.log(burger)




///prévoir des actions/manipulations sur cet élément
//renseigner l'evenement qui nous interesse : click

burger.addEventListener("click", ()=>{

            menu.classList.toggle("menu-visible")

} )