var cpfMask = document.getElementById("cpf");

cpfMask.addEventListener("keypress", () => {
  let cpfLength = cpfMask.value.length;

  if (cpfLength == 3) {
    cpfMask.value += ".";
  } else if (cpfLength == 7) {
    cpfMask.value += ".";
  } else if (cpfLength == 11) {
    cpfMask.value += "-";
  }
});
