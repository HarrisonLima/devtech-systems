button__finalizar.addEventListener("click", () => {
  if(inputBuscarCliente.value != ""){
  var limite = tableProdutos.rows.length - 1;
  var contador = 1;

  while (contador <= limite) {
    var linha = tableProdutos.rows[contador];
    var id = linha.cells[8].textContent;
    var estoque = linha.cells[9].textContent;

    try {
      const response = fetch(`http://localhost:3000/api/produto/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ estoque }),
      });

      if (response.ok) {
        console.log("Estoque do produto atualizado com sucesso!");
      } else {
        window.location.href = "../html/msgbox__vendaRealizada.html";
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
    contador++;
  }
} else {
  alert("Erro ao finalizar a venda! O campo cliente deve ser preenchido!");
}""
});
