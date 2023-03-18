const buttonCadastrarPeca = document.getElementById(
  "button__cadastrar--peca"
);

buttonCadastrarPeca.addEventListener("click", (event) => {
  event.preventDefault();
  event__buttonCadastrar__CadastraPeca();
});

function event__buttonCadastrar__CadastraPeca() {
  var inputPeca = document.getElementById("peca");
  var inputMarca = document.getElementById("marcaPeca");
  var inputDescricao = document.getElementById("descricaoPeca");

  if (inputPeca.value == "" || inputMarca.value == "") {
    alert(
      "Não foi possível realizar o cadastro! Verifique novamente se todos os campos foram preenchidos corretamente!"
    );
  } else {
    const payload = {
      peca: inputPeca.value,
      marca: inputMarca.value,
      descricao: inputDescricao.value
    }

      fetch('http://localhost:3000/api/cadastro/peca', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
      }).then((data) => data.json()).then((data) => {
        window.location.href = "../html/msgbox__cadastroconcluido.html";
      })
  }
}
