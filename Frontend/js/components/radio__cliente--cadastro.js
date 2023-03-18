var radiopf = document.getElementById("radio__clientepf");
var radiopj = document.getElementById("radio__clientepj");

radiopf.addEventListener("click", (event) => {
  event.preventDefault();
  valid__tipoClienteCadastro();
});

radiopj.addEventListener("click", (event) => {
  event.preventDefault();
  valid__tipoClienteCadastro();
});

function valid__tipoClienteCadastro() {
  if (radiopf.checked) {
    window.location.href = "../html/cadastro__cliente.html";
  } else if (radiopj.checked) {
    window.location.href = "../html/cadastro__cliente--empresa.html";
  }
}
