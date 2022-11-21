// alert("coucou")


/// accéder à un element

const burger = document.querySelector(".burger")

const menu = document.querySelector(".menu")

const boutonPresentation1 = document.querySelector("#presentation1")

const pagePresentation1 = document.querySelector('.presentation1')

// console.log(burger)




///prévoir des actions/manipulations sur cet élément
//renseigner l'evenement qui nous interesse : click

burger.addEventListener("click", ()=>{

            menu.classList.toggle("menu-visible")

} )


boutonPresentation1.addEventListener("click", ()=>{

         pagePresentation1.classList.remove('hidden')  
         menu.classList.remove("menu-visible") 

})




function disBonjour(){

    alert('bonjour')

}

