const buttonLimparVeiculopj = document.getElementById('button__limpar--veiculopj')

buttonLimparVeiculopj.addEventListener('click', (event) => {
  event.preventDefault()
  event__buttonLimpar__CadastraVeiculopj()
})

function event__buttonLimpar__CadastraVeiculopj() {
  var radioButtonPasseio = document.getElementById("radio__passeio");
  var radioButtonUtilitario = document.getElementById("radio__utilitario");
  var inputMarca = document.getElementById("marcaVeiculo");
  var inputAnoFabricacao = document.getElementById("anoFabricacaoVeiculo");
  var inputQuantidadePassageiros = document.getElementById("quantidadePassageirosVeiculo");
  var inputModelo = document.getElementById("modeloVeiculo");
  var inputPlacaVeiculo = document.getElementById("placaVeiculo");
  var inputNomeFantasia = document.getElementById("nomeFantasiaVeiculo");
  var inputCnpj= document.getElementById("cnpj");
  
  if(radioButtonPasseio.checked == true){
      radioButtonPasseio.checked = false;
  } else if (radioButtonUtilitario.checked == true){
      radioButtonUtilitario.checked = false;
  }

  inputMarca.value = "";
  inputAnoFabricacao.value = "";
  inputQuantidadePassageiros.value = "";
  inputModelo.value = "";
  inputPlacaVeiculo.value = "";
  inputNomeFantasia.value = "";
  inputCnpj.value = "";

  reset__Cnpj();
}

function reset__Cnpj(){
    var inputCnpj = document.getElementById("cnpj");
    inputCnpj.style.border = "1.5px solid rgb(118, 118, 118)";  
    inputCnpj.style.border = "-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
    inputCnpj.style.borderWidth = "1px";  
    inputCnpj.style.height = "30px"
}