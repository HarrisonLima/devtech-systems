var radiopf__orcamento = document.getElementById("radio__clientepf");
var radiopj__orcamento  = document.getElementById("radio__clientepj");

radiopf__orcamento.addEventListener("click", (event) => {
  event.preventDefault();
  valid__tipoClienteMovimentacaoOrcamento();
});

radiopj__orcamento.addEventListener("click", (event) => {
  event.preventDefault();
  valid__tipoClienteMovimentacaoOrcamento();
});

function valid__tipoClienteMovimentacaoOrcamento() {
  if (radiopf__orcamento.checked) {
    window.location.href = "../html/movimentacao__emitirOrcamento.html";
  } else if (radiopj__orcamento.checked) {
    window.location.href = "../html/movimentacao__emitirOrcamento.html";
  }
}
  