const buttonPesquisarVeiculospf = document.getElementById(
  "button__pesquisar--veiculopf"
);
const buttonExportar = document.getElementById("button__exportar--pdf");

buttonExportar.style.display = 'none';

buttonPesquisarVeiculospf.addEventListener("click", (event) => {
  event.preventDefault();
  updateRegistros();
  statusButtonExportar();
});

function statusButtonExportar() {
  buttonExportar.disabled = false;
  buttonExportar.style.display = 'block';
}

function getVeiculospf(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabela = document.getElementById("tabela__veiculospf");
const content = document.getElementById("content");
const header = document.getElementById("header");

function adicionaLinha(veiculo) {
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdTipo = document.createElement("td");
  tdMarca = document.createElement("td");
  tdAnoFabricacao = document.createElement("td");
  tdCor = document.createElement("td");
  tdNumeroPassageiro = document.createElement("td");
  tdModelo = document.createElement("td");
  tdRenavam = document.createElement("td");
  tdFabricante = document.createElement("td");
  tdPlaca = document.createElement("td");
  tdProprietario = document.createElement("td");
  tdCpf = document.createElement("td");

  tdId.innerHTML = veiculo.id;
  tdTipo.innerHTML = veiculo.tipo;
  tdMarca.innerHTML = veiculo.marca;
  tdAnoFabricacao.innerHTML = veiculo.anofabricacao;
  tdCor.innerHTML = veiculo.cor;
  tdNumeroPassageiro.innerHTML = veiculo.numeropassageiro;
  tdModelo.innerHTML = veiculo.modelo;
  tdRenavam.innerHTML = veiculo.renavam;
  tdFabricante.innerHTML = veiculo.fabricante;
  tdPlaca.innerHTML = veiculo.placa;
  tdProprietario.innerHTML = veiculo.proprietario;
  tdCpf.innerHTML = veiculo.cpf;

  linha.appendChild(tdId);
  linha.appendChild(tdTipo);
  linha.appendChild(tdMarca);
  linha.appendChild(tdAnoFabricacao);
  linha.appendChild(tdCor);
  linha.appendChild(tdNumeroPassageiro);
  linha.appendChild(tdModelo);
  linha.appendChild(tdRenavam);
  linha.appendChild(tdFabricante);
  linha.appendChild(tdPlaca);
  linha.appendChild(tdProprietario);
  linha.appendChild(tdCpf);

  return linha;
}

function criaColunas(Column) {
  const elementRow = document.createElement("tr");
  const elementColumnId = document.createElement("th");
  const elementColumnTipo = document.createElement("th");
  const elementColumnMarca = document.createElement("th");
  const elementColumnAnoFabricacao = document.createElement("th");
  const elementColumnCor = document.createElement("th");
  const elementColumnNumeroPassageiro = document.createElement("th");
  const elementColumnModelo = document.createElement("th");
  const elementColumnRenavam = document.createElement("th");
  const elementColumnFabricante = document.createElement("th");
  const elementColumnPlaca = document.createElement("th");
  const elementColumnProprietario = document.createElement("th");
  const elementColumnCpf = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnTipo.innerHTML = "Tipo";
  elementColumnMarca.innerHTML = "Marca";
  elementColumnAnoFabricacao.innerHTML = "Ano";
  elementColumnCor.innerHTML = "Cor";
  elementColumnNumeroPassageiro.innerHTML = "Núm. Passag.";
  elementColumnModelo.innerHTML = "Modelo";
  elementColumnRenavam.innerHTML = "Renavam";
  elementColumnFabricante.innerHTML = "Fabricante";
  elementColumnPlaca.innerHTML = "Placa";
  elementColumnProprietario.innerHTML = "Proprietário";
  elementColumnCpf.innerHTML = "CPF";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnTipo);
  elementRow.appendChild(elementColumnMarca);
  elementRow.appendChild(elementColumnAnoFabricacao);
  elementRow.appendChild(elementColumnCor);
  elementRow.appendChild(elementColumnNumeroPassageiro);
  elementRow.appendChild(elementColumnModelo);
  elementRow.appendChild(elementColumnRenavam);
  elementRow.appendChild(elementColumnFabricante);
  elementRow.appendChild(elementColumnPlaca);
  elementRow.appendChild(elementColumnProprietario);
  elementRow.appendChild(elementColumnCpf);
  header.appendChild(elementRow);
  tabela.appendChild(header);
}

function updateRegistros() {
  tabela.innerHTML = "";
  header.innerHTML = "";
  criaColunas();

  let data = getVeiculospf("http://localhost:3000/api/veiculospf");
  let veiculos = JSON.parse(data);
  veiculos.forEach((element) => {
    let linha = adicionaLinha(element);
    tabela.appendChild(linha);
  });
}
