var inputPeca = document.getElementById("produto");
var inputMarca = document.getElementById("marca");
var inputDescricao = document.getElementById("descricao");

inputPeca.addEventListener("input", () => {
  filter = inputPeca.value.toUpperCase();
  table = document.getElementById("tabela__usuarios");
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
  table = document.getElementById("tabela__usuarios");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
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
  table = document.getElementById("tabela__usuarios");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
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
const content = document.getElementById("content");
const header = document.getElementById("header");

function adicionaLinha(produto) {
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

function criaColunas(Column) {
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

updateRegistros();
