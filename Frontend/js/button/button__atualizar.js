const buttonAtualizar = document.getElementById("button__atualizar");
var limite = (tabela.rows.length) - 1;

buttonAtualizar.addEventListener("click", async () => {

  var contador = 1;

  while (contador <= limite) {
    var linha = tabela.rows[contador];
    var id = (linha.cells[0]).textContent;
    var estoque = linha.cells[5].textContent;

    try {
      const response = await fetch(`http://localhost:3000/api/produto/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ estoque }),
      });

      if (response.ok) {
        console.log("Estoque do produto atualizado com sucesso!");
      } else {
        console.error(
          "Erro ao atualizar o estoque do produto:",
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
