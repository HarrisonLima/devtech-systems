var usuario__search = document.getElementById("usuario__search");
var perfil__search = document.getElementById("perfil__search");

var inputUsuario = document.getElementById("usuario");
var inputPerfil = document.getElementById("perfil");

var dropdown__textBox = document.getElementById("dropdown__textBox--Usuario");
var dropdownOption = document.getElementById("dropdownOption");

usuario__search.style.display = "none";
perfil__search.style.display = "none";
dropdownOption.style.display = "none";

function dropdownSelect__SearchUsuario(anything) {
  dropdown__textBox.value = anything;

  table = document.getElementById("tabela__usuarios");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
      tr[i].style.display = "";
  }

  if (dropdown__textBox.value == "Usuário") {
    usuario__search.style.display = "block";

    inputPerfil.value = "";
    perfil__search.style.display = "none";
  } else if (dropdown__textBox.value == "Perfil") {
    perfil__search.style.display = "block";
    
    inputUsuario.value = "";
    usuario__search.style.display = "none";
  }
}

let dropdownSearch__Usuario = document.getElementById(
  "dropdownSearch__Usuario"
);

dropdownSearch__Usuario.onclick = function () {
  if (dropdownOption.style.display == "none") {
    dropdownOption.style.display = "block";
  } else if (dropdownOption.style.display == "block") {
    dropdownOption.style.display = "none";
  }
};
