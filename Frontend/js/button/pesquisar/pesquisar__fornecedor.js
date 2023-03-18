const buttonPesquisarFornecedores = document.getElementById(
  "button__pesquisar--fornecedor"
);

buttonPesquisarFornecedores.addEventListener("click", (event) => {
  event.preventDefault();
  updateRegistros();
});

function getFornecedores(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabela = document.getElementById("tabela__fornecedores");
const content = document.getElementById("content");
const header = document.getElementById("header");

function adicionaLinha(fornecedor) {
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdRazaoSocial = document.createElement("td");
  tdNomeFantasia = document.createElement("td");
  tdCnpj = document.createElement("td");
  tdInscricaoEstadual = document.createElement("td");
  tdInscricaoMunicipal = document.createElement("td");
  tdCep= document.createElement("td");
  tdNumero = document.createElement("td");
  tdComplemento = document.createElement("td");
  tdCidade = document.createElement("td");
  tdUf = document.createElement("td");
  tdLogradouro = document.createElement("td");
  tdEmail = document.createElement("td");
  tdDDD = document.createElement("td");
  tdTelefone = document.createElement("td");

  tdId.innerHTML = fornecedor.id;
  tdRazaoSocial.innerHTML = fornecedor.razaoSocial;
  tdCnpj.innerHTML = fornecedor.cnpj;
  tdInscricaoEstadual.innerHTML = fornecedor.inscricaoEstadual;
  tdInscricaoMunicipal.innerHTML = fornecedor.inscricaoMunicipal;
  tdCep.innerHTML = fornecedor.cep;
  tdNumero.innerHTML = fornecedor.numero;
  tdComplemento.innerHTML = fornecedor.Complemento;
  tdCidade.innerHTML = fornecedor.cidade;
  tdUf.innerHTML = fornecedor.uf;
  tdLogradouro.innerHTML = fornecedor.logradouro;
  tdEmail.innerHTML = fornecedor.email;
  tdDDD.innerHTML = fornecedor.ddd;
  tdTelefone.innerHTML = fornecedor.telefone;

  linha.appendChild(tdId);
  linha.appendChild(tdRazaoSocial);
  linha.appendChild(tdCnpj);
  linha.appendChild(tdInscricaoEstadual);
  linha.appendChild(tdInscricaoMunicipal);
  linha.appendChild(tdCep);
  linha.appendChild(tdNumero);
  linha.appendChild(tdComplemento);
  linha.appendChild(tdCidade);
  linha.appendChild(tdUf);
  linha.appendChild(tdLogradouro);
  linha.appendChild(tdEmail);
  linha.appendChild(tdDDD);
  linha.appendChild(tdTelefone);

  return linha;
}

function criaColunas(Column) {
  const elementRow = document.createElement("tr");
  const elementColumnId = document.createElement("th");
  const elementColumnRazaoSocial = document.createElement("th");
  const elementColumnCnpj = document.createElement("th");
  const elementColumninscricaoEstadual = document.createElement("th");
  const elementColumninscricaoMunicipal = document.createElement("th");
  const elementColumnCep = document.createElement("th");
  const elementColumnNumero= document.createElement("th");
  const elementColumnCidade = document.createElement("th");
  const elementColumnUf = document.createElement("th");
  const elementColumnLogradouro = document.createElement("th");
  const elementColumnEmail = document.createElement("th");
  const elementColumnDDD = document.createElement("th");
  const elementColumnTelefone = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnRazaoSocial.innerHTML = "Razão Social";
  elementColumnCnpj.innerHTML = "CNPJ";
  elementColumninscricaoEstadual.innerHTML = "Inscrição Estadual";
  elementColumninscricaoMunicipal.innerHTML = "Inscrição Municipal";
  elementColumnCep.innerHTML = "CEP";
  elementColumnNumero.innerHTML = "Número";
  elementColumnCidade.innerHTML = "Cidade";
  elementColumnUf.innerHTML = "UF";
  elementColumnLogradouro.innerHTML = "Logradouro";
  elementColumnEmail.innerHTML = "E-mail";
  elementColumnDDD.innerHTML = "DDD";
  elementColumnTelefone.innerHTML = "Telefone";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnRazaoSocial);
  elementRow.appendChild(elementColumnCnpj);
  elementRow.appendChild(elementColumninscricaoEstadual);
  elementRow.appendChild(elementColumninscricaoMunicipal);
  elementRow.appendChild(elementColumnCep);
  elementRow.appendChild(elementColumnNumero);
  elementRow.appendChild(elementColumnCidade);
  elementRow.appendChild(elementColumnUf);
  elementRow.appendChild(elementColumnLogradouro);
  elementRow.appendChild(elementColumnEmail);
  elementRow.appendChild(elementColumnDDD);
  elementRow.appendChild(elementColumnTelefone);
  header.appendChild(elementRow);
  tabela.appendChild(header);
}

function updateRegistros() {
  tabela.innerHTML = "";
  header.innerHTML = "";
  criaColunas();
    let data = getFornecedores("http://localhost:3000/api/fornecedores");
    let fornecedores = JSON.parse(data);
    fornecedores.forEach((element) => {
      let linha = adicionaLinha(element);
      tabela.appendChild(linha);
    });
  }
