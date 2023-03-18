const buttonPesquisarUsuarios = document.getElementById(
  "button__pesquisar--usuario"
);

buttonPesquisarUsuarios.addEventListener("click", (event) => {
  event.preventDefault();
  updateRegistros();
  formatTable();
});

function getUsuarios(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabela = document.getElementById("tabela__usuarios");
const content = document.getElementById("content");
const header = document.getElementById("header");

function adicionaLinha(usuario) {
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdUsuario = document.createElement("td");
  tdPerfil = document.createElement("td");
  tdId.innerHTML = usuario.id;
  tdUsuario.innerHTML = usuario.usuario;
  tdPerfil.innerHTML = usuario.perfil;

  linha.appendChild(tdId);
  linha.appendChild(tdUsuario);
  linha.appendChild(tdPerfil);

  return linha;
}

function criaColunas(Column) {
  const elementRow = document.createElement("tr");
  const elementColumnId = document.createElement("th");
  const elementColumnUsuario = document.createElement("th");
  const elementColumnPerfil = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnUsuario.innerHTML = "Usuario";
  elementColumnPerfil.innerHTML = "Perfil";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnUsuario);
  elementRow.appendChild(elementColumnPerfil);
  header.appendChild(elementRow);
  tabela.appendChild(header);
}

function updateRegistros() {
  tabela.innerHTML = "";
  header.innerHTML = "";
  criaColunas();
  let data = getUsuarios("http://localhost:3000/api/usuarios");
  let usuarios = JSON.parse(data);
  usuarios.forEach((element) => {
    let linha = adicionaLinha(element);
    tabela.appendChild(linha);
  });
}

function formatTable() {
  tabela.style.border = "1px solid #000000";
  content.style.border = "1px solid #000000";
}
