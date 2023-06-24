const buttonLimparClientepj = document.getElementById('button__limpar--clientepj')

buttonLimparClientepj.addEventListener('click', (event) => {
  event.preventDefault()
  event__buttonLimpar__CadastraClientepj()
})

function event__buttonLimpar__CadastraClientepj(){
  var inputRazaoSocial = document.getElementById("razaoSocial");
  var inputNomeFantasia = document.getElementById("nomeFantasia");
  var inputCnpj = document.getElementById("cnpj");
  var inputCep = document.getElementById("cep");
  var inputNumeroEndereco = document.getElementById("numeroEndereco");
  var inputComplementoEndereco = document.getElementById("complementoEndereco");
  var inputCidade = document.getElementById("cidade");
  var inputUf = document.getElementById("uf");
  var inputLogradouro = document.getElementById("logradouro");
  var inputEmail = document.getElementById("email");
  var inputTelefone = document.getElementById("telefone");

  inputRazaoSocial.value = "";
  inputNomeFantasia.value = "";
  inputCnpj.value = "";
  inputCep.value = "";
  inputNumeroEndereco.value = "";
  inputComplementoEndereco.value = "";
  inputCidade.value = "";
  inputUf.value = "";
  inputLogradouro.value = "";
  inputEmail.value = "";
  inputTelefone.value = "";

  reset__Cnpj();
};

function reset__Cnpj(){
  var inputCnpj = document.getElementById("cnpj");
  inputCnpj.style.border = "1.5px solid rgb(118, 118, 118)";  
  inputCnpj.style.border = "-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
  inputCnpj.style.borderWidth = "1px";  
  inputCnpj.style.height = "30px"
}