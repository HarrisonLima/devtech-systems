var razaoSocial__search = document.getElementById("razaoSocial__search");
var nomeFantasia__search = document.getElementById("nomeFantasia__search");
var cnpj__search = document.getElementById("cnpj__search");

var inputRazaoSocial = document.getElementById("razaoSocial")
var inputNomeFantasia = document.getElementById("nomeFantasia")
var inputCnpj = document.getElementById("cnpj")

var dropdown__textBox = document.getElementById("dropdown__textBox--Clientepj");
var dropdownOption = document.getElementById("dropdownOption");

razaoSocial__search.style.display = "none";
nomeFantasia__search.style.display = "none";
cnpj__search.style.display = "none";
dropdownOption.style.display = "none";

function dropdownSelect__SearchClientepj(anything) {
  dropdown__textBox.value = anything;

  table = document.getElementById("tabela__clientespj");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
      tr[i].style.display = "";
  }

  if (dropdown__textBox.value == "Razão Social") {
    razaoSocial__search.style.display = "block";

    inputNomeFantasia.value = "";
    inputCnpj.value = "";
    nomeFantasia__search.style.display = "none";
    cnpj__search.style.display = "none";
  } else if (dropdown__textBox.value == "Nome Fantasia") {
    nomeFantasia__search.style.display = "block";

    inputRazaoSocial.value = "";
    razaoSocial__search.style.display = "none";
    inputCnpj.value = "";
    cnpj__search.style.display = "none";
  } else if (dropdown__textBox.value == "CNPJ") {
    cnpj__search.style.display = "block";
    
    inputRazaoSocial.value = "";
    razaoSocial__search.style.display = "none";
    inputNomeFantasia.value = "";
    nomeFantasia__search.style.display = "none";
  }
}

let dropdownSearch__Peca = document.getElementById(
  "dropdownSearch__Clientepj"
);

dropdownSearch__Peca.onclick = function () {
  if (dropdownOption.style.display == "none"){
    dropdownOption.style.display = "block"
  } else if(dropdownOption.style.display == "block"){
    dropdownOption.style.display = "none"
  }
};
