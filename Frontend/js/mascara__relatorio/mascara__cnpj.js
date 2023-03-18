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
