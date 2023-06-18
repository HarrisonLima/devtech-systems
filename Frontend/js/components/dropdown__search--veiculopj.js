var cnpj__search = document.getElementById("cnpj__search");
var cor__search = document.getElementById("cor__search");
var marca__search = document.getElementById("marca__search");
var modelo__search = document.getElementById("modelo__search");
var placa__search = document.getElementById("placa__search");
var proprietario__search = document.getElementById("proprietario__search");
var dropdown__textBox = document.getElementById("dropdown__textBox--Veiculopj");
var dropdownOption = document.getElementById("dropdownOption");

cnpj__search.style.display = "none";
cor__search.style.display = "none";
marca__search.style.display = "none";
modelo__search.style.display = "none";
placa__search.style.display = "none";
proprietario__search.style.display = "none";
dropdownOption.style.display = "none";

let dropdownSearch__Veiculopj = document.getElementById("dropdownSearch__Veiculopj");

dropdownSearch__Veiculopj.onclick = function () {
  if (dropdownOption.style.display == "none") {
    dropdownOption.style.display = "block";
  } else if (dropdownOption.style.display == "block") {
    dropdownOption.style.display = "none";
  }
};

dropdown__textBox.addEventListener("change", function () {
  if (dropdown__textBox.value == "Cor") {
    cnpj__search.style.display = "none";
    cor__search.style.display = "block";
    marca__search.style.display = "none";
    modelo__search.style.display = "none";
    placa__search.style.display = "none";
    proprietario__search.style.display = "none";
  } else if (dropdown__textBox.value == "Marca") {
    cnpj__search.style.display = "none";
    cor__search.style.display = "none";
    marca__search.style.display = "block";
    modelo__search.style.display = "none";
    placa__search.style.display = "none";
    proprietario__search.style.display = "none";
  } else if (dropdown__textBox.value == "Modelo") {
    cnpj__search.style.display = "none";
    cor__search.style.display = "none";
    marca__search.style.display = "none";
    modelo__search.style.display = "block";
    placa__search.style.display = "none";
    proprietario__search.style.display = "none";
  } else if (dropdown__textBox.value == "Placa") {
    cnpj__search.style.display = "none";
    cor__search.style.display = "none";
    marca__search.style.display = "none";
    modelo__search.style.display = "none";
    placa__search.style.display = "block";
    proprietario__search.style.display = "none";
  } else if (dropdown__textBox.value == "Proprietário") {
    cnpj__search.style.display = "none";
    cor__search.style.display = "none";
    marca__search.style.display = "none";
    modelo__search.style.display = "none";
    placa__search.style.display = "none";
    proprietario__search.style.display = "block";
  } else if (dropdown__textBox.value == "CNPJ") {
    cnpj__search.style.display = "block";
    cor__search.style.display = "none";
    marca__search.style.display = "none";
    modelo__search.style.display = "none";
    placa__search.style.display = "none";
    proprietario__search.style.display = "none";
  }
});

