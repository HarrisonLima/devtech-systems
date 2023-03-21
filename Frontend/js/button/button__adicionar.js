var basket = [];

var button__cancelar = document.getElementById('button__cancelar');
var button__finalizar = document.getElementById('button__finalizar');
var table = document.getElementById('table__produtos');

button__cancelar.style.display = 'none';
button__finalizar.style.display = 'none';
table.style.display = 'none';

const button__adicionar = document.getElementById("button__adicionar");
var inputQtde = document.getElementById("quantidadeproduto");
var inputProduto = document.getElementById("produto");
var inputUn = document.getElementById("unidademedida");
var inputMarca = document.getElementById("marca");
var inputValorProduto = document.getElementById("valorproduto");
var inputDescricaoProduto = document.getElementById("descricaoProduto");

button__adicionar.addEventListener("click", () => {
  push__basket();
});

function push__basket() {
  if (
    inputQtde.value != "" &&
    inputProduto.value != "" &&
    inputUn.value != "" &&
    inputMarca.value != "" &&
    inputValorProduto.value != ""
  ) {
    document.getElementById("table__produtos").style.display = "table";
    createTable();
    button__cancelar.style.display = 'block';
    button__finalizar.style.display = 'block';
    table.style.display = 'table';

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

function createTable() {
  var qtde = inputQtde.value;
  var produto = inputProduto.value;
  var un = inputUn.value;
  var marca = inputMarca.value;
  var valorProduto = inputValorProduto.value;
  var descricaoProduto = inputDescricaoProduto.value;

  var basketTable = document.getElementById("basket__table__tbody");

  var row = basketTable.insertRow(0);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cellRemoveRow = row.insertCell(6);

  cell1.innerHTML = qtde;
  cell2.innerHTML = produto;
  cell3.innerHTML = un;
  cell4.innerHTML = marca;
  cell5.innerHTML = valorProduto;
  cell6.innerHTML = descricaoProduto;

  var span = document.createElement("span");
  span.classList.add("fa-solid");
  span.classList.add("fa-trash");
  span.classList.add("basket__table--trash-icon");

  cellRemoveRow.appendChild(span);
  cellRemoveRow.classList.add("basket__table--align");
  span.onclick = function () {
    row.remove();
  };

  var span = document.createElement("span");
  span.classList.add("fa-solid");
  span.classList.add("fa-pen");
  span.classList.add("basket__table--edit-icon");

  cellRemoveRow.appendChild(span);

  span.onclick = function () {
    inputQtde.value = qtde;
    inputProduto.value = produto;
    inputUn.value = un;
    inputMarca.value = marca;
    inputValorProduto.value = valorProduto;
    inputDescricaoProduto.value = descricaoProduto;

    row.remove();
  };
}