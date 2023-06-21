var produto__search = document.getElementById("produto__search");
var marca__search = document.getElementById("marca__search");
var descricao__search = document.getElementById("descricao__search");

var inputProduto = document.getElementById("produto");
var inputMarca = document.getElementById("marca");
var inputDescricao = document.getElementById("descricao");

var dropdown__textBox = document.getElementById("dropdown__textBox--Produto");
var dropdownOption = document.getElementById("dropdownOption");

produto__search.style.display = "none";
marca__search.style.display = "none";
descricao__search.style.display = "none";
dropdownOption.style.display = "none";

function dropdownSelect__SearchProduto(anything) {
  dropdown__textBox.value = anything;

  table = document.getElementById("tabela__produtos");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
      tr[i].style.display = "";
  }

  if (dropdown__textBox.value == "Produto") {
    produto__search.style.display = "block";

    inputMarca.value = "";
    marca__search.style.display = "none";
    inputDescricao.value = "";
    descricao__search.style.display = "none";
  } else if (dropdown__textBox.value == "Marca") {
    marca__search.style.display = "block";

    inputProduto.value = "";
    produto__search.style.display = "none";
    inputDescricao.value = "";
    descricao__search.style.display = "none";
  } else if (dropdown__textBox.value == "Descrição") {
    descricao__search.style.display = "block";

    inputProduto.value = "";
    produto__search.style.display = "none";
    inputMarca.value = "";
    marca__search.style.display = "none";
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
