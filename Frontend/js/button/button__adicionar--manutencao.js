var basket = [];

var button__adicionar = document.getElementById("button__adicionar");
var button__cancelar = document.getElementById("button__cancelar");
var button__check = document.getElementById("icon__check");
var button__clear = document.getElementById("trash-icon");
var button__emitir = document.getElementById("button__emitir");
var button__pesquisar = document.getElementById("icon__search");
var button__pesquisarCliente = document.getElementById("icon__searchCliente");
var button__closeModal = document.getElementById("icon__xmark");
var button__closeModalSelect = document.getElementById("icon__xmark--select");
var button__closeModalSelectCliente = document.getElementById(
  "icon__xmark--selectCliente"
);
var button__retirar = document.getElementById("button__retirar");
var divsubtotal = document.getElementById("div__subtotal");
var inputBuscar = document.getElementById("pesquisarItem");
var inputBuscarCliente = document.getElementById("pesquisarCliente");
var modal__ClearTable = document.getElementById("modal__ClearTable");
var modal__SelectItem = document.getElementById("modal__SelectItem");
var modal__SelectCliente = document.getElementById("modal__SelectCliente");
var tableProdutos = document.getElementById("table__produtos");
var rowsTableProdutos = tableProdutos.getElementsByTagName("tr");
var tableClientespf = document.getElementById("tabela__clientespf");
var rowsTableClientes = tableClientespf.getElementsByTagName("tr");
var tableClientespj = document.getElementById("tabela__clientespj");
var rowsTableClientes = tableClientespj.getElementsByTagName("tr");

button__adicionar.style.display = "none";
button__cancelar.style.display = "none";
button__check.style.display = "none";
button__clear.style.display = "none";
button__emitir.style.display = "none";
button__retirar.style.display = "none";
divsubtotal.style.display = "none";
modal__ClearTable.style.display = "none";
modal__SelectItem.style.display = "none";
modal__SelectCliente.style.display = "none";
tableProdutos.style.display = "none";
button__pesquisarCliente.style.marginLeft = "15px";

var inputQtde = document.getElementById("quantidadeproduto");
var inputItem = document.getElementById("item");
var inputUn = document.getElementById("unidademedida");
var inputMarca = document.getElementById("marca");
var inputValorItem = document.getElementById("valorproduto");
var inputDescricao = document.getElementById("descricao");
var inputSubtotal = document.getElementById("subtotal");

var qtde;
var item;
var un;
var marca;
var valorItem;
var descricao;
var valortotalitem;

var cliente;

inputQtde.disabled = true;
inputItem.disabled = true;
inputUn.disabled = true;
inputMarca.disabled = true;
inputValorItem.disabled = true;
inputDescricao.disabled = true;

inputBuscar.readOnly = true;
inputBuscarCliente.readOnly = true;
inputSubtotal.readOnly = true;

inputValorItem.addEventListener("blur", function () {
  let valor = parseFloat(inputValorItem.value);
  if (!isNaN(valor)) {
    inputValorItem.value = valor.toFixed(2);
  }
});

button__closeModal.addEventListener("click", (event) => {
  modal__ClearTable.style.display = "none";
});

button__closeModalSelect.addEventListener("click", (event) => {
  modal__SelectItem.style.display = "none";
});

button__closeModalSelectCliente.addEventListener("click", (event) => {
  modal__SelectCliente.style.display = "none";
});

button__pesquisar.addEventListener("click", (event) => {
  event.preventDefault();
  selectItem();
});

inputBuscar.addEventListener("dblclick", (event) => {
  event.preventDefault();
  selectItem();
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
  inputItem.disabled = true;
  inputUn.disabled = true;
  inputMarca.disabled = true;
  inputValorItem.disabled = true;
  inputDescricao.disabled = true;

  button__adicionar.style.display = "none";
  button__retirar.style.display = "none";
});

button__retirar.addEventListener("click", () => {
  reset__inputs();

  inputQtde.disabled = true;
  inputItem.disabled = true;
  inputUn.disabled = true;
  inputMarca.disabled = true;
  inputValorItem.disabled = true;
  inputDescricao.disabled = true;

  button__adicionar.style.display = "none";
  button__retirar.style.display = "none";
});

button__clear.addEventListener("click", () => {
  confirm__clearbasket();
});

button__check.addEventListener("click", () => {
  inputQtde.disabled = false;
  inputValorItem.disabled = false;

  inputQtde.value = 1;
  const valorDefault = 1.0;
  inputValorItem.value = valorDefault.toFixed(2);

  inputItem.value = item.textContent;
  inputUn.value = un.textContent;
  inputMarca.value = marca.textContent;
  inputDescricao.value = descricao.textContent;

  inputBuscar.value = "";

  button__adicionar.style.display = "block";
  button__retirar.style.display = "block";
  button__check.style.display = "none";
  button__pesquisarCliente.style.marginLeft = "15px";
});

function push__basket() {
  if (
    inputQtde.value > 0 &&
    inputItem.value != "" &&
    inputUn.value != "" &&
    inputMarca.value != "" &&
    inputValorItem.value > 0
  ) {
    document.getElementById("table__produtos").style.display = "table";
    createTable();
    button__cancelar.style.display = "block";
    button__emitir.style.display = "block";
    button__clear.style.display = "inline";
    tableProdutos.style.display = "table";

    qtde = inputQtde.value;
    item = inputItem.value;
    un = inputUn.value;
    valorItem = inputValorItem.value;

    const half__marca = "Marca: " + inputMarca.value;
    const half__descricao = "Descrição: " + inputDescricao.value;

    descricao = half__marca + " - " + half__descricao;
    valortotalitem = parseFloat(qtde) * parseFloat(valorItem);
    valortotalitem = valortotalitem.toFixed(2);

    var item = {
      qtde: qtde,
      item: item,
      un: un,
      valorItem: valorItem,
      valortotalitem: valortotalitem,
      descricao: descricao,
    };

    basket.push(item);
    console.log(basket);

    divsubtotal.style.display = "block";
    updateSubtotal();
    reset__inputs();
  }
}

function createTable() {
  qtde = inputQtde.value;
  item = inputItem.value;
  un = inputUn.value;
  valorItem = inputValorItem.value;

  const half__marca = "Marca: " + inputMarca.value;
  const half__descricao = "Descrição: " + inputDescricao.value;

  descricao = half__marca + " - " + half__descricao;
  valortotalitem = parseFloat(qtde) * parseFloat(valorItem);
  valortotalitem = valortotalitem.toFixed(2);

  var basketTable = document.getElementById("basket__table__tbody");
  var rowIndex = basketTable.rows.length;

  var row = basketTable.insertRow(rowIndex);

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
  cell4.innerHTML = valorItem;
  cell5.innerHTML = valortotalitem;
  cell6.innerHTML = descricao;

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
    inputValorItem.disabled = false;

    inputQtde.value = rowData.qtde;
    inputItem.value = rowData.item;
    inputUn.value = rowData.un;
    inputValorItem.value = rowData.valorItem;
    inputDescricao.value = rowData.descricao;

    basket.splice(rowIndex - 1, 1);
    this.parentNode.parentNode.remove();

    updateSubtotal();

    button__adicionar.style.display = "block";
    button__retirar.style.display = "block";

    if (basket.length == 0) {
      clear__basket();
      button__clear.style.display = "none";
      button__cancelar.style.display = "none";
      button__emitir.style.display = "none";
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
  inputItem.value = "";
  inputUn.value = "";
  inputValorItem.value = "";
  inputDescricao.value = "";
}

function updateSubtotal() {
  var tamArray = basket.length;
  var subtotal = 0;
  var j;

  for (j = 0; j < tamArray; j++) {
    subtotal += parseFloat(basket[j].valortotalitem);
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
  button__emitir.style.display = "none";
}

function selectItem() {
  modal__SelectItem.style.display = "block";
  
  const radioPeca = document.getElementById('radio__peca');
  const radioServico = document.getElementById('radio__servico');

  if(radioPeca.checked == true){
    updateRegistrosPecas();
  } 
  // else if(radioServico.checked == true){
  //   updateRegistrosServicos();
  // }
}

function getPecas(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabelaPecas = document.getElementById("tabela__pecas");
const contentPecas = document.getElementById("content__pecas");
const headerPecas = document.getElementById("header__pecas");

function adicionaLinhaPecas(peca) {
  var linha = document.createElement("tr");
  var tdId = document.createElement("td");
  var tdPeca = document.createElement("td");
  var tdMarca = document.createElement("td");
  var tdDescricao = document.createElement("td");

  tdId.innerHTML = peca.id;
  tdPeca.innerHTML = peca.peca;
  tdMarca.innerHTML = peca.marca;
  tdDescricao.innerHTML = peca.descricao;

  linha.appendChild(tdId);
  linha.appendChild(tdPeca);
  linha.appendChild(tdMarca);
  linha.appendChild(tdDescricao);

  return linha;
}

function criaColunasPecas() {
  const elementRow = document.createElement("tr");
  const elementColumnId = document.createElement("th");
  const elementColumnPeca = document.createElement("th");
  const elementColumnMarca = document.createElement("th");
  const elementColumnDescricao = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnPeca.innerHTML = "Peca";
  elementColumnMarca.innerHTML = "Marca";
  elementColumnDescricao.innerHTML = "Descricao";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnPeca);
  elementRow.appendChild(elementColumnMarca);
  elementRow.appendChild(elementColumnDescricao);

  headerPecas.appendChild(elementRow);
  tabelaPecas.appendChild(headerPecas);
}

function updateRegistrosPecas() {
  tabelaPecas.innerHTML = "";
  headerPecas.innerHTML = "";
  criaColunasPecas();
  let data = getPecas("http://localhost:3000/api/pecas");
  let pecas = JSON.parse(data);

  function selectionPeca() {
    var nomeItem = this.querySelector("td:nth-child(2)");
    var marcaItem = this.querySelector("td:nth-child(3)");
    var descricaoItem = this.querySelector("td:nth-child(4)");

    item = nomeItem;
    marca = marcaItem;
    descricao = descricaoItem;

    inputBuscar.readOnly = false;
    inputBuscar.value = item.textContent;
    inputBuscar.readOnly = true;
    button__check.style.display = "block";
    button__pesquisarCliente.style.marginLeft = "-0.1px";
    modal__SelectItem.style.display = "none";
  }

  function paintRowPecas() {
    for (var i = 0, row; (row = tabelaPecas.rows[i]); i++) {
      tabelaPecas.rows[i].removeAttribute("style");
    }
    this.style.backgroundColor = "#ffac1c";
  }

  pecas.forEach((element) => {
    var linha = adicionaLinhaPecas(element);
    linha.addEventListener("dblclick", selectionPeca);
    linha.addEventListener("click", paintRowPecas);
    tabelaPecas.appendChild(linha);
  });
}

function selectCliente() {
  modal__SelectCliente.style.display = "block";
  
  const radioClientepf = document.getElementById('radio__clientepf');
  const radioClientepj = document.getElementById('radio__clientepf');
  if(radioClientepf.checked == true){
    updateRegistrosCliente();
  } else if(radioClientepj.checked == true){
    tabelaCliente.innerHTML = "";
    headerCliente.innerHTML = "";
  }
}

function getClientespf(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabelaCliente = document.getElementById("tabela__clientespf");
const contentCliente = document.getElementById("content__clientespf");
const headerCliente = document.getElementById("header__clientespf");

function adicionaLinhaCliente(cliente) {
  var linha = document.createElement("tr");
  var tdId = document.createElement("td");
  var tdNome = document.createElement("td");
  var tdCpf = document.createElement("td");
  var tdCidade = document.createElement("td");
  var tdUf = document.createElement("td");

  tdId.innerHTML = cliente.id;
  tdNome.innerHTML = cliente.nome;
  tdCpf.innerHTML = cliente.cpf;
  tdCidade.innerHTML = cliente.cidade;
  tdUf.innerHTML = cliente.uf;

  linha.appendChild(tdId);
  linha.appendChild(tdNome);
  linha.appendChild(tdCpf);
  linha.appendChild(tdCidade);
  linha.appendChild(tdUf);

  return linha;
}

function criaColunasCliente(Column) {
  const elementRow = document.createElement("tr");
  const elementColumnId = document.createElement("th");
  const elementColumnNome = document.createElement("th");
  const elementColumnCpf = document.createElement("th");
  const elementColumnCidade = document.createElement("th");
  const elementColumnUf = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnNome.innerHTML = "Nome";
  elementColumnCpf.innerHTML = "CPF";
  elementColumnCidade.innerHTML = "Cidade";
  elementColumnUf.innerHTML = "UF";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnNome);
  elementRow.appendChild(elementColumnCpf);
  elementRow.appendChild(elementColumnCidade);
  elementRow.appendChild(elementColumnUf);

  headerCliente.appendChild(elementRow);
  tabelaCliente.appendChild(headerCliente);
}

function updateRegistrosCliente() {
  tabelaCliente.innerHTML = "";
  headerCliente.innerHTML = "";
  criaColunasCliente();
  let data = getClientespf("http://localhost:3000/api/clientespf");
  let clientes = JSON.parse(data);

  function selectionCliente() {
    var nomeCliente = this.querySelector("td:nth-child(2)");

    cliente = nomeCliente;

    inputBuscarCliente.readOnly = false;
    inputBuscarCliente.value = cliente.textContent;
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
