const buttonPesquisarServicos = document.getElementById(
  "button__pesquisar--servico"
);
const buttonExportar = document.getElementById("button__exportar--pdf");

buttonExportar.style.display = 'none';

buttonPesquisarServicos.addEventListener("click", (event) => {
  event.preventDefault();
  updateRegistros();
  statusButtonExportar();
});

function statusButtonExportar() {
  buttonExportar.disabled = false;
  buttonExportar.style.display = 'block';
}

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
  tdValor = document.createElement("td");
  tdDescricao = document.createElement("td");
  tdId.innerHTML = servico.id;
  tdServico.innerHTML = servico.servico;
  tdValor.innerHTML = servico.valor;
  tdDescricao.innerHTML = servico.descricao;

  linha.appendChild(tdId);
  linha.appendChild(tdServico);
  linha.appendChild(tdValor);
  linha.appendChild(tdDescricao);

  return linha;
}

function criaColunas(Column) {
  const elementRow = document.createElement("tr");
  const elementColumnId = document.createElement("th");
  const elementColumnServico = document.createElement("th");
  const elementColumnValor = document.createElement("th");
  const elementColumnDescricao = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnServico.innerHTML = "Servico";
  elementColumnValor.innerHTML = "Valor";
  elementColumnDescricao.innerHTML = "Descricao";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnServico);
  elementRow.appendChild(elementColumnValor);
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