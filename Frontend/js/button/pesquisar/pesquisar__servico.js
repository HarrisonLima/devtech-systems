var inputServico = document.getElementById("servico");
var inputDescricao = document.getElementById("descricao");

inputServico.addEventListener("input", () => {
  filter = inputServico.value.toUpperCase();
  table = document.getElementById("tabela__servicos");
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

inputDescricao.addEventListener("input", () => {
  filter = inputDescricao.value.toUpperCase();
  table = document.getElementById("tabela__servicos");
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

function getServicos(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabela = document.getElementById("tabela__servicos");
const content = document.getElementById("content");
const header = document.getElementById("header");

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
  elementColumnServico.innerHTML = "Servico";
  elementColumnDescricao.innerHTML = "Descricao";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnServico);
  elementRow.appendChild(elementColumnDescricao);
  header.appendChild(elementRow);
  tabela.appendChild(header);
}

function updateRegistros() {
  tabela.innerHTML = "";
  header.innerHTML = "";
  criaColunas();
  let data = getServicos("http://localhost:3000/api/servicos");
  let servicos = JSON.parse(data);
  servicos.forEach((element) => {
    let linha = adicionaLinha(element);
    tabela.appendChild(linha);
  });
}

updateRegistros();
