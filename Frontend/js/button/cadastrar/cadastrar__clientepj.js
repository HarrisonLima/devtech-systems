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
  var inputCep = document.getElementById("cep");
  var inputNumeroEndereco = document.getElementById("numeroEndereco");
  var inputCidade = document.getElementById("cidade");
  var inputUf = document.getElementById("uf");
  var inputLogradouro = document.getElementById("logradouro");
  var inputEmail = document.getElementById("email");
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
    inputTelefone.value == ""
  ) {
    alert(
      "Não foi possível realizar o cadastro! Verifique novamente se todos os campos foram preenchidos corretamente!"
    );
  } else {
    const payload = {
      razaosocial: inputRazaoSocial.value,
      nomefantasia: inputNomeFantasia.value,
      cnpj: inputCnpj.value,
      cep: inputCep.value,
      numero: inputNumeroEndereco.value,
      cidade: inputCidade.value,
      uf: inputUf.value,
      logradouro: inputLogradouro.value,
      email: inputEmail.value,
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
