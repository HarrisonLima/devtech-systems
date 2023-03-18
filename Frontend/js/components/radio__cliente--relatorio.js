var radiopf = document.getElementById("radio__clientepf");
var radiopj = document.getElementById("radio__clientepj");

radiopf.addEventListener("click", (event) => {
  event.preventDefault();
  valid__tipoClienteRelatorio();
});

radiopj.addEventListener("click", (event) => {
  event.preventDefault();
  valid__tipoClienteRelatorio();
});

function valid__tipoClienteRelatorio() {
  if (radiopf.checked) {
    window.location.href = "../html/relatorio__cliente.html";
  } else if (radiopj.checked) {
    window.location.href = "../html/relatorio__cliente--empresa.html";
  }
}
