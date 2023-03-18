const buttonPesquisarClientes = document.getElementById(
  "button__pesquisar--clientepf"
);

buttonPesquisarClientes.addEventListener("click", (event) => {
  event.preventDefault();
  updateRegistros();
});

function getClientespf(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabela = document.getElementById("tabela__clientespf");
const content = document.getElementById("content");
const header = document.getElementById("header");

function adicionaLinha(cliente) {
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdNome = document.createElement("td");
  tdCpf = document.createElement("td");
  tdGenero = document.createElement("td");
  tdNascimento = document.createElement("td");
  tdEstadoCivil = document.createElement("td");
  tdCep= document.createElement("td");
  tdNumero = document.createElement("td");
  tdComplemento = document.createElement("td");
  tdCidade = document.createElement("td");
  tdUf = document.createElement("td");
  tdLogradouro = document.createElement("td");
  tdEmail = document.createElement("td");
  tdDDD = document.createElement("td");
  tdTelefone = document.createElement("td");

  tdId.innerHTML = cliente.id;
  tdNome.innerHTML = cliente.nome;
  tdCpf.innerHTML = cliente.cpf;
  tdGenero.innerHTML = cliente.genero;
  tdNascimento.innerHTML = cliente.nascimento;
  tdEstadoCivil.innerHTML = cliente.estadocivil;
  tdCep.innerHTML = cliente.cep;
  tdNumero.innerHTML = cliente.numero;
  tdComplemento.innerHTML = cliente.Complemento;
  tdCidade.innerHTML = cliente.cidade;
  tdUf.innerHTML = cliente.uf;
  tdLogradouro.innerHTML = cliente.logradouro;
  tdEmail.innerHTML = cliente.email;
  tdDDD.innerHTML = cliente.ddd;
  tdTelefone.innerHTML = cliente.telefone;

  linha.appendChild(tdId);
  linha.appendChild(tdNome);
  linha.appendChild(tdCpf);
  linha.appendChild(tdGenero);
  linha.appendChild(tdNascimento);
  linha.appendChild(tdEstadoCivil);
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
  const elementColumnNome = document.createElement("th");
  const elementColumnCpf = document.createElement("th");
  const elementColumnGenero = document.createElement("th");
  const elementColumnNascimento = document.createElement("th");
  const elementColumnEstadoCivil = document.createElement("th");
  const elementColumnCep = document.createElement("th");
  const elementColumnNumero= document.createElement("th");
  const elementColumnCidade = document.createElement("th");
  const elementColumnUf = document.createElement("th");
  const elementColumnLogradouro = document.createElement("th");
  const elementColumnEmail = document.createElement("th");
  const elementColumnDDD = document.createElement("th");
  const elementColumnTelefone = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnNome.innerHTML = "Nome";
  elementColumnCpf.innerHTML = "CPF";
  elementColumnGenero.innerHTML = "Gênero";
  elementColumnNascimento.innerHTML = "Data de Nascimento";
  elementColumnEstadoCivil.innerHTML = "Estado civil";
  elementColumnCep.innerHTML = "CEP";
  elementColumnNumero.innerHTML = "Número";
  elementColumnCidade.innerHTML = "Cidade";
  elementColumnUf.innerHTML = "UF";
  elementColumnLogradouro.innerHTML = "Logradouro";
  elementColumnEmail.innerHTML = "E-mail";
  elementColumnDDD.innerHTML = "DDD";
  elementColumnTelefone.innerHTML = "Telefone";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnNome);
  elementRow.appendChild(elementColumnCpf);
  elementRow.appendChild(elementColumnGenero);
  elementRow.appendChild(elementColumnNascimento);
  elementRow.appendChild(elementColumnEstadoCivil);
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
    let data = getClientespf("http://localhost:3000/api/clientespf");
    let clientes = JSON.parse(data);
    clientes.forEach((element) => {
      let linha = adicionaLinha(element);
      tabela.appendChild(linha);
    });
  }
