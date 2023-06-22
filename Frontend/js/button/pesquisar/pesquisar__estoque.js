var inputPeca = document.getElementById("produto");
var inputMarca = document.getElementById("marca");
var inputDescricao = document.getElementById("descricao");

inputPeca.addEventListener("input", () => {
  filter = inputPeca.value.toUpperCase();
  table = document.getElementById("tabela__produtos");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
})

inputMarca.addEventListener("input", () => {
  filter = inputMarca.value.toUpperCase();
  table = document.getElementById("tabela__produtos");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
})

inputDescricao.addEventListener("input", () => {
  filter = inputDescricao.value.toUpperCase();
  table = document.getElementById("tabela__produtos");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
})


function getProdutos(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabela = document.getElementById("tabela__produtos");
const header = document.getElementById("header");

function adicionaLinha(produto) {
  let linha = document.createElement("tr");
  let tdId = document.createElement("td");
  let tdProduto = document.createElement("td");
  let tdUn = document.createElement("td");
  let tdValor = document.createElement("td");
  let tdMarca = document.createElement("td");
  let tdEstoque = document.createElement("td");
  let tdDescricao = document.createElement("td");
  let tdIcons = document.createElement("td");

  tdId.innerHTML = produto.id;
  tdProduto.innerHTML = produto.produto;
  tdUn.innerHTML = produto.un;
  tdValor.innerHTML = produto.valor;
  tdMarca.innerHTML = produto.marca;
  tdEstoque.innerHTML = produto.estoque;
  tdDescricao.innerHTML = produto.descricao;

  let editIcon = document.createElement("span");
  editIcon.classList.add(
    "fa-solid",
    "fa-pen",
    "table__edit-icon",
    "table__align"
  );
  tdEstoque.classList.add("editable");
  tdEstoque.removeAttribute("disabled");
  editIcon.onclick = enableEdit;

  editIcon.style.cursor = "pointer";

  tdIcons.appendChild(editIcon);

  linha.appendChild(tdId);
  linha.appendChild(tdProduto);
  linha.appendChild(tdUn);
  linha.appendChild(tdValor);
  linha.appendChild(tdMarca);
  linha.appendChild(tdEstoque);
  linha.appendChild(tdDescricao);
  linha.appendChild(tdIcons);

  return linha;
}

function criaColunas(Column) {
  const elementRow = document.createElement("tr");
  const elementColumnId = document.createElement("th");
  const elementColumnProduto = document.createElement("th");
  const elementColumnUn = document.createElement("th");
  const elementColumnValor = document.createElement("th");
  const elementColumnMarca = document.createElement("th");
  const elementColumnEstoque = document.createElement("th");
  const elementColumnDescricao = document.createElement("th");
  const elementColumnAcoes = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnProduto.innerHTML = "Produto";
  elementColumnUn.innerHTML = "Un";
  elementColumnValor.innerHTML = "Valor";
  elementColumnMarca.innerHTML = "Marca";
  elementColumnEstoque.innerHTML = "Estoque";
  elementColumnDescricao.innerHTML = "Descrição";
  elementColumnAcoes.innerHTML = "Ações";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnProduto);
  elementRow.appendChild(elementColumnUn);
  elementRow.appendChild(elementColumnValor);
  elementRow.appendChild(elementColumnMarca);
  elementRow.appendChild(elementColumnEstoque);
  elementRow.appendChild(elementColumnDescricao);
  elementRow.appendChild(elementColumnAcoes);

  header.appendChild(elementRow);
  tabela.appendChild(header);
}

function updateRegistros() {
  tabela.innerHTML = "";
  header.innerHTML = "";
  criaColunas();
  let data = getProdutos("http://localhost:3000/api/produtos");
  let produtos = JSON.parse(data);
  produtos.forEach((element) => {
    let linha = adicionaLinha(element);
    tabela.appendChild(linha);
  });
}

function enableEdit() {
  var tdEstoqueElement = this.parentNode.parentNode.querySelector(".editable"); // Ajustar a seleção do tdEstoqueElement
  if (tdEstoqueElement) {
    tdEstoqueElement.contentEditable = true;
    tdEstoqueElement.focus();
    tdEstoqueElement.addEventListener("keydown", function (e) {
      if (isNaN(Number(e.key)) && e.key !== "Backspace" && e.key !== "Delete") {
        e.preventDefault();
      }
    });
    tdEstoqueElement.addEventListener("blur", function () {
      tdEstoqueElement.contentEditable = false;
    });
  }
}

updateRegistros();
