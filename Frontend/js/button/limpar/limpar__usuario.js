const buttonLimparUsario = document.getElementById('button__limpar--usuario')

buttonLimparUsario.addEventListener('click', (event) => {
  event.preventDefault()
  event__buttonLimpar__CadastraUsuario()
})

function event__buttonLimpar__CadastraUsuario(){
    var inputUsuario = document.getElementById("usuario");
    var inputSenha = document.getElementById("password__cadastro--usuario");

    inputUsuario.value = "";
    inputSenha.value = "";
};