const buttonCancelar = document.getElementById("button__cancelar");

buttonCancelar.addEventListener('click', (event) => {
  event.preventDefault()
  event__buttonCancelar()
})

function event__buttonCancelar(){
      location.href = "../html/home.html";
}