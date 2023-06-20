const buttonCadastrarClientepf = document.getElementById(
  "button__cadastrar--clientepf"
);

buttonCadastrarClientepf.addEventListener("click", (event) => {
  event.preventDefault();
  event__buttonCadastrar__CadastraClientepf();
});

function event__buttonCadastrar__CadastraClientepf() {
  var inputNome = document.getElementById("nome");
  var inputCpf = document.getElementById("cpf");
  var inputCep = document.getElementById("cep");
  var inputNumeroEndereco = document.getElementById("numeroEndereco");
  var inputCidade = document.getElementById("cidade");
  var inputUf = document.getElementById("uf");
  var inputLogradouro = document.getElementById("logradouro");
  var inputEmail = document.getElementById("email");
  var inputTelefone = document.getElementById("telefone");
  var loader = document.getElementById("loader")

  
  if (
    inputNome.value == "" ||
    inputCpf.value == "" ||
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
    loader.classList.add("show-loader");    
    
    const payload = {
      nome: inputNome.value,
      cpf: inputCpf.value,
      cep: inputCep.value,
      numero: inputNumeroEndereco.value,
      cidade: inputCidade.value,
      uf: inputUf.value,
      logradouro: inputLogradouro.value,
      email: inputEmail.value,
      telefone: inputTelefone.value
    };

    fetch("http://localhost:3000/api/cadastro/clientepf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((data) => data.json())
      .then((data) => {
        loader.classList.add("close-loader");
        window.location.href = "../html/msgbox__cadastroconcluido.html";
      });
  }
}


