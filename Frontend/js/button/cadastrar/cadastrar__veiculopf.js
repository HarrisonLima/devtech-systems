const buttonCadastrarVeiculopf = document.getElementById(
  "button__cadastrar--veiculopf"
);

buttonCadastrarVeiculopf.addEventListener("click", (event) => {
  event.preventDefault();
  event__buttonCadastrar__CadastraVeiculopf();
});

function event__buttonCadastrar__CadastraVeiculopf() {
  var radioButtonPasseio = document.getElementById("radio__passeio");
  var radioButtonUtilitario = document.getElementById("radio__utilitario");
  var inputMarca = document.getElementById("marcaVeiculo");
  var inputAnoFabricacao = document.getElementById("anoFabricacaoVeiculo");
  var inputCor = document.getElementById("color__Veiculopf");
  var inputQuantidadePassageiros = document.getElementById(
    "quantidadePassageirosVeiculo"
  );
  var inputModelo = document.getElementById("modeloVeiculo");
  var inputRenavam = document.getElementById("renavamVeiculo");
  var inputFabricante = document.getElementById("fabricanteVeiculo");
  var inputPlacaVeiculo = document.getElementById("placaVeiculo");
  var inputNome = document.getElementById("nomeProprietario");
  var inputCpf = document.getElementById("cpf");
  var inputCnh = document.getElementById("cnhProprietario");

  if (
    (radioButtonPasseio.checked == false || radioButtonUtilitario == false) &&
    (inputMarca.value == "" ||
      inputAnoFabricacao.value == "" ||
      inputMarca.value == "" ||
      inputQuantidadePassageiros.value == "" ||
      inputModelo.value == "" ||
      inputRenavam.value == "" ||
      inputFabricante.value == "" ||
      inputPlacaVeiculo.value == "" ||
      inputNome.value == "" ||
      inputCpf.value == "" ||
      inputCnh.value == "")
  ) {
    alert(
      "Não foi possível realizar o cadastro! Verifique novamente se todos os campos foram preenchidos corretamente!"
    );
  } else {
    if (radioButtonPasseio.checked == true) {
      const payload = {
        tipo: "Veículo de passeio",
        marca: inputMarca.value,
        anoFabricacao: inputAnoFabricacao.value,
        cor: inputCor.value,
        numeroPassageiro: inputQuantidadePassageiros.value,
        modelo: inputModelo.value,
        renavam: inputRenavam.value,
        fabricante: inputFabricante.value,
        placa: inputPlacaVeiculo.value,
        nomeProprietario: inputNome.value,
        cpf: inputCpf.value,
        cnh: inputCnh.value,
      };

      fetch("http://localhost:3000/api/cadastro/veiculopf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((data) => data.json())
        .then((data) => {
          window.location.href = "../html/msgbox__cadastroconcluido.html";
        });
    } else {
      const payload = {
        tipo: "Veículo utilitário",
        marca: inputMarca.value,
        anoFabricacao: inputAnoFabricacao.value,
        cor: inputCor.value,
        numeroPassageiro: inputQuantidadePassageiros.value,
        modelo: inputModelo.value,
        renavam: inputRenavam.value,
        fabricante: inputFabricante.value,
        placa: inputPlacaVeiculo.value,
        nomeProprietario: inputNome.value,
        cpf: inputCpf.value,
        cnh: inputCnh.value,
      };

      fetch("http://localhost:3000/api/cadastro/veiculopf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then((data) => data.json()).then((data) => {
          window.location.href = "../html/msgbox__cadastroconcluido.html";
        });
    }   
  }
}
