const buttonLimparPeca = document.getElementById('button__limpar--peca')

buttonLimparPeca.addEventListener('click', (event) => {
  event.preventDefault()
  event__buttonLimpar__CadastraPeca()
})

function event__buttonLimpar__CadastraPeca(){
  var inputPeca = document.getElementById("peca");
  var inputMarca = document.getElementById("marcaPeca");
  var inputDescricao = document.getElementById("descricaoPeca");

  inputPeca.value = "";
  inputMarca.value = "";
  inputDescricao.value = "";
};
