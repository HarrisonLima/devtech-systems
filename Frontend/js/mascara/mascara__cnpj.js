var cnpjMask = document.getElementById("cnpj");

cnpjMask.addEventListener("keypress", () => {
  let cnpjLenght = cnpjMask.value.length;
  
  if (cnpjLenght == 2) {
    cnpjMask.value += ".";
  } else if (cnpjLenght == 6) {
    cnpjMask.value += ".";
  } else if (cnpjLenght == 10) {
    cnpjMask.value += "/";
  } else if (cnpjLenght == 15) {
    cnpjMask.value += "-";
  }
});

var cnpj = document.getElementById("cnpj");

cnpj.addEventListener("blur", function () {
  let incnpj = validarCnpj(cnpj.value);
  if(incnpj == false){
    cnpj.value = "";
    cnpj.style.border = "solid #D00404";
    cnpj.style.borderRadius = "4"
    alert('CNPJ inserido inválido!')
  } else{
    cnpj.style.border = "1.5px solid rgb(118, 118, 118)";  
    cnpj.style.border = "-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))";
    cnpj.style.borderWidth = "1px";  
    cnpj.style.height = "30px"
  } 
});

function validarCnpj(cnpj) {
 
  cnpj = cnpj.replace(/[^\d]+/g,'');

  if(cnpj == '') return false;
   
  if (cnpj.length != 14)
      return false;

  // Elimina CNPJs invalidos conhecidos
  if (cnpj == "00000000000000" || 
      cnpj == "11111111111111" || 
      cnpj == "22222222222222" || 
      cnpj == "33333333333333" || 
      cnpj == "44444444444444" || 
      cnpj == "55555555555555" || 
      cnpj == "66666666666666" || 
      cnpj == "77777777777777" || 
      cnpj == "88888888888888" || 
      cnpj == "99999999999999")
      return false;
       
  // Valida DVs
  tamanho = cnpj.length - 2
  numeros = cnpj.substring(0,tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0))
      return false;
       
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0,tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
        return false;
      
  return true;
  
}