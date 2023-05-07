var basket = [];

var button__adicionar = document.getElementById("button__adicionar");
var button__cancelar = document.getElementById("button__cancelar");
var button__check = document.getElementById("icon__check");
var button__clear = document.getElementById("trash-icon");
var button__finalizar = document.getElementById("button__finalizar");
var button__pesquisar = document.getElementById("icon__search");
var button__closeModal = document.getElementById("icon__xmark");
var button__closeModalSelect = document.getElementById("icon__xmark--select");
var inputBuscar = document.getElementById("pesquisarProduto");
var modal__ClearTable = document.getElementById("modal__ClearTable");
var modal__SelectProduct = document.getElementById("modal__SelectProduct");
var tableProdutos = document.getElementById("table__produtos");
var rowsTableProdutos = tableProdutos.getElementsByTagName("tr");

button__cancelar.style.display = "none";
button__finalizar.style.display = "none";
button__clear.style.display = "none";
modal__ClearTable.style.display = "none";
modal__SelectProduct.style.display = "none";
tableProdutos.style.display = "none";
icon__check.style.display = "none";

var inputQtde = document.getElementById("quantidadeproduto");
var inputProduto = document.getElementById("produto");
var inputUn = document.getElementById("unidademedida");
var inputMarca = document.getElementById("marca");
var inputValorProduto = document.getElementById("valorproduto");
var inputDescricaoProduto = document.getElementById("descricaoProduto");
var inputSubtotal = document.getElementById("subtotal");

var qtde;
var produto;
var un;
var marca;
var valorProduto;
var descricao;
var valortotalproduto;

inputValorProduto.addEventListener("blur", function () {
  let valor = parseFloat(inputValor).value;
  if (!isNaN(valor)) {
    inputValor.value = valor.toFixed(2);
  }
});

inputBuscar.readOnly = true;
inputSubtotal.readOnly = true;

button__closeModal.addEventListener("click", (event) => {
  modal__ClearTable.style.display = "none";
});

button__closeModalSelect.addEventListener("click", (event) => {
  modal__SelectProduct.style.display = "none";
});

button__pesquisar.addEventListener("click", (event) => {
  event.preventDefault();
  selectProduct();
});

inputBuscar.addEventListener("dblclick", (event) => {
  event.preventDefault();
  selectProduct();
});

button__adicionar.addEventListener("click", () => {
  push__basket();
});

button__retirar.addEventListener("click", () => {
  reset__inputs();
});

button__clear.addEventListener("click", () => {
  confirm__clearbasket();
});

icon__check.addEventListener("click", () => {
  inputProduto.value = produto.textContent;
  inputUn.value = un.textContent;
  inputMarca.value = marca.textContent;
  inputDescricaoProduto.value = descricao.textContent;

  inputBuscar.value = "";

  icon__check.style.display = 'none';
});

function push__basket() {
  if (
    inputQtde.value > 0 &&
    inputProduto.value != "" &&
    inputUn.value != "" &&
    inputMarca.value != "" &&
    inputValorProduto.value > 0
  ) {
    document.getElementById("table__produtos").style.display = "table";
    createTable();
    button__cancelar.style.display = "block";
    button__finalizar.style.display = "block";
    button__clear.style.display = "inline";
    tableProdutos.style.display = "table";

    qtde = inputQtde.value;
    produto = inputProduto.value;
    un = inputUn.value;
    marca = inputMarca.value;
    valorProduto = inputValorProduto.value;
    descricao = inputDescricaoProduto.value;
    valortotalproduto = parseFloat(qtde) * parseFloat(valorProduto);
    valortotalproduto = valortotalproduto.toFixed(2);

    var produto = {
      qtde: qtde,
      produto: produto,
      un: un,
      marca: marca,
      valorProduto: valorProduto,
      valortotalproduto: valortotalproduto,
      descricao: descricao,
    };

    basket.push(produto);
    console.log(basket);

    updateSubtotal();
    reset__inputs();
  }
}

function createTable() {
  qtde = inputQtde.value;
  produto = inputProduto.value;
  un = inputUn.value;
  marca = inputMarca.value;
  valorProduto = inputValorProduto.value;
  descricao = inputDescricaoProduto.value;
  valortotalproduto = parseFloat(qtde) * parseFloat(valorProduto);
  valortotalproduto = valortotalproduto.toFixed(2);

  var basketTable = document.getElementById("basket__table__tbody");
  var rowIndex = basketTable.rows.length;

  var row = basketTable.insertRow(rowIndex);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cellRemoveRow = row.insertCell(7);

  cell1.innerHTML = qtde;
  cell2.innerHTML = produto;
  cell3.innerHTML = un;
  cell4.innerHTML = marca;
  cell5.innerHTML = valorProduto;
  cell6.innerHTML = valortotalproduto;
  cell7.innerHTML = descricao;

  var trashIcon = document.createElement("span");
  trashIcon.classList.add(
    "fa-solid",
    "fa-trash",
    "basket__table--trash-icon",
    "basket__table--align"
  );
  trashIcon.setAttribute("data-index", rowIndex);
  trashIcon.addEventListener("click", function () {
    removeRow(this);
  });

  cellRemoveRow.appendChild(trashIcon);

  var editIcon = document.createElement("span");
  editIcon.classList.add(
    "fa-solid",
    "fa-pen",
    "basket__table--edit-icon",
    "basket__table--align"
  );

  trashIcon.style.display = "inline";
  editIcon.style.display = "inline";

  cellRemoveRow.appendChild(editIcon);

  editIcon.onclick = function () {
    var rowIndex = this.parentNode.parentNode.rowIndex;
    var rowData = basket[rowIndex - 1];

    inputQtde.value = rowData.qtde;
    inputProduto.value = rowData.produto;
    inputUn.value = rowData.un;
    inputMarca.value = rowData.marca;
    inputValorProduto.value = rowData.valorProduto;
    inputDescricaoProduto.value = rowData.descricao;

    basket.splice(rowIndex - 1, 1);
    this.parentNode.parentNode.remove();

    updateSubtotal();
  };

  function removeRow(element) {
    var index = element.getAttribute("data-index");

    basket.splice(index, 1);
    element.closest("tr").remove();

    updateSubtotal();
  }

  rowIndex++;
}

