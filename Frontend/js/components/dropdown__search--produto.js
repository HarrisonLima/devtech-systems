var servico__search = document.getElementById("produto__search");
var marca__search = document.getElementById("marca__search");
var descricao__search = document.getElementById("descricao__search");
var dropdown__textBox = document.getElementById("dropdown__textBox--Produto");
var dropdownOption = document.getElementById("dropdownOption");

servico__search.style.display = "none";
marca__search.style.display = "none";
descricao__search.style.display = "none";
dropdownOption.style.display = "none";

function dropdownSelect__SearchProduto(anything) {
  dropdown__textBox.value = anything;

  if (dropdown__textBox.value == "Produto") {
    servico__search.style.display = "block";
    marca__search.style.display = "none";
    descricao__search.style.display = "none";
  } else if (dropdown__textBox.value == "Marca") {
    servico__search.style.display = "none";
    marca__search.style.display = "block";
    descricao__search.style.display = "none";
  } else if (dropdown__textBox.value == "Descrição") {
    servico__search.style.display = "none";
    marca__search.style.display = "none";
    descricao__search.style.display = "block";
  }
}

let dropdownSearch__Produto = document.getElementById(
  "dropdownSearch__Produto"
);

dropdownSearch__Produto.onclick = function () {
  if (dropdownOption.style.display == "none"){
    dropdownOption.style.display = "block"
  } else if(dropdownOption.style.display == "block"){
    dropdownOption.style.display = "none"
  }
};
