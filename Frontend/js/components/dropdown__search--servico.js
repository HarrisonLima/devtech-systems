var servico__search = document.getElementById("servico__search");
var descricao__search = document.getElementById("descricao__search");
var dropdown__textBox = document.getElementById("dropdown__textBox--Servico");
var dropdownOption = document.getElementById("dropdownOption");

servico__search.style.display = "none";
descricao__search.style.display = "none";
dropdownOption.style.display = "none";

function dropdownSelect__SearchServico(anything) {
  dropdown__textBox.value = anything;

  if (dropdown__textBox.value == "Serviço") {
    servico__search.style.display = "block";
    descricao__search.style.display = "none";
  } else if (dropdown__textBox.value == "Descrição") {
    servico__search.style.display = "none";
    descricao__search.style.display = "block";
  }
}

let dropdownSearch__Servico = document.getElementById(
  "dropdownSearch__Servico"
);

dropdownSearch__Servico.onclick = function () {
  if (dropdownOption.style.display == "none") {
    dropdownOption.style.display = "block";
  } else if (dropdownOption.style.display == "block") {
    dropdownOption.style.display = "none";
  }
};
