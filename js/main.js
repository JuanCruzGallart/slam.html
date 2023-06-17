let wrapper = document.querySelector(".wrapper")
let btnDigital = document.querySelector("#btn_digital")
let btnBook = document.querySelector("#btn_book")

btnDigital.addEventListener("click", function(){
    wrapper.innerHTML = ``
   
    function appendLoop(){
            let background = document.querySelector("body")
            background.classList.add("body")
            let p = document.createElement("p")
            p.innerHTML = `puto`
            p.classList.add("puto")
            wrapper.append(p)            
    }            
    
    let counter = 0
    const intervalId = setInterval(() => {
        if (counter <30) {
            appendLoop();
            counter++;
        }else{
            clearInterval(intervalId)
            let btnRtrn = document.createElement("button")
            btnRtrn.classList.add("btn", "btn-danger", "d-flex");
            btnRtrn.innerHTML = `TOCA ACA PARA VOLVER`
            wrapper.appendChild(btnRtrn)

            btnRtrn.addEventListener("click", () =>{
                Swal.fire({
                    title: 'en verdad me dio paja :D',
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    background: '#fff url(/images/trees.png)',
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                  })
            })
        }
    }, 180)   
    
})

btnBook.addEventListener("click", function(){
    Swal.fire({
        icon: 'error',
        title: 'puto',
        text: 'Something went wrong! sos re puto',
        footer: '<a href="https://youtu.be/Q17ZWSNmIoc?t=30">por que sos puto?</a>'
      })
})