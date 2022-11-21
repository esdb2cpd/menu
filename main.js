// alert("coucou")


/// accéder à un element

const burger = document.querySelector(".burger")

const menu = document.querySelector(".menu")

const boutonPresentation1 = document.querySelector("#presentation1")

const pagePresentation1 = document.querySelector('.presentation1')
const pagePresentation2 = document.querySelector('.presentation2')

const content = document.querySelector('.content')

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


function cacherTout(){

    let toutesLesPages = content.querySelectorAll('div')

    // pour chaque page de toutesLesPages
            // ajouter la classe 'hidden' à chaque page
   // boucles forEach

}

