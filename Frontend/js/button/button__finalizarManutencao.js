button__finalizar.addEventListener("click", () => {
  if(inputBuscarVeiculo.value != "" && inputDocumentoProprietario.value != "" && inputData.value != ""){
  var limite = tableItens.rows.length - 1;
  var contador = 1;
  var descricaoPOST = "";

  while (contador <= limite){
    var linha = tableItens.rows[contador];
    descricaoPOST += linha.cells[1].textContent + ";";
    contador++;
  }

  const payload = {
    cliente: inputnomeProprietario.value,
    veiculo: inputBuscarVeiculo.value,
    valor: inputSubtotal.value,
    descricao: descricaoPOST,
    situacao: "Em aberto",
    datainicio: inputData.value,
  };

  fetch("http://localhost:3000/api/cadastro/manutencao", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((data) => data.json())
    .then((data) => {
      window.location.href = "../html/msgbox__manutencaoEmitida.html";
    });
} else {
  alert("Erro ao criar ordem de manutenção! Todos os campos devem ser preenchidos!");
}""
});
