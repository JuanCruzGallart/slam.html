let wrapper = document.querySelector(".wrapper")
let portada = document.querySelector("#portada")
let nav = document.querySelector("#nav")
let btnDigital = document.querySelector("#btn_digital")
let btnBook = document.querySelector("#btn_book")
let containerImg = document.querySelector(".container-img")
let imgs = document.querySelectorAll(".works_imgs")
let imgContainer = document.querySelector(".img-show")
let svg = document.querySelector(".bi", "bi-x")

imgs.forEach(img => {
    img.addEventListener("click", () => {
        containerImg.classList.remove("d-none")

        imgContainer.src = img.getAttribute("src")


        if(!containerImg.addEventListener("click", () => {
            containerImg.classList.add("d-none")

        }))
        
        svg.addEventListener("click", () => {
            containerImg.classList.add("d-none")
        })
    })
})

function addImage (src) {
}