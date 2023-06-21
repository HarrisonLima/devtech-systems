var peca__search = document.getElementById("peca__search");
var marca__search = document.getElementById("marca__search");
var descricao__search = document.getElementById("descricao__search");

var inputPeca = document.getElementById("peca");
var inputMarca = document.getElementById("marca");
var inputDescricao = document.getElementById("descricao");

var dropdown__textBox = document.getElementById("dropdown__textBox--Peca");
var dropdownOption = document.getElementById("dropdownOption");

peca__search.style.display = "none";
marca__search.style.display = "none";
descricao__search.style.display = "none";
dropdownOption.style.display = "none";

function dropdownSelect__SearchPeca(anything) {
  dropdown__textBox.value = anything;

  table = document.getElementById("tabela__pecas");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
      tr[i].style.display = "";
  }

  if (dropdown__textBox.value == "Peça") {
    peca__search.style.display = "block";

    inputMarca.value = "";
    marca__search.style.display = "none";
    inputDescricao.value = "";
    descricao__search.style.display = "none";
  } else if (dropdown__textBox.value == "Marca") {
    marca__search.style.display = "block";
    
    inputPeca.value = "";
    peca__search.style.display = "none";
    inputDescricao.value = "";
    descricao__search.style.display = "none";
  } else if (dropdown__textBox.value == "Descrição") {
    descricao__search.style.display = "block";
    
    inputPeca.value = "";
    peca__search.style.display = "none";
    inputMarca.value = "";
    marca__search.style.display = "none";
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
