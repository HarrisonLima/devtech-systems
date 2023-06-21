var cnpj__search = document.getElementById("cnpj__search");
var cor__search = document.getElementById("cor__search");
var marca__search = document.getElementById("marca__search");
var modelo__search = document.getElementById("modelo__search");
var placa__search = document.getElementById("placa__search");
var proprietario__search = document.getElementById("proprietario__search");

var inputCnpj = document.getElementById("cnpj");
var inputCor = document.getElementById("cor");
var inputMarca = document.getElementById("marca");
var inputModelo = document.getElementById("modelo");
var inputPlaca = document.getElementById("placa");
var inputProprietario = document.getElementById("proprietario");

var dropdown__textBox = document.getElementById("dropdown__textBox--Veiculopj");
var dropdownOption = document.getElementById("dropdownOption");

cnpj__search.style.display = "none";
cor__search.style.display = "none";
marca__search.style.display = "none";
modelo__search.style.display = "none";
placa__search.style.display = "none";
proprietario__search.style.display = "none";
dropdownOption.style.display = "none";

function dropdownSelect__SearchVeiculopj(anything) {
  dropdown__textBox.value = anything;

  table = document.getElementById("tabela__veiculosp");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    tr[i].style.display = "";
  }

  if (dropdown__textBox.value == "Cor") {
    cor__search.style.display = "block";

    inputCnpj.value = "";
    inputMarca.value = "";
    inputModelo.value = "";
    inputPlaca.value = "";
    inputProprietario.value = "";
    cnpj__search.style.display = "none";
    marca__search.style.display = "none";
    modelo__search.style.display = "none";
    placa__search.style.display = "none";
    proprietario__search.style.display = "none";
  } else if (dropdown__textBox.value == "Marca") {
    marca__search.style.display = "block";

    inputCnpj.value = "";
    inputCor.value = "";
    inputModelo.value = "";
    inputPlaca.value = "";
    inputProprietario.value = "";
    cnpj__search.style.display = "none";
    cor__search.style.display = "none";
    modelo__search.style.display = "none";
    placa__search.style.display = "none";
    proprietario__search.style.display = "none";
  } else if (dropdown__textBox.value == "Modelo") {
    modelo__search.style.display = "block";

    inputCnpj.value = "";
    inputCor.value = "";
    inputMarca.value = "";
    inputPlaca.value = "";
    inputProprietario.value = "";
    cnpj__search.style.display = "none";
    cor__search.style.display = "none";
    marca__search.style.display = "none";
    placa__search.style.display = "none";
    proprietario__search.style.display = "none";
  } else if (dropdown__textBox.value == "Placa") {
    placa__search.style.display = "block";

    inputCnpj.value = "";
    inputCor.value = "";
    inputMarca.value = "";
    inputModelo.value = "";
    inputProprietario.value = "";
    cnpj__search.style.display = "none";
    cor__search.style.display = "none";
    marca__search.style.display = "none";
    modelo__search.style.display = "none";
    proprietario__search.style.display = "none";
  } else if (dropdown__textBox.value == "Proprietário") {
    proprietario__search.style.display = "block";

    inputCnpj.value = "";
    inputCor.value = "";
    inputMarca.value = "";
    inputModelo.value = "";
    inputPlaca.value = "";
    cnpj__search.style.display = "none";
    cor__search.style.display = "none";
    marca__search.style.display = "none";
    modelo__search.style.display = "none";
    placa__search.style.display = "none";
  } else if (dropdown__textBox.value == "CNPJ") {
    cnpj__search.style.display = "block";

    inputCor.value = "";
    inputMarca.value = "";
    inputModelo.value = "";
    inputPlaca.value = "";
    inputProprietario.value = "";
    cor__search.style.display = "none";
    marca__search.style.display = "none";
    modelo__search.style.display = "none";
    placa__search.style.display = "none";
    proprietario__search.style.display = "none";
  }
}

let dropdownSearch__Veiculopj = document.getElementById(
  "dropdownSearch__Veiculopj"
);

dropdownSearch__Veiculopj.onclick = function () {
  if (dropdownOption.style.display == "none") {
    dropdownOption.style.display = "block";
  } else if (dropdownOption.style.display == "block") {
    dropdownOption.style.display = "none";
  }
};
