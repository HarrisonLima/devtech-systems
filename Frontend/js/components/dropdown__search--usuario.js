var usuario__search = document.getElementById("usuario__search");
var perfil__search = document.getElementById("perfil__search");
var dropdown__textBox = document.getElementById("dropdown__textBox--Usuario");
var dropdownOption = document.getElementById("dropdownOption");

usuario__search.style.display = "none";
perfil__search.style.display = "none";
dropdownOption.style.display = "none";

function dropdownSelect__SearchUsuario(anything) {
  dropdown__textBox.value = anything;

  if (dropdown__textBox.value == "Usuário") {
    usuario__search.style.display = "block";
    perfil__search.style.display = "none";
  } else if (dropdown__textBox.value == "Perfil") {
    usuario__search.style.display = "none";
    perfil__search.style.display = "block";
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
