var basket = [];

var button__adicionar = document.getElementById("button__adicionar");
var button__cancelar = document.getElementById("button__cancelar");
var button__check = document.getElementById("icon__check");
var button__clear = document.getElementById("trash-icon");
var button__finalizar = document.getElementById("button__finalizar");
var button__pesquisar = document.getElementById("icon__search");
var button__pesquisarVeiculo = document.getElementById("icon__searchVeiculo");
var button__closeModal = document.getElementById("icon__xmark");
var button__closeModalSelect = document.getElementById("icon__xmark--select");
var button__closeModalSelectVeiculo = document.getElementById(
  "icon__xmark--selectVeiculo"
);
var button__retirar = document.getElementById("button__retirar");
var divsubtotal = document.getElementById("div__subtotal");
var inputBuscar = document.getElementById("pesquisarItem");
var inputBuscarVeiculo = document.getElementById("pesquisarVeiculo");
var modal__ClearTable = document.getElementById("modal__ClearTable");
var modal__SelectItem = document.getElementById("modal__SelectItem");
var modal__SelectVeiculo = document.getElementById("modal__SelectVeiculo");
var tableItens = document.getElementById("table__itens");
var rowsTableItens = tableItens.getElementsByTagName("tr");
var tableVeiculos = document.getElementById("tabela__veiculospf");
var rowsTableVeiculos = tableVeiculos.getElementsByTagName("tr");

button__adicionar.style.display = "none";
button__cancelar.style.display = "none";
button__check.style.display = "none";
button__clear.style.display = "none";
button__finalizar.style.display = "none";
button__retirar.style.display = "none";
divsubtotal.style.display = "none";
modal__ClearTable.style.display = "none";
modal__SelectItem.style.display = "none";
modal__SelectVeiculo.style.display = "none";
tableItens.style.display = "none";
button__pesquisarVeiculo.style.marginLeft = "15px";

var inputQtde = document.getElementById("quantidadeitem");
var inputItem = document.getElementById("item");
var inputValorItem = document.getElementById("valoritem");
var inputDescricaoItem = document.getElementById("descricaoitem");
var inputSubtotal = document.getElementById("subtotal");
var inputnomeProprietario = document.getElementById("nomeProprietario");
var inputDocumentoProprietario = document.getElementById("documentoProprietario");
var inputData = document.getElementById("inputData");

var qtde;
var item;
var valorItem;
var descricao;
var valortotalitem;

var veiculo;
var documento;

inputQtde.disabled = true;
inputItem.disabled = true;
inputValorItem.disabled = true;
inputDescricaoItem.disabled = true;
inputnomeProprietario.disabled = true;
inputDocumentoProprietario.disabled = true;

inputBuscar.readOnly = true;
inputDocumentoProprietario.readOnly = true;
inputnomeProprietario.readOnly = true;
inputBuscarVeiculo.readOnly = true;
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

button__closeModalSelectVeiculo.addEventListener("click", (event) => {
  modal__SelectVeiculo.style.display = "none";
});

button__pesquisar.addEventListener("click", (event) => {
  event.preventDefault();
  selectItem();
});

inputBuscar.addEventListener("dblclick", (event) => {
  event.preventDefault();
  selectItem();
});

button__pesquisarVeiculo.addEventListener("click", (event) => {
  event.preventDefault();
  selectVeiculo();
});

inputBuscarVeiculo.addEventListener("dblclick", (event) => {
  event.preventDefault();
  selectVeiculo();
});

button__adicionar.addEventListener("click", () => {
  push__basket();

  inputQtde.disabled = true;
  inputItem.disabled = true;
  inputValorItem.disabled = true;
  inputDescricaoItem.disabled = true;

  button__adicionar.style.display = "none";
  button__retirar.style.display = "none";
});

button__retirar.addEventListener("click", () => {
  reset__inputs();

  inputQtde.disabled = true;
  inputItem.disabled = true;
  inputValorItem.disabled = true;
  inputDescricaoItem.disabled = true;

  button__adicionar.style.display = "none";
  button__retirar.style.display = "none";
});

button__clear.addEventListener("click", () => {
  confirm__clearbasket();
});

button__check.addEventListener("click", () => {
  var itemExistente = verificarItemExistente(item.textContent);
  if (itemExistente) {
    alert("O item já está presente na tabela.");
  } else {
    console.log("O item não foi encontrado na tabela.");
    inputQtde.disabled = false;
    inputValorItem.disabled = false;
    
    inputQtde.value = 1;
    const valorDefault = 1.0;
    inputValorItem.value = valorDefault.toFixed(2);

    inputItem.value = item.textContent;
    inputDescricaoItem.value = descricao.textContent;

    inputBuscar.value = "";

    button__adicionar.style.display = "block";
    button__retirar.style.display = "block";
    button__check.style.display = "none";
    button__pesquisarVeiculo.style.marginLeft = "15px";
  }
});

function push__basket() {
  if (
    inputQtde.value > 0 &&
    inputItem.value != "" &&
    inputValorItem.value > 0
  ) {
    document.getElementById("table__itens").style.display = "table";
    createTable();
    button__cancelar.style.display = "block";
    button__finalizar.style.display = "block";
    button__clear.style.display = "inline";
    tableItens.style.display = "table";

    qtde = inputQtde.value;
    item = inputItem.value;
    valorItem = inputValorItem.value;
    descricao = inputDescricaoItem.value;
    valortotalitem = parseFloat(qtde) * parseFloat(valorItem);
    valortotalitem = valortotalitem.toFixed(2);

    var item = {
      qtde: qtde,
      item: item,
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
  valorItem = inputValorItem.value;
  descricao = inputDescricaoItem.value;
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
  var cellRemoveRow = row.insertCell(5);

  cell1.innerHTML = qtde;
  cell2.innerHTML = item;
  cell3.innerHTML = valorItem;
  cell4.innerHTML = valortotalitem;
  cell5.innerHTML = descricao;

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
    inputValorItem.value = rowData.valorItem;
    inputDescricaoItem.value = rowData.descricao;

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

function verificarItemExistente(item) {
  for (var i = 1; i < tableItens.rows.length; i++) {
    var celula = tableItens.rows[i].cells[1];
    var valorCelula = celula.textContent;

    if (valorCelula === item) {
      return true;
    }
  }

  return false;
}

function reset__inputs() {
  inputQtde.value = "";
  inputItem.value = "";
  inputValorItem.value = "";
  inputDescricaoItem.value = "";
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
  tableItens.style.display = "none";
  button__cancelar.style.display = "none";
  button__finalizar.style.display = "none";
}

function selectItem() {
  modal__SelectItem.style.display = "block";
  updateRegistros();
}

function getServicos(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabelaServicos = document.getElementById("tabela__itens");
const contentSerivicos = document.getElementById("content");
const headerServicos = document.getElementById("header");

function adicionaLinha(servico) {
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdServico = document.createElement("td");
  tdDescricao = document.createElement("td");
  tdId.innerHTML = servico.id;
  tdServico.innerHTML = servico.servico;
  tdDescricao.innerHTML = servico.descricao;

  linha.appendChild(tdId);
  linha.appendChild(tdServico);
  linha.appendChild(tdDescricao);

  return linha;
}

function criaColunas(Column) {
  const elementRow = document.createElement("tr");
  const elementColumnId = document.createElement("th");
  const elementColumnServico = document.createElement("th");
  const elementColumnDescricao = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnServico.innerHTML = "Serviço";
  elementColumnDescricao.innerHTML = "Descricao";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnServico);
  elementRow.appendChild(elementColumnDescricao);
  headerServicos.appendChild(elementRow);
  tabelaServicos.appendChild(headerServicos);
}

function updateRegistros() {
  tabelaServicos.innerHTML = "";
  headerServicos.innerHTML = "";
  criaColunas();
  let data = getServicos("http://localhost:3000/api/servicos");
  let servicos = JSON.parse(data);

  function selectionServico() {
    var nomeItem = this.querySelector("td:nth-child(2)");
    var descricaoItem = this.querySelector("td:nth-child(3)");

    item = nomeItem;
    descricao = descricaoItem;

    inputBuscar.value = item.textContent;

    button__check.style.display = "block";
    button__pesquisarVeiculo.style.marginLeft = "-0.1px";
    modal__SelectItem.style.display = "none";
  }

  function paintRow() {
    for (var i = 0, row; (row = tabelaServicos.rows[i]); i++) {
      tabelaServicos.rows[i].removeAttribute("style");
    }
    this.style.backgroundColor = "#ffac1c";
  }

  servicos.forEach((element) => {
    var linha = adicionaLinha(element);
    linha.addEventListener("dblclick", selectionServico);
    linha.addEventListener("click", paintRow);
    tabelaServicos.appendChild(linha);
  });
}

function selectVeiculo() {
  modal__SelectVeiculo.style.display = "block";
  updateRegistrosVeiculo();
}

function getVeiculospf(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabelaVeiculo = document.getElementById("tabela__veiculospf");
const contentVeiculo = document.getElementById("content__veiculospf");
const headerVeiculo = document.getElementById("header__veiculospf");

function adicionaLinhaVeiculo(veiculo) {
  var linha = document.createElement("tr");
  var tdId = document.createElement("td");
  var tdMarca = document.createElement("td");
  var tdCor = document.createElement("td");
  var tdModelo = document.createElement("td");
  var tdPlaca = document.createElement("td");
  var tdProprietario = document.createElement("td");
  var tdCpf = document.createElement("td");

  tdId.innerHTML = veiculo.id;
  tdMarca.innerHTML = veiculo.marca;
  tdCor.innerHTML = veiculo.cor;
  tdModelo.innerHTML = veiculo.modelo;
  tdPlaca.innerHTML = veiculo.placa;
  tdProprietario.innerHTML = veiculo.nomeproprietario;
  tdCpf.innerHTML = veiculo.cpf;

  linha.appendChild(tdId);
  linha.appendChild(tdMarca);
  linha.appendChild(tdCor);
  linha.appendChild(tdModelo);
  linha.appendChild(tdPlaca);
  linha.appendChild(tdProprietario);
  linha.appendChild(tdCpf);

  return linha;
}

function criaColunasVeiculo(Column) {
  const elementRow = document.createElement("tr");
  const elementColumnId = document.createElement("th");
  const elementColumnMarca = document.createElement("th");
  const elementColumnCor = document.createElement("th");
  const elementColumnModelo = document.createElement("th");
  const elementColumnPlaca = document.createElement("th");
  const elementColumnProprietario = document.createElement("th");
  const elementColumnCpf = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnMarca.innerHTML = "Marca";
  elementColumnCor.innerHTML = "Cor";
  elementColumnModelo.innerHTML = "Modelo";
  elementColumnPlaca.innerHTML = "Placa";
  elementColumnProprietario.innerHTML = "Proprietário";
  elementColumnCpf.innerHTML = "CPF";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnMarca);
  elementRow.appendChild(elementColumnCor);
  elementRow.appendChild(elementColumnModelo);
  elementRow.appendChild(elementColumnPlaca);
  elementRow.appendChild(elementColumnProprietario);
  elementRow.appendChild(elementColumnCpf);

  headerVeiculo.appendChild(elementRow);
  tabelaVeiculo.appendChild(headerVeiculo);
}

function updateRegistrosVeiculo() {
  tabelaVeiculo.innerHTML = "";
  headerVeiculo.innerHTML = "";
  criaColunasVeiculo();
  let data = getVeiculospf("http://localhost:3000/api/veiculospf");
  let veiculo = JSON.parse(data);

  function selectionVeiculo() {
    var veiculoModelo = this.querySelector("td:nth-child(4)");
    var nomeProprietario = this.querySelector("td:nth-child(6)");
    var documentoProprietario = this.querySelector("td:nth-child(7)");

    veiculo = veiculoModelo;
    proprietario = nomeProprietario;
    documento = documentoProprietario;

    inputBuscarVeiculo.value = veiculo.textContent;
    inputDocumentoProprietario.value = documento.textContent;
    inputnomeProprietario.value = proprietario.textContent;

    modal__SelectVeiculo.style.display = "none";
  }

  var rowVeiculo;
  function paintRowVeiculo() {
    for (var i = 0; (rowVeiculo = tabelaVeiculo.rows[i]); i++) {
      tabelaVeiculo.rows[i].removeAttribute("style");
    }
    this.style.backgroundColor = "#ffac1c";
  }

  veiculo.forEach((element) => {
    var linhaVeiculo = adicionaLinhaVeiculo(element);
    linhaVeiculo.addEventListener("dblclick", selectionVeiculo);
    linhaVeiculo.addEventListener("click", paintRowVeiculo);
    tabelaVeiculo.appendChild(linhaVeiculo);
  });
}
