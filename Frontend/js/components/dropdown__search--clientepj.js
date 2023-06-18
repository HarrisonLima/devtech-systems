var razaoSocial__search = document.getElementById("razaoSocial__search");
var nomeFantasia__search = document.getElementById("nomeFantasia__search");
var cnpj__search = document.getElementById("cnpj__search");
var dropdown__textBox = document.getElementById("dropdown__textBox--Clientepj");
var dropdownOption = document.getElementById("dropdownOption");

razaoSocial__search.style.display = "none";
nomeFantasia__search.style.display = "none";
cnpj__search.style.display = "none";
dropdownOption.style.display = "none";

function dropdownSelect__SearchClientepj(anything) {
  dropdown__textBox.value = anything;

  if (dropdown__textBox.value == "Razão Social") {
    razaoSocial__search.style.display = "block";
    nomeFantasia__search.style.display = "none";
    cnpj__search.style.display = "none";
  } else if (dropdown__textBox.value == "Nome Fantasia") {
    razaoSocial__search.style.display = "none";
    nomeFantasia__search.style.display = "block";
    cnpj__search.style.display = "none";
  } else if (dropdown__textBox.value == "CNPJ") {
    razaoSocial__search.style.display = "none";
    nomeFantasia__search.style.display = "none";
    cnpj__search.style.display = "block";
  }
}

let dropdownSearch__Peca = document.getElementById(
  "dropdownSearch__Clientepj"
);

// dropdownSearch__Clientepj.onclick = function () {
  // dropdownSearch__Clientepj.classList.toggle("active");
// };

dropdownSearch__Peca.onclick = function () {
  if (dropdownOption.style.display == "none"){
    dropdownOption.style.display = "block"
  } else if(dropdownOption.style.display == "block"){
    dropdownOption.style.display = "none"
  }
};
