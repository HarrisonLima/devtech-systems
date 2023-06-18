var cpf__search = document.getElementById("cpf__search");
var cor__search = document.getElementById("cor__search");
var marca__search = document.getElementById("marca__search");
var modelo__search = document.getElementById("modelo__search");
var placa__search = document.getElementById("placa__search");
var proprietario__search = document.getElementById("proprietario__search");
var dropdown__textBox = document.getElementById("dropdown__textBox--Veiculopf");
var dropdownOption = document.getElementById("dropdownOption");

cpf__search.style.display = "none";
cor__search.style.display = "none";
marca__search.style.display = "none";
modelo__search.style.display = "none";
placa__search.style.display = "none";
proprietario__search.style.display = "none";
dropdownOption.style.display = "none";

function dropdownSelect__SearchVeiculopf(anything) {
  console.log(1)
  dropdown__textBox.value = anything;

  if (dropdown__textBox.value == "Cor") {
    cpf__search.style.display = "none";
    cor__search.style.display = "block";
    marca__search.style.display = "none";
    modelo__search.style.display = "none";
    placa__search.style.display = "none";
    proprietario__search.style.display = "none";
  } else if (dropdown__textBox.value == "Marca") {
    cpf__search.style.display = "none";
    cor__search.style.display = "none";
    marca__search.style.display = "block";
    modelo__search.style.display = "none";
    placa__search.style.display = "none";
    proprietario__search.style.display = "none";
  } else if (dropdown__textBox.value == "Modelo") {
    cpf__search.style.display = "none";
    cor__search.style.display = "none";
    marca__search.style.display = "none";
    modelo__search.style.display = "block";
    placa__search.style.display = "none";
    proprietario__search.style.display = "none";
  } else if (dropdown__textBox.value == "Placa") {
    cpf__search.style.display = "none";
    cor__search.style.display = "none";
    marca__search.style.display = "none";
    modelo__search.style.display = "none";
    placa__search.style.display = "block";
    proprietario__search.style.display = "none";
  } else if (dropdown__textBox.value == "Proprietário") {
    cpf__search.style.display = "none";
    cor__search.style.display = "none";
    marca__search.style.display = "none";
    modelo__search.style.display = "none";
    placa__search.style.display = "none";
    proprietario__search.style.display = "block";
  } else if (dropdown__textBox.value == "CPF") {
    cpf__search.style.display = "block";
    cor__search.style.display = "none";
    marca__search.style.display = "none";
    modelo__search.style.display = "none";
    placa__search.style.display = "none";
    proprietario__search.style.display = "none";
  }
}

  let dropdownSearch__Veiculopf = document.getElementById(
    "dropdownSearch__Veiculopf"
  );
  
  dropdownSearch__Veiculopf.onclick = function () {
    if (dropdownOption.style.display == "none") {
      dropdownOption.style.display = "block";
    } else if (dropdownOption.style.display == "block") {
      dropdownOption.style.display = "none";
    }
  };

