var cpf = document.getElementById("cpf");

function TestaCPF(cpf) {

  const cpfSemPontuacao = cpf.replace("-", "").replace(".", "").replace(".", "");

  var Soma;
  var Resto;
  Soma = 0;
  
  if (cpfSemPontuacao == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(cpfSemPontuacao.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpfSemPontuacao.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpfSemPontuacao.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpfSemPontuacao.substring(10, 11) ) ) return false;
    
  return true;

}

const script = document.createElement('script');

  script.innerHTML = "*CPF inserido inválido";

  cpf.addEventListener("input", function () {
    let cpfLength = cpf.value.length;

    if (cpfLength == 3) {
      cpf.value += ".";
    } else if (cpfLength == 7) {
      cpf.value += ".";
    } else if (cpfLength == 11) {
      cpf.value += "-";
    }
    
    let incpf = TestaCPF(cpf.value);
    
    if (incpf == false && cpf.value != "") {
      cpf.style.border = "solid #D00404";
      cpf.style.borderRadius = "1";
      
      cpf.parentNode.insertBefore(script, cpf.nextSibling);
    } else {
      cpf.style.border = "1.5px solid rgb(118, 118, 118)";  
      cpf.style.border = "-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
      cpf.style.borderWidth = "1px";  
      cpf.style.height = "30px";
      
      script.innerHTML = '';
    }
});  