var inputPeca = document.getElementById("peca");
var inputMarca = document.getElementById("marca");
var inputDescricao = document.getElementById("descricao");

inputPeca.addEventListener("input", () => {
  filter = inputPeca.value.toUpperCase();
  table = document.getElementById("tabela__pecas");
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
  table = document.getElementById("tabela__pecas");
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
  table = document.getElementById("tabela__pecas");
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

function getPecas(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabela = document.getElementById("tabela__pecas");
const content = document.getElementById("content");
const header = document.getElementById("header");

function adicionaLinha(peca) {
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdPeca = document.createElement("td");
  tdMarca = document.createElement("td");
  tdDescricao = document.createElement("td");
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

function criaColunas(Column) {
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
  header.appendChild(elementRow);
  tabela.appendChild(header);
}

function updateRegistros() {
  tabela.innerHTML = "";
  header.innerHTML = "";
  criaColunas();
  let data = getPecas("http://localhost:3000/api/pecas");
  let pecas = JSON.parse(data);
  pecas.forEach((element) => {
    let linha = adicionaLinha(element);
    tabela.appendChild(linha);
  });
}

updateRegistros();
