const buttonCadastrarProduto = document.getElementById("button__cadastrar--produto");

buttonCadastrarProduto.addEventListener("click", (event) => {
  event.preventDefault();
  event__buttonCadastrar__CadastraProduto();
});

function event__buttonCadastrar__CadastraProduto() {
  var inputProduto = document.getElementById("produto");
  var inputUn = document.getElementById("unidademedida");
  var inputValor = document.getElementById("valorProduto");
  var inputMarca = document.getElementById("marcaProduto");
  var inputDescricao = document.getElementById("descricaoProduto");
  const estoque = 0;

  if (inputProduto.value == "" || inputUn.value == "" || inputValor.value == "" || inputMarca.value == "") {
    alert("Não foi possível realizar o cadastro! Verifique novamente se todos os campos foram preenchidos corretamente!");
  } else {
    const payload = {
      produto: inputProduto.value,
      un: inputUn.value,
      valor: inputValor.value,
      marca: inputMarca.value,
      descricao: inputDescricao.value,
      estoque: estoque
    };

    fetch('http://localhost:3000/api/cadastro/produto', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload),
    }).then((data) => data.json()).then((data) => {
      window.location.href = "../html/msgbox__cadastroconcluido.html";
    });
  }
}
