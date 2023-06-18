var cliente__search = document.getElementById("cliente__search");
var cpf__search = document.getElementById("cpf__search");
var dropdown__textBox = document.getElementById("dropdown__textBox--Clientepf");
var dropdownOption = document.getElementById("dropdownOption");

cliente__search.style.display = "none";
cpf__search.style.display = "none";
dropdownOption.style.display = "none";

function dropdownSelect__SearchClientepf(anything) {
  dropdown__textBox.value = anything;

  if (dropdown__textBox.value == "Cliente") {
    cliente__search.style.display = "block";
    cpf__search.style.display = "none";
  } else if (dropdown__textBox.value == "CPF") {
    cliente__search.style.display = "none";
    cpf__search.style.display = "block";
  }
}

let dropdownSearch__Clientepf = document.getElementById(
  "dropdownSearch__Clientepf"
);

dropdownSearch__Clientepf.onclick = function () {
  if (dropdownOption.style.display == "none"){
    dropdownOption.style.display = "block"
  } else if(dropdownOption.style.display == "block"){
    dropdownOption.style.display = "none"
  }
};