function reset__inputs() {
  inputQtde.value = 1;
  inputProduto.value = "";
  inputUn.value = "";
  inputMarca.value = "";
  inputValorProduto.value = 1.0;
  inputDescricaoProduto.value = "";
}

function updateSubtotal() {
  var tamArray = basket.length;
  var subtotal = 0;
  var j;

  for (j = 0; j < tamArray; j++) {
    subtotal += parseFloat(basket[j].valortotalproduto);
  }

  console.log(subtotal);

  inputSubtotal.readOnly = false;

  inputSubtotal.textContent = subtotal.toFixed(2);
  inputSubtotal.value = parseFloat(subtotal);

  inputSubtotal.readOnly = true;

  console.log(basket);
}

function confirm__clearbasket() {
  modal__ClearTable.style.display = "block";

  const buttonConfirmar = document.getElementById(
    "button__confirmarClearTable"
  );
  const buttonCancelar = document.getElementById("button__cancelarClearTable");

  buttonConfirmar.addEventListener("click", () => {
    clear__basket();
    modal__ClearTable.style.display = "none";
    button__clear.style.display = "none";
  });

  buttonCancelar.addEventListener("click", () => {
    modal__ClearTable.style.display = "none";
  });
}

function clear__basket() {
  var basketTable = document.getElementById("basket__table__tbody");
  basketTable.innerHTML = "";

  basket.length = 0;

  updateSubtotal();
  tableProdutos.style.display = "none";
}

function selectProduct() {
  modal__SelectProduct.style.display = "block";
  updateRegistros();
  addIndex();
}

function addIndex() {
  for (var i = 1; i < rowsTableProdutos.length; i++) {
    rowsTableProdutos[i].setAttribute("data-index", i - 1);
  }
}

function getProdutos(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabela = document.getElementById("tabela__produtos");
const content = document.getElementById("content");
const header = document.getElementById("header");

function adicionaLinha(produto) {
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdProduto = document.createElement("td");
  tdUn = document.createElement("td");
  tdMarca = document.createElement("td");
  tdDescricao = document.createElement("td");
  tdId.innerHTML = produto.id;
  tdProduto.innerHTML = produto.produto;
  tdUn.innerHTML = produto.un;
  tdMarca.innerHTML = produto.marca;
  tdDescricao.innerHTML = produto.descricao;

  linha.appendChild(tdId);
  linha.appendChild(tdProduto);
  linha.appendChild(tdUn);
  linha.appendChild(tdMarca);
  linha.appendChild(tdDescricao);

  return linha;
}

function criaColunas(Column) {
  const elementRow = document.createElement("tr");
  const elementColumnId = document.createElement("th");
  const elementColumnProduto = document.createElement("th");
  const elementColumnUn = document.createElement("th");
  const elementColumnMarca = document.createElement("th");
  const elementColumnDescricao = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnProduto.innerHTML = "Produto";
  elementColumnUn.innerHTML = "Un";
  elementColumnMarca.innerHTML = "Marca";
  elementColumnDescricao.innerHTML = "Descricao";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnProduto);
  elementRow.appendChild(elementColumnUn);
  elementRow.appendChild(elementColumnMarca);
  elementRow.appendChild(elementColumnDescricao);
  header.appendChild(elementRow);
  tabela.appendChild(header);
}

function updateRegistros() {
  tabela.innerHTML = "";
  header.innerHTML = "";
  criaColunas();
  let data = getProdutos("http://localhost:3000/api/produtos");
  let produtos = JSON.parse(data);


  function selectionProduct() {
    var nomeProduto = this.querySelector("td:nth-child(2)");
    var unProduto = this.querySelector("td:nth-child(3)");
    var marcaProduto = this.querySelector("td:nth-child(4)");
    var descricaoProduto = this.querySelector("td:nth-child(5)");

    produto = nomeProduto;
    un = unProduto;
    marca = marcaProduto;
    descricao = descricaoProduto;

    inputBuscar.readOnly = false;
    inputBuscar.value = produto.textContent;
    inputBuscar.readOnly = true;
    icon__check.style.display = "block";
    modal__SelectProduct.style.display = "none";
  }

  function paintRow(){

    for (var i = 0, row; row = tabela.rows[i]; i++) {
      tabela.rows[i].removeAttribute("style");      
    }
    this.style.backgroundColor = "#ffac1c";
  }

  produtos.forEach((element) => {
    var linha = adicionaLinha(element);
    linha.addEventListener("dblclick", selectionProduct);
    linha.addEventListener("click", paintRow);
    tabela.appendChild(linha);
  });
}
