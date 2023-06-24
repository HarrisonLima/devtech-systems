const buttonLimparClientepf = document.getElementById('button__limpar--clientepf')

buttonLimparClientepf.addEventListener('click', (event) => {
  event.preventDefault()
  event__buttonLimpar__CadastraClientepf()
})

function event__buttonLimpar__CadastraClientepf(){
  var inputNome = document.getElementById("nome");
  var inputCpf = document.getElementById("cpf");
  var inputCep = document.getElementById("cep");
  var inputNumeroEndereco = document.getElementById("numeroEndereco");
  var inputComplementoEndereco = document.getElementById("complementoEndereco");
  var inputCidade = document.getElementById("cidade");
  var inputUf = document.getElementById("uf");
  var inputLogradouro = document.getElementById("logradouro");
  var inputEmail = document.getElementById("email");
  var inputTelefone = document.getElementById("telefone");

  inputNome.value = "";
  inputCpf.value = "";
  inputCep.value = "";
  inputNumeroEndereco.value = "";
  inputComplementoEndereco.value = "";
  inputCidade.value = "";
  inputUf.value = "";
  inputLogradouro.value = "";
  inputEmail.value = "";
  inputTelefone.value = "";

  reset__Cpf();
};

function reset__Cpf(){
  var inputCpf= document.getElementById("cpf");
  inputCpf.style.border = "1.5px solid rgb(118, 118, 118)";  
  inputCpf.style.border = "-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
  inputCpf.style.borderWidth = "1px";  
  inputCpf.style.height = "30px"
}