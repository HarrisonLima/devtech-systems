var basket = [];

var button__adicionar = document.getElementById("button__adicionar");
var button__cancelar = document.getElementById("button__cancelar");
var button__check = document.getElementById("icon__check");
var button__clear = document.getElementById("trash-icon");
var button__finalizar = document.getElementById("button__finalizar");
var button__pesquisar = document.getElementById("icon__search");
var button__pesquisarCliente = document.getElementById("icon__searchCliente");
var button__closeModal = document.getElementById("icon__xmark");
var button__closeModalSelect = document.getElementById("icon__xmark--select");
var button__closeModalSelectCliente = document.getElementById(
  "icon__xmark--selectCliente"
);
var button__retirar = document.getElementById("button__retirar");
var divsubtotal = document.getElementById("div__subtotal");
var inputBuscar = document.getElementById("pesquisarProduto");
var inputBuscarCliente = document.getElementById("pesquisarCliente");
var inputEstoque = document.getElementById("estoque");
var modal__ClearTable = document.getElementById("modal__ClearTable");
var modal__SelectProduct = document.getElementById("modal__SelectProduct");
var modal__SelectCliente = document.getElementById("modal__SelectCliente");
var tableProdutos = document.getElementById("table__produtos");
var rowsTableProdutos = tableProdutos.getElementsByTagName("tr");
var tableClientes = document.getElementById("tabela__clientespj");
var rowsTableClientes = tableClientes.getElementsByTagName("tr");

button__adicionar.style.display = "none";
button__cancelar.style.display = "none";
button__check.style.display = "none";
button__clear.style.display = "none";
button__finalizar.style.display = "none";
button__retirar.style.display = "none";
divsubtotal.style.display = "none";
modal__ClearTable.style.display = "none";
modal__SelectProduct.style.display = "none";
modal__SelectCliente.style.display = "none";
tableProdutos.style.display = "none";
button__pesquisarCliente.style.marginLeft = "15px";

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

var razaoSocial;
var qtdeEstoque;

inputQtde.disabled = true;
inputProduto.disabled = true;
inputUn.disabled = true;
inputMarca.disabled = true;
inputValorProduto.disabled = true;
inputDescricaoProduto.disabled = true;

inputEstoque.readOnly = true;
inputBuscar.readOnly = true;
inputSubtotal.readOnly = true;

inputValorProduto.addEventListener("blur", function () {
  let valor = parseFloat(inputValorProduto.value);
  if (!isNaN(valor)) {
    inputValorProduto.value = valor.toFixed(2);
  }
});

button__closeModal.addEventListener("click", (event) => {
  modal__ClearTable.style.display = "none";
});

button__closeModalSelect.addEventListener("click", (event) => {
  modal__SelectProduct.style.display = "none";
});

button__closeModalSelectCliente.addEventListener("click", (event) => {
  modal__SelectCliente.style.display = "none";
});

button__pesquisar.addEventListener("click", (event) => {
  event.preventDefault();
  selectProduct();
});

inputBuscar.addEventListener("dblclick", (event) => {
  event.preventDefault();
  selectProduct();
});

button__pesquisarCliente.addEventListener("click", (event) => {
  event.preventDefault();
  selectCliente();
});

inputBuscarCliente.addEventListener("dblclick", (event) => {
  event.preventDefault();
  selectCliente();
});

button__adicionar.addEventListener("click", () => {
  push__basket();

  inputQtde.disabled = true;
  inputProduto.disabled = true;
  inputUn.disabled = true;
  inputMarca.disabled = true;
  inputValorProduto.disabled = true;
  inputDescricaoProduto.disabled = true;

  button__adicionar.style.display = "none";
  button__retirar.style.display = "none";
});

button__retirar.addEventListener("click", () => {
  reset__inputs();

  inputQtde.disabled = true;
  inputProduto.disabled = true;
  inputUn.disabled = true;
  inputMarca.disabled = true;
  inputValorProduto.disabled = true;
  inputDescricaoProduto.disabled = true;

  button__adicionar.style.display = "none";
  button__retirar.style.display = "none";
});

button__clear.addEventListener("click", () => {
  confirm__clearbasket();
});

button__check.addEventListener("click", () => {
  if (toParseFloat(inputEstoque.value) > 0) {
    inputQtde.disabled = false;
    inputValorProduto.disabled = false;

    inputQtde.value = 1;
    const valorDefault = 1.0;
    inputValorProduto.value = valorDefault.toFixed(2);

    inputProduto.value = produto.textContent;
    inputUn.value = un.textContent;
    inputMarca.value = marca.textContent;
    inputDescricaoProduto.value = descricao.textContent;

    inputBuscar.value = "";

    button__adicionar.style.display = "block";
    button__retirar.style.display = "block";
    button__check.style.display = "none";
    button__pesquisarCliente.style.marginLeft = "15px";
  } 
  else {
    inputEstoque.style.border = "solid 2px #FF0000 ";

    alert("Sem estoque do item selecionado!");

    setTimeout(function () {
      inputEstoque.style.border = "";
    }, 1500);
  }
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

    divsubtotal.style.display = "block";
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
    if (basket.length == 0) {
      clear__basket();
      button__clear.style.display = "none";
    }
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

    inputQtde.disabled = false;
    inputValorProduto.disabled = false;

    inputQtde.value = rowData.qtde;
    inputProduto.value = rowData.produto;
    inputUn.value = rowData.un;
    inputMarca.value = rowData.marca;
    inputValorProduto.value = rowData.valorProduto;
    inputDescricaoProduto.value = rowData.descricao;

    basket.splice(rowIndex - 1, 1);
    this.parentNode.parentNode.remove();

    updateSubtotal();

    button__adicionar.style.display = "block";
    button__retirar.style.display = "block";

    if (basket.length == 0) {
      clear__basket();
      button__clear.style.display = "none";
      button__cancelar.style.display = "none";
      button__finalizar.style.display = "none";
    }
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
  inputQtde.value = "";
  inputProduto.value = "";
  inputUn.value = "";
  inputMarca.value = "";
  inputValorProduto.value = "";
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
  inputSubtotal.value = subtotal.toFixed(2);

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
  divsubtotal.style.display = "none";
  tableProdutos.style.display = "none";
  button__cancelar.style.display = "none";
  button__finalizar.style.display = "none";
}

function selectProduct() {
  modal__SelectProduct.style.display = "block";
  updateRegistrosProduto();
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

const tabelaProduto = document.getElementById("tabela__produtos");
const contentProduto = document.getElementById("content");
const headerProduto = document.getElementById("header");

function adicionaLinhaProduto(produto) {
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdProduto = document.createElement("td");
  tdUn = document.createElement("td");
  tdMarca = document.createElement("td");
  tdEstoque = document.createElement("td");
  tdDescricao = document.createElement("td");
  tdId.innerHTML = produto.id;
  tdProduto.innerHTML = produto.produto;
  tdUn.innerHTML = produto.un;
  tdMarca.innerHTML = produto.marca;
  tdEstoque.innerHTML = produto.estoque;
  tdDescricao.innerHTML = produto.descricao;

  linha.appendChild(tdId);
  linha.appendChild(tdProduto);
  linha.appendChild(tdUn);
  linha.appendChild(tdMarca);
  linha.appendChild(tdEstoque);
  linha.appendChild(tdDescricao);

  return linha;
}

function criaColunasProduto(Column) {
  const elementRow = document.createElement("tr");
  const elementColumnId = document.createElement("th");
  const elementColumnProduto = document.createElement("th");
  const elementColumnUn = document.createElement("th");
  const elementColumnMarca = document.createElement("th");
  const elementColumnEstoque = document.createElement("th");
  const elementColumnDescricao = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnProduto.innerHTML = "Produto";
  elementColumnUn.innerHTML = "Un";
  elementColumnMarca.innerHTML = "Marca";
  elementColumnEstoque.innerHTML = "Estoque";
  elementColumnDescricao.innerHTML = "Descricao";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnProduto);
  elementRow.appendChild(elementColumnUn);
  elementRow.appendChild(elementColumnMarca);
  elementRow.appendChild(elementColumnEstoque);
  elementRow.appendChild(elementColumnDescricao);
  headerProduto.appendChild(elementRow);
  tabelaProduto.appendChild(headerProduto);
}

function updateRegistrosProduto() {
  tabelaProduto.innerHTML = "";
  headerProduto.innerHTML = "";
  criaColunasProduto();
  let data = getProdutos("http://localhost:3000/api/produtos");
  let produtos = JSON.parse(data);

  function selectionProduct() {
    var nomeProduto = this.querySelector("td:nth-child(2)");
    var unProduto = this.querySelector("td:nth-child(3)");
    var marcaProduto = this.querySelector("td:nth-child(4)");
    var estoqueItem = this.querySelector("td:nth-child(5)");
    var descricaoProduto = this.querySelector("td:nth-child(6)");

    produto = nomeProduto;
    un = unProduto;
    marca = marcaProduto;
    qtdeEstoque = estoqueItem;
    descricao = descricaoProduto;

    inputBuscar.value = produto.textContent;
    inputEstoque.value = parseFloat(qtdeEstoque.textContent).toFixed(2);

    if (inputEstoque.value == 0) {
      inputEstoque.style.color = "#FF0000";
      inputEstoque.style.fontWeight = "500";
    }

    button__check.style.display = "block";
    button__pesquisarCliente.style.marginLeft = "-0.1px";
    modal__SelectProduct.style.display = "none";
  }

  function paintRow() {
    for (var i = 0, row; (row = tabelaProduto.rows[i]); i++) {
      tabelaProduto.rows[i].removeAttribute("style");
    }
    this.style.backgroundColor = "#ffac1c";
  }

  produtos.forEach((element) => {
    var linha = adicionaLinhaProduto(element);
    linha.addEventListener("dblclick", selectionProduct);
    linha.addEventListener("click", paintRow);
    tabelaProduto.appendChild(linha);
  });
}

function selectCliente() {
  modal__SelectCliente.style.display = "block";
  updateRegistrosCliente();
  addIndexCliente();
}

function addIndexCliente() {
  for (var i = 1; i < rowsTableClientes.length; i++) {
    rowsTableClientes[i].setAttribute("data-index", i - 1);
  }
}

function getClientespj(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabelaCliente = document.getElementById("tabela__clientespj");
const contentCliente = document.getElementById("content__clientespj");
const headerCliente = document.getElementById("header__clientespj");

function adicionaLinhaCliente(cliente) {
  var linha = document.createElement("tr");
  var tdId = document.createElement("td");
  var tdRazaoSocial = document.createElement("td");
  var tdNomeFantasia = document.createElement("td");
  var tdCnpj = document.createElement("td");
  var tdCidade = document.createElement("td");
  var tdUf = document.createElement("td");

  tdId.innerHTML = cliente.id;
  tdRazaoSocial.innerHTML = cliente.razaosocial;
  tdNomeFantasia.innerHTML = cliente.nomefantasia;
  tdCnpj.innerHTML = cliente.cnpj;
  tdCidade.innerHTML = cliente.cidade;
  tdUf.innerHTML = cliente.uf;

  linha.appendChild(tdId);
  linha.appendChild(tdRazaoSocial);
  linha.appendChild(tdNomeFantasia);
  linha.appendChild(tdCnpj);
  linha.appendChild(tdCidade);
  linha.appendChild(tdUf);

  return linha;
}

function criaColunasCliente(Column) {
  const elementRow = document.createElement("tr");
  const elementColumnId = document.createElement("th");
  const elementColumnRazaoSocial = document.createElement("th");
  const elementColumnNomeFantasia = document.createElement("th");
  const elementColumnCnpj = document.createElement("th");
  const elementColumnCidade = document.createElement("th");
  const elementColumnUf = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnRazaoSocial.innerHTML = "Razão Social";
  elementColumnNomeFantasia.innerHTML = "Nome Fantasia";
  elementColumnCnpj.innerHTML = "CNPJ";
  elementColumnCidade.innerHTML = "Cidade";
  elementColumnUf.innerHTML = "UF";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnRazaoSocial);
  elementRow.appendChild(elementColumnNomeFantasia);
  elementRow.appendChild(elementColumnCnpj);
  elementRow.appendChild(elementColumnCidade);
  elementRow.appendChild(elementColumnUf);

  headerCliente.appendChild(elementRow);
  tabelaCliente.appendChild(headerCliente);
}

function updateRegistrosCliente() {
  tabelaCliente.innerHTML = "";
  headerCliente.innerHTML = "";
  criaColunasCliente();
  let data = getClientespj("http://localhost:3000/api/clientespj");
  let clientes = JSON.parse(data);

  function selectionCliente() {
    var razaoCliente = this.querySelector("td:nth-child(2)");

    razaoSocial = razaoCliente;

    inputBuscarCliente.readOnly = false;
    inputBuscarCliente.value = razaoSocial.textContent;
    inputBuscarCliente.readOnly = true;

    modal__SelectCliente.style.display = "none";
  }

  var rowCliente;
  function paintRowCliente() {
    for (var i = 0; (rowCliente = tabelaCliente.rows[i]); i++) {
      tabelaCliente.rows[i].removeAttribute("style");
    }
    this.style.backgroundColor = "#ffac1c";
  }

  clientes.forEach((element) => {
    var linhaCliente = adicionaLinhaCliente(element);
    linhaCliente.addEventListener("dblclick", selectionCliente);
    linhaCliente.addEventListener("click", paintRowCliente);
    tabelaCliente.appendChild(linhaCliente);
  });
}
