var cep = document.querySelector("#cep");

cep.addEventListener("keypress", () => {
  let cepLength = cep.value.length;
  if (cepLength == 2) {
    cep.value += ".";
  } else if (cepLength == 6) {
    cep.value += "-";
  }
});

const uf = document.querySelector("#uf");
const cidade = document.querySelector("#cidade");
const logradouro = document.querySelector("#logradouro");

const cepSearch = document.getElementById("cep");

cepSearch.addEventListener("blur", function (e) {
  var cepstring = "";
  cepstring = cepSearch.value;
  cepstring = cepstring.replace("-", "").replace(".", "");


  fetch(`https://viacep.com.br/ws/${cepstring}/json/`).then((data) => data.json()).then((data) => {
    popularForm(data)
  }).catch((err) => {
    alert("CEP não encontrado");
    logradouro.value = "";
    cidade.value = "";
    uf.value = "";
    throw new Error('CEP não encontrado', err);
  })

});

function popularForm(returnSearch) {
  logradouro.value = returnSearch.logradouro;
  cidade.value = returnSearch.localidade;
  uf.value = returnSearch.uf;

}

