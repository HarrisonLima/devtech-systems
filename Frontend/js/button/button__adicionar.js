var basket = [];

var button__cancelar = document.getElementById("button__cancelar");
var button__finalizar = document.getElementById("button__finalizar");
var button__clear = document.getElementById("trash-icon");
var table = document.getElementById("table__produtos");
var modal__ClearTable = document.getElementById("modal__ClearTable");

button__cancelar.style.display = "none";
button__finalizar.style.display = "none";
button__clear.style.display = "none";
table.style.display = "none";
modal__ClearTable.style.display = "none";

const button__adicionar = document.getElementById("button__adicionar");
var inputQtde = document.getElementById("quantidadeproduto");
var inputProduto = document.getElementById("produto");
var inputUn = document.getElementById("unidademedida");
var inputMarca = document.getElementById("marca");
var inputValorProduto = document.getElementById("valorproduto");
var inputDescricaoProduto = document.getElementById("descricaoProduto");
var inputSubtotal = document.getElementById("subtotal");

inputSubtotal.readOnly = true;

button__adicionar.addEventListener("click", () => {
  push__basket();
});

button__retirar.addEventListener("click", () => {
  reset__inputs();
});

button__clear.addEventListener("click", () => {
  confirm__clearbasket();
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
    table.style.display = "table";

    var qtde = inputQtde.value;
    var produto = inputProduto.value;
    var un = inputUn.value;
    var marca = inputMarca.value;
    var valorProduto = inputValorProduto.value;
    var descricaoProduto = inputDescricaoProduto.value;
    var valortotalproduto = parseFloat(qtde) * parseFloat(valorProduto);
    valortotalproduto = valortotalproduto.toFixed(2);

    var produto = {
      qtde: qtde,
      produto: produto,
      un: un,
      marca: marca,
      valorProduto: valorProduto,
      valortotalproduto: valortotalproduto,
      descricaoProduto: descricaoProduto,
    };

    basket.push(produto);
    console.log(basket);

    updateSubtotal();
    reset__inputs();

  }
}

function createTable() {
  var qtde = inputQtde.value;
  var produto = inputProduto.value;
  var un = inputUn.value;
  var marca = inputMarca.value;
  var valorProduto = inputValorProduto.value;
  var descricaoProduto = inputDescricaoProduto.value;
  var valortotalproduto = parseFloat(qtde) * parseFloat(valorProduto);
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
  cell7.innerHTML = descricaoProduto;

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
    inputDescricaoProduto.value = rowData.descricaoProduto;

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

const inputValor = document.getElementById("valorproduto");
inputValor.addEventListener("blur", function () {
  let valor = parseFloat(inputValor.value);
  if (!isNaN(valor)) {
    inputValor.value = valor.toFixed(2);
  }
});

function reset__inputs() {
  inputQtde.value = 1;
  inputProduto.value = "";
  inputUn.value = "";
  inputMarca.value = "";
  inputValorProduto.value = 1.00;
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

  const buttonConfirmar = document.getElementById("button_confirmarClearTable");
  const buttonCancelar = document.getElementById("button_cancelarClearTable");

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
  table.style.display = "none";
}
