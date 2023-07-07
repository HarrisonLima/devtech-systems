const buttonAtualizar = document.getElementById("button__atualizar");
var limite = (tabela.rows.length) - 1;

buttonAtualizar.addEventListener("click", async () => {

  var contador = 1;

  while (contador <= limite) {
    var linha = tabela.rows[contador];
    var id = (linha.cells[0]).textContent;
    var dataprevisao = linha.cells[6].textContent;
    var dataencerramento = linha.cells[7].textContent;

    var situacao;

    if (dataencerramento != ""){
      situacao = "Finalizada";
    } else if (dataencerramento == "" && dataprevisao != ""){
      situacao = "Em andamento";
    } else {
      situacao = "Em aberto"
    }
    
    try {
      const response = await fetch(`http://localhost:3000/api/manutencao/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ situacao, dataprevisao, dataencerramento, id}),
      });

      if (response.ok) {
        console.log("Manutenção atualizada com sucesso!");
      } else {
        console.error(
          "Erro ao atualizar manutenção:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
    contador++;
  }
  location.reload();
});
