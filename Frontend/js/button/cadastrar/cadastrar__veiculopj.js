const buttonCadastrarVeiculopj = document.getElementById(
  "button__cadastrar--veiculopj"
);

buttonCadastrarVeiculopj.addEventListener("click", (event) => {
  event.preventDefault();
  event__buttonCadastrar__CadastraVeiculopj();
});

function event__buttonCadastrar__CadastraVeiculopj() {
  var radioButtonPasseio = document.getElementById("radio__passeio");
  var radioButtonUtilitario = document.getElementById("radio__utilitario");
  var inputMarca = document.getElementById("marcaVeiculo");
  var inputAnoFabricacao = document.getElementById("anoFabricacaoVeiculo");
  var inputCor = document.getElementById("color__Veiculopj");
  var inputQuantidadePassageiros = document.getElementById(
    "quantidadePassageirosVeiculo"
  );
  var inputModelo = document.getElementById("modeloVeiculo");
  var inputRenavam = document.getElementById("renavamVeiculo");
  var inputFabricante = document.getElementById("fabricanteVeiculo");
  var inputPlacaVeiculo = document.getElementById("placaVeiculo");
  var inputProprietario = document.getElementById("nomeProprietario");
  var inputCnpj = document.getElementById("cnpj");

  if (
    radioButtonPasseio.checked == false ||
    (radioButtonUtilitario == false && inputMarca.value == "") ||
    inputAnoFabricacao.value == "" ||
    inputMarca.value == "" ||
    inputQuantidadePassageiros.value == "" ||
    inputModelo.value == "" ||
    inputRenavam.value == "" ||
    inputFabricante.value == "" ||
    inputPlacaVeiculo.value == "" ||
    inputProprietario.value == "" ||
    inputCnpj.value == ""
  ) {
    alert(
      "Não foi possível realizar o cadastro! Verifique novamente se todos os campos foram preenchidos corretamente!"
    );
  } else {
    if (radioButtonPasseio.checked == true) {
      const payload = {
        tipo: "Veículo de passeio",
        marca: inputMarca.value,
        anofabricacao: inputAnoFabricacao.value,
        cor: inputCor.value,
        numeropassageiro: inputQuantidadePassageiros.value,
        modelo: inputModelo.value,
        renavam: inputRenavam.value,
        fabricante: inputFabricante.value,
        placa: inputPlacaVeiculo.value,
        nomeproprietario: inputProprietario.value,
        cnpj: inputCnpj.value,
      };

      fetch("http://localhost:3000/api/cadastro/veiculopj", {
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
        tipo: "Veículo de utilitário",
        marca: inputMarca.value,
        anofabricacao: inputAnoFabricacao.value,
        cor: inputCor.value,
        numeropassageiro: inputQuantidadePassageiros.value,
        modelo: inputModelo.value,
        renavam: inputRenavam.value,
        fabricante: inputFabricante.value,
        placa: inputPlacaVeiculo.value,
        nomeproprietario: inputProprietario.value,
        cnpj: inputCnpj.value,
      };

      fetch("http://localhost:3000/api/cadastro/veiculopj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((data) => data.json())
        .then((data) => {
          window.location.href = "../html/msgbox__cadastroconcluido.html";
        });
    }
  }
}
