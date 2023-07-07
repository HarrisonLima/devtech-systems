function getManutencoes(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabela = document.getElementById("tabela__manutencoes");
const header = document.getElementById("header");

function adicionaLinha(manutencao) {
  let linha = document.createElement("tr");
  let tdId = document.createElement("td");
  let tdDataInicio = document.createElement("td");
  let tdCliente = document.createElement("td");
  let tdVeiculo = document.createElement("td");
  let tdValor = document.createElement("td");
  let tdDescricao = document.createElement("td");
  let tdDataPrevisao = document.createElement("td");
  let tdDataEncerramento = document.createElement("td");
  let tdSituacao = document.createElement("td");

  tdId.innerHTML = manutencao.id;
  tdDataInicio.innerHTML = manutencao.datainicio;
  tdCliente.innerHTML = manutencao.cliente;
  tdVeiculo.innerHTML = manutencao.veiculo;
  tdValor.innerHTML = manutencao.valor;
  tdDescricao.innerHTML = manutencao.descricao;
  tdDataPrevisao.innerHTML = manutencao.dataprevisao;
  tdDataEncerramento.innerHTML = manutencao.dataencerramento;
  tdSituacao.innerHTML = manutencao.situacao;

  tdDataPrevisao.contentEditable = true;
  tdDataEncerramento.contentEditable = true;

  linha.appendChild(tdId);
  linha.appendChild(tdDataInicio);
  linha.appendChild(tdCliente);
  linha.appendChild(tdVeiculo);
  linha.appendChild(tdValor);
  linha.appendChild(tdDescricao);
  linha.appendChild(tdDataPrevisao);
  linha.appendChild(tdDataEncerramento);
  linha.appendChild(tdSituacao);

  return linha;
}

function criaColunas(Column) {
  const elementRow = document.createElement("tr");
  const elementColumnId = document.createElement("th");
  const elementColumnDataInicio = document.createElement("th");
  const elementColumnCliente = document.createElement("th");
  const elementColumnVeiculo = document.createElement("th");
  const elementColumnValor = document.createElement("th");
  const elementColumnDescricao = document.createElement("th");
  const elementColumnDataPrevisao = document.createElement("th");
  const elementColumnDataEncerramento = document.createElement("th");
  const elementColumnSituacao = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnDataInicio.innerHTML = "Data inicio";
  elementColumnCliente.innerHTML = "Cliente";
  elementColumnVeiculo.innerHTML = "Veículo";
  elementColumnValor.innerHTML = "Valor";
  elementColumnDescricao.innerHTML = "Descrição";
  elementColumnDataPrevisao.innerHTML = "Previsão finalização";
  elementColumnDataEncerramento.innerHTML = "Data finalização";
  elementColumnSituacao.innerHTML = "Situação";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnDataInicio);
  elementRow.appendChild(elementColumnCliente);
  elementRow.appendChild(elementColumnVeiculo);
  elementRow.appendChild(elementColumnValor);
  elementRow.appendChild(elementColumnDescricao);
  elementRow.appendChild(elementColumnDataPrevisao);
  elementRow.appendChild(elementColumnDataEncerramento);
  elementRow.appendChild(elementColumnSituacao);

  header.appendChild(elementRow);
  tabela.appendChild(header);
}

function updateRegistros() {
  tabela.innerHTML = "";
  header.innerHTML = "";
  criaColunas();
  let data = getManutencoes("http://localhost:3000/api/manutencoes");
  let manutencao = JSON.parse(data);
  manutencao.forEach((element) => {
    let linha = adicionaLinha(element);
    tabela.appendChild(linha);
  });
}

function ordenarTabela() {
  updateRegistros();
  let registros = Array.from(tabela.getElementsByTagName("tr"));

  let cabecalho = registros.shift();
  let linhasDados = registros.sort(function (a, b) {
    let valorA = parseInt(a.cells[0].textContent);
    let valorB = parseInt(b.cells[0].textContent);
    return valorA - valorB;
  });

  while (tabela.firstChild) {
    tabela.removeChild(tabela.firstChild);
  }

  tabela.appendChild(cabecalho);
  linhasDados.forEach(function (registros) {
    tabela.appendChild(registros);
  });

  function personalizarCabecalho() {
    let primeiraLinha = tabela.rows[0];

    primeiraLinha.style.backgroundColor = "#a5a5a5";
  }

  personalizarCabecalho();
}

ordenarTabela();
