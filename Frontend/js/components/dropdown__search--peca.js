var peca__search = document.getElementById("peca__search");
var marca__search = document.getElementById("marca__search");
var descricao__search = document.getElementById("descricao__search");
var dropdown__textBox = document.getElementById("dropdown__textBox--Peca");
var dropdownOption = document.getElementById("dropdownOption");

peca__search.style.display = "none";
marca__search.style.display = "none";
descricao__search.style.display = "none";
dropdownOption.style.display = "none";

function dropdownSelect__SearchPeca(anything) {
  dropdown__textBox.value = anything;

  if (dropdown__textBox.value == "Peça") {
    peca__search.style.display = "block";
    marca__search.style.display = "none";
    descricao__search.style.display = "none";
  } else if (dropdown__textBox.value == "Marca") {
    peca__search.style.display = "none";
    marca__search.style.display = "block";
    descricao__search.style.display = "none";
  } else if (dropdown__textBox.value == "Descrição") {
    peca__search.style.display = "none";
    marca__search.style.display = "none";
    descricao__search.style.display = "block";
  }
}

let dropdownSearch__Peca = document.getElementById(
  "dropdownSearch__Peca"
);

dropdownSearch__Peca.onclick = function () {
  if (dropdownOption.style.display == "none"){
    dropdownOption.style.display = "block"
  } else if(dropdownOption.style.display == "block"){
    dropdownOption.style.display = "none"
  }
};
