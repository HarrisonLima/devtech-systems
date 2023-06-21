var inputCliente = document.getElementById("cliente");
var inputCpf = document.getElementById("cpf");

inputCliente.addEventListener("input", () => {
  filter = inputCliente.value.toUpperCase();
  table = document.getElementById("tabela__clientespf");
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
});

inputCpf.addEventListener("input", () => {
  if (cpf__search.style.display == "block") {
    filter = inputCpf.value.toUpperCase();
    table = document.getElementById("tabela__clientespf");
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
  }
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
  tdCidade = document.createElement("td");
  tdUf = document.createElement("td");
  tdLogradouro = document.createElement("td");
  tdEmail = document.createElement("td");
  tdTelefone = document.createElement("td");

  tdId.innerHTML = cliente.id;
  tdNome.innerHTML = cliente.nome;
  tdCpf.innerHTML = cliente.cpf;
  tdCidade.innerHTML = cliente.cidade;
  tdUf.innerHTML = cliente.uf;
  tdLogradouro.innerHTML = cliente.logradouro;
  tdEmail.innerHTML = cliente.email;
  tdTelefone.innerHTML = cliente.telefone;

  linha.appendChild(tdId);
  linha.appendChild(tdNome);
  linha.appendChild(tdCpf);
  linha.appendChild(tdCidade);
  linha.appendChild(tdUf);
  linha.appendChild(tdLogradouro);
  linha.appendChild(tdEmail);
  linha.appendChild(tdTelefone);

  return linha;
}

function criaColunas(Column) {
  const elementRow = document.createElement("tr");
  const elementColumnId = document.createElement("th");
  const elementColumnNome = document.createElement("th");
  const elementColumnCpf = document.createElement("th");
  const elementColumnCidade = document.createElement("th");
  const elementColumnUf = document.createElement("th");
  const elementColumnLogradouro = document.createElement("th");
  const elementColumnEmail = document.createElement("th");
  const elementColumnTelefone = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnNome.innerHTML = "Nome";
  elementColumnCpf.innerHTML = "CPF";
  elementColumnCidade.innerHTML = "Cidade";
  elementColumnUf.innerHTML = "UF";
  elementColumnLogradouro.innerHTML = "Logradouro";
  elementColumnEmail.innerHTML = "E-mail";
  elementColumnTelefone.innerHTML = "Telefone";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnNome);
  elementRow.appendChild(elementColumnCpf);
  elementRow.appendChild(elementColumnCidade);
  elementRow.appendChild(elementColumnUf);
  elementRow.appendChild(elementColumnLogradouro);
  elementRow.appendChild(elementColumnEmail);
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

updateRegistros();
