const buttonLimparVeiculopf = document.getElementById('button__limpar--veiculopf')

buttonLimparVeiculopf.addEventListener('click', (event) => {
  event.preventDefault()
  event__buttonLimpar__CadastraVeiculopf()
})

function event__buttonLimpar__CadastraVeiculopf() {
  var radioButtonPasseio = document.getElementById("radio__passeio");
  var radioButtonUtilitario = document.getElementById("radio__utilitario");
  var inputMarca = document.getElementById("marcaVeiculo");
  var inputAnoFabricacao = document.getElementById("anoFabricacaoVeiculo");
  var inputQuantidadePassageiros = document.getElementById("quantidadePassageirosVeiculo");
  var inputModelo = document.getElementById("modeloVeiculo");
  var inputRenavam = document.getElementById("renavamVeiculo");
  var inputFabricante = document.getElementById("fabricanteVeiculo");
  var inputPlacaVeiculo = document.getElementById("placaVeiculo");
  var inputNome = document.getElementById("nomeProprietario");
  var inputCpf= document.getElementById("cpf");
  var inputCnh= document.getElementById("cnhProprietario");
  
  if(radioButtonPasseio.checked == true){
      radioButtonPasseio.checked = false;
  } else if (radioButtonUtilitario.checked == true){
      radioButtonUtilitario.checked = false;
  }

  inputMarca.value = "";
  inputAnoFabricacao.value = "";
  inputQuantidadePassageiros.value = "";
  inputModelo.value = "";
  inputRenavam.value = "";
  inputFabricante.value = "";
  inputPlacaVeiculo.value = "";
  inputNome.value = "";
  inputCpf.value = "";
  inputCnh.value = "";

  reset__Cpf();
}

function reset__Cpf(){
  var inputCpf= document.getElementById("cpf");
  inputCpf.style.border = "1.5px solid rgb(118, 118, 118)";  
  inputCpf.style.border = "-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
  inputCpf.style.borderWidth = "1px";  
  inputCpf.style.height = "30px"
}