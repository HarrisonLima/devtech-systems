const buttonCadastrarClientepj = document.getElementById(
  "button__cadastrar--clientepj"
);

buttonCadastrarClientepj.addEventListener("click", (event) => {
  event.preventDefault();
  event__buttonCadastrar__CadastraClientepj();
});

function event__buttonCadastrar__CadastraClientepj() {
  var inputRazaoSocial = document.getElementById("razaoSocial");
  var inputNomeFantasia = document.getElementById("nomeFantasia");
  var inputCnpj = document.getElementById("cnpj");
  var inputInscricaoEstadual = document.getElementById("inscricaoEstadual");
  var inputInscricaoMunicipal = document.getElementById("inscricaoMunicipal");
  var inputCep = document.getElementById("cep");
  var inputNumeroEndereco = document.getElementById("numeroEndereco");
  var inputComplemento = document.getElementById("complementoEndereco");
  var inputCidade = document.getElementById("cidade");
  var inputUf = document.getElementById("uf");
  var inputLogradouro = document.getElementById("logradouro");
  var inputEmail = document.getElementById("email");
  var inputDdd = document.getElementById("ddd");
  var inputTelefone = document.getElementById("telefone");

  if (
    inputRazaoSocial.value == "" ||
    inputNomeFantasia.value == "" ||
    inputCnpj.value == "" ||
    inputCep.value == "" ||
    inputNumeroEndereco.value == "" ||
    inputCidade.value == "" ||
    inputUf.value == "" ||
    inputLogradouro.value == "" ||
    inputEmail.value == "" ||
    inputDdd.value == "" ||
    inputTelefone.value == ""
  ) {
    alert(
      "Não foi possível realizar o cadastro! Verifique novamente se todos os campos foram preenchidos corretamente!"
    );
  } else {

    // var razao = inputRazaoSocial.value.toString();

    const payload = {
      razaoSocial: inputRazaoSocial.value,
      nomeFantasia: inputNomeFantasia.value,
      cnpj: inputCnpj.value,
      inscricaoEstadual: inputInscricaoEstadual.value,
      inscricaoMunicipal: inputInscricaoMunicipal.value,
      cep: inputCep.value,
      numero: inputNumeroEndereco.value,
      complemento: inputComplemento.value,
      cidade: inputCidade.value,
      uf: inputUf.value,
      logradouro: inputLogradouro.value,
      email: inputEmail.value,
      ddd: inputDdd.value,
      telefone: inputTelefone.value
    };

    fetch("http://localhost:3000/api/cadastro/clientepj", {
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
