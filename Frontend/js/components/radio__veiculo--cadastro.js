var veiculopf = document.getElementById("radio__veiculopf");
var veiculopj = document.getElementById("radio__veiculopj");

veiculopf.addEventListener("click", (event) => {
  event.preventDefault();
  valid__tipoVeiculo();
});

veiculopj.addEventListener("click", (event) => {
  event.preventDefault();
  valid__tipoVeiculo();
});

function valid__tipoVeiculo() {
  if (veiculopf.checked) {
    window.location.href = "../html/cadastro__veiculo.html";
  } else if (veiculopj.checked) {
    window.location.href = "../html/cadastro__veiculo--empresa.html";
  }
}
