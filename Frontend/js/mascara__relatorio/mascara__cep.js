var cep = document.querySelector("#cep");

cep.addEventListener("keypress", () => {
  let cepLength = cep.value.length;
  if (cepLength == 2) {
    cep.value += ".";
  } else if (cepLength == 6) {
    cep.value += "-";
  }
});

let uf = document.querySelector("#uf");
let cidade = document.querySelector("#cidade");
let logradouro = document.querySelector("#logradouro");

let cepSearch = document.getElementById("cep");

cepSearch.addEventListener("blur", function (e) {
  var cepstring = "";
  cepstring = cepSearch.value;
  cepstring = cepstring.replace("-", "").replace(".", "");
  let cep = e.target.value;
  let script = document.createElement("script");
  script.src =
    "https://viacep.com.br/ws/" + cepstring + "/json/?callback=popularForm";
  document.body.appendChild(script);
});

function popularForm(returnSearch) {
  if ("erro" in returnSearch) {
    alert("CEP não encontrado");
    logradouro.value = "";
    cidade.value = "";
    uf.value = "";
    return;
  } else {
    logradouro.value = returnSearch.logradouro;
    cidade.value = returnSearch.localidade;
    uf.value = returnSearch.uf;
  }
}
