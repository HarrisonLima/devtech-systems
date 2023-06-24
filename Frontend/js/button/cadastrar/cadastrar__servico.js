const buttonCadastrarServico = document.getElementById('button__cadastrar--servico')

buttonCadastrarServico.addEventListener('click', (event) => {
  event.preventDefault()
  event__buttonCadastrar__CadastraServico()
})

function event__buttonCadastrar__CadastraServico() {
  var inputServico = document.getElementById("servico");
  var inputDescricaoServico = document.getElementById("descricaoServico");

  if (inputServico.value == "" || inputValorServico.value == "") {
    alert(
      "Não foi possível realizar o cadastro! Verifique novamente se todos os campos foram preenchidos corretamente!"
    );
  } else {
    const payload = {
      servico: inputServico.value,
      descricao: inputDescricaoServico.value
    }

      fetch('http://localhost:3000/api/cadastro/servico', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
      }).then((data) => data.json()).then((data) => {
        window.location.href = "../html/msgbox__cadastroconcluido.html";
      })
  }
}