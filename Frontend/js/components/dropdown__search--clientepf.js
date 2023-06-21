var cliente__search = document.getElementById("cliente__search");
var cpf__search = document.getElementById("cpf__search");

var inputCliente = document.getElementById("cliente");
var inputCpf = document.getElementById("cpf");

var dropdown__textBox = document.getElementById("dropdown__textBox--Clientepf");
var dropdownOption = document.getElementById("dropdownOption");

cliente__search.style.display = "none";
cpf__search.style.display = "none";
dropdownOption.style.display = "none";

function dropdownSelect__SearchClientepf(anything) {
  dropdown__textBox.value = anything;

  table = document.getElementById("tabela__clientespf");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
      tr[i].style.display = "";
  }

  if (dropdown__textBox.value == "Cliente") {
    cliente__search.style.display = "block";
    inputCpf.value = "";
    cpf__search.style.display = "none";
  } else if (dropdown__textBox.value == "CPF") {
    cpf__search.style.display = "block";
    inputCliente.value = "";
    cliente__search.style.display = "none";
  }
}

let dropdownSearch__Clientepf = document.getElementById(
  "dropdownSearch__Clientepf"
);

dropdownSearch__Clientepf.onclick = function () {
  if (dropdownOption.style.display == "none") {
    dropdownOption.style.display = "block";
  } else if (dropdownOption.style.display == "block") {
    dropdownOption.style.display = "none";
  }
};
