const buttonCadastrarUsuario = document.getElementById('button__cadastrar--usuario')

buttonCadastrarUsuario.addEventListener('click', (event) => {
  event.preventDefault()
  event__buttonCadastrar__CadastraUsuario()
})

function event__buttonCadastrar__CadastraUsuario() {
  var inputUsuario = document.getElementById("usuario");
  var inputSenha = document.getElementById("password__cadastro--usuario");
  var inputDropdown = document.getElementById("dropdown__textBox");

  if (
    inputUsuario.value == "" ||
    inputSenha.value == "" ||
    inputDropdown.value == ""
  ) {
    alert(
      "Não foi possível realizar o cadastro! Verifique novamente se todos os campos foram preenchidos corretamente!"
    );
  } else {
    const payload = {
      usuario: inputUsuario.value,
      senha: inputSenha.value,
      perfil: inputDropdown.value
    }

      fetch('http://localhost:3000/api/cadastro/usuario', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
      }).then((data) => data.json()).then((data) => {
        window.location.href = "../html/msgbox__cadastroconcluido.html";
      })
    }
}