const buttonLimparOrcamento = document.getElementById('button__limpar--orcamento')

buttonLimparOrcamento.addEventListener('click', (event) => {
  event.preventDefault()
  event__buttonLimpar__MovimentacaoEmitirOrcamento()
})

function event__buttonLimpar__MovimentacaoEmitirOrcamento(){
    var inputCliente = document.getElementById("nomeCliente");
    var inpitPlaca = document.getElementById("placa");
    var inputCodigoPeca = document.getElementById("codigoPeca");
    var inputPeca = document.getElementById("peca");
    var inputValorPeca = document.getElementById("valorPeca");
    var inputCodigoServico = document.getElementById("codigoServico");
    var inputServico = document.getElementById("servico");
    var inputValorServico = document.getElementById("valorServico");

    inputCliente.value = "";
    inpitPlaca.value = "";
    inputCodigoPeca.value = "";
    inputPeca.value = "";
    inputValorPeca.value = "";
    inputCodigoServico.value = "";
    inputServico.value = "";
    inputValorServico.value = "";
};