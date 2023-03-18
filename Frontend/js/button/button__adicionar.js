var basket = [];

const button__adicionar = document.getElementById("button__adicionar");
var inputQtde = document.getElementById("quantidadeproduto");
var inputProduto = document.getElementById("produto");
var inputUn = document.getElementById("unidademedida");
var inputMarca = document.getElementById("marca");
var inputValorProduto = document.getElementById("valorProduto");
var inputDescricaoProduto = document.getElementById("descricaoProduto");

button__adicionar.addEventListener("click", () =>{
  push__basket();
});

function push__basket(){
  if (
    inputQtde.value != "" &&
    inputProduto.value != "" &&
    inputUn.value != "" &&
    inputMarca.value != "" &&
    inputValorProduto.value != ""
  ) {
    var qtde = inputQtde.value;
    var produto = inputProduto.value;
    var un = inputUn.value;
    var marca = inputMarca.value;
    var valorProduto = inputValorProduto.value;
    var descricaoProduto = inputDescricaoProduto.value;
  
    var produto = {
      qtde: qtde,
      produto: produto,
      un: un,
      marca: marca,
      valorProduto: valorProduto,
      descricaoProduto: descricaoProduto,
    };
  
    basket.push(produto);
  
    console.log(basket);
  
    inputQtde.value = "";
    inputProduto.value = "";
    inputUn.value = "";
    inputMarca.value = "";
    inputValorProduto.value = "";
    inputDescricaoProduto.value = "";
  }
}
