var servico__search = document.getElementById("servico__search");
var descricao__search = document.getElementById("descricao__search");

var inputServico = document.getElementById("servico");
var inputDescricao = document.getElementById("descricao");

var dropdown__textBox = document.getElementById("dropdown__textBox--Servico");
var dropdownOption = document.getElementById("dropdownOption");

servico__search.style.display = "none";
descricao__search.style.display = "none";
dropdownOption.style.display = "none";

function dropdownSelect__SearchServico(anything) {
  dropdown__textBox.value = anything;

  table = document.getElementById("tabela__servicos");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
      tr[i].style.display = "";
  }

  if (dropdown__textBox.value == "Serviço") {
    servico__search.style.display = "block";

    inputDescricao.value = "";
    descricao__search.style.display = "none";
  } else if (dropdown__textBox.value == "Descrição") {
    descricao__search.style.display = "block";

    inputServico.value = "";
    servico__search.style.display = "none";
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
