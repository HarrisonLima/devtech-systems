var radiopf = document.getElementById("radio__clientepf");
var radiopj = document.getElementById("radio__clientepj");

radiopf.addEventListener("click", (event) => {
  event.preventDefault();
  valid__tipoClienteMovimentacao();
});

radiopj.addEventListener("click", (event) => {
  event.preventDefault();
  valid__tipoClienteMovimentacao();
});

function valid__tipoClienteMovimentacao() {
  if (radiopf.checked) {
    window.location.href = "../html/movimentacao__vendaProduto.html";
  } else if (radiopj.checked) {
    window.location.href = "../html/movimentacao__vendaProduto--empresa.html";
  }
}
  