var inputRazaoSocial = document.getElementById("razaoSocial");
var inputNomeFantasia = document.getElementById("nomeFantasia");
var inputCnpj = document.getElementById("cnpj");

inputRazaoSocial.addEventListener("input", () => {
  filter = inputRazaoSocial.value.toUpperCase();
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

inputNomeFantasia.addEventListener("input", () => {
  filter = inputNomeFantasia.value.toUpperCase();
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

inputCnpj.addEventListener("input", () => {
  filter = inputCnpj.value.toUpperCase();
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

function getClientespj(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabela = document.getElementById("tabela__clientespj");
const content = document.getElementById("content");
const header = document.getElementById("header");

function adicionaLinha(cliente) {
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdRazaoSocial = document.createElement("td");
  tdNomeFantasia = document.createElement("td");
  tdCnpj = document.createElement("td");
  tdCidade = document.createElement("td");
  tdUf = document.createElement("td");
  tdLogradouro = document.createElement("td");
  tdEmail = document.createElement("td");
  tdTelefone = document.createElement("td");

  tdId.innerHTML = cliente.id;
  tdRazaoSocial.innerHTML = cliente.razaosocial;
  tdNomeFantasia.innerHTML = cliente.nomefantasia;
  tdCnpj.innerHTML = cliente.cnpj;
  tdCidade.innerHTML = cliente.cidade;
  tdUf.innerHTML = cliente.uf;
  tdLogradouro.innerHTML = cliente.logradouro;
  tdEmail.innerHTML = cliente.email;
  tdTelefone.innerHTML = cliente.telefone;

  linha.appendChild(tdId);
  linha.appendChild(tdRazaoSocial);
  linha.appendChild(tdNomeFantasia);
  linha.appendChild(tdCnpj);
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
  const elementColumnRazaoSocial = document.createElement("th");
  const elementColumnNomeFantasia = document.createElement("th");
  const elementColumnCnpj = document.createElement("th");
  const elementColumnCidade = document.createElement("th");
  const elementColumnUf = document.createElement("th");
  const elementColumnLogradouro = document.createElement("th");
  const elementColumnEmail = document.createElement("th");
  const elementColumnTelefone = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnRazaoSocial.innerHTML = "Razão Social";
  elementColumnNomeFantasia.innerHTML = "Nome Fantasia";
  elementColumnCnpj.innerHTML = "CNPJ";
  elementColumnCidade.innerHTML = "Cidade";
  elementColumnUf.innerHTML = "UF";
  elementColumnLogradouro.innerHTML = "Logradouro";
  elementColumnEmail.innerHTML = "E-mail";
  elementColumnTelefone.innerHTML = "Telefone";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnRazaoSocial);
  elementRow.appendChild(elementColumnNomeFantasia);
  elementRow.appendChild(elementColumnCnpj);
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
  let data = getClientespj("http://localhost:3000/api/clientespj");
  let clientes = JSON.parse(data);
  clientes.forEach((element) => {
    let linha = adicionaLinha(element);
    tabela.appendChild(linha);
  });
}

updateRegistros();
