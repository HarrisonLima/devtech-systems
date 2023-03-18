const buttonLimparProduto = document.getElementById('button__limpar--produto')

buttonLimparProduto.addEventListener('click', (event) => {
  event.preventDefault()
  event__buttonLimpar__CadastraProduto()
})

function event__buttonLimpar__CadastraProduto(){
  var inputProduto = document.getElementById("produto");
  var inputUn = document.getElementById("unidademedida");
  var inputMarca = document.getElementById("marcaProduto");
  var inputDescricao = document.getElementById("descricaoProduto");

  inputProduto.value = "";
  inputMarca.value = "";
  inputUn.value = "";
  inputDescricao.value = "";
};
