var radiopf = document.getElementById("radio__veiculopf");
var radiopj = document.getElementById("radio__veiculopj");

radiopf.addEventListener("click", (event) => {
  event.preventDefault();
  valid__tipoVeiculoRelatorio();
});

radiopj.addEventListener("click", (event) => {
  event.preventDefault();
  valid__tipoVeiculoRelatorio();
});

function valid__tipoVeiculoRelatorio() {
  if (radiopf.checked) {
    window.location.href = "../html/relatorio__veiculo.html";
  } else if (radiopj.checked) {
    window.location.href = "../html/relatorio__veiculo--empresa.html";
  }
}
