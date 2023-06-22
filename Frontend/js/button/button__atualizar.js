const buttonAtualizar = document.getElementById("button__atualizar");
var linhas = tabela.rows;
var qtdeLinhas = linhas.length;

buttonAtualizar.addEventListener("click", async () => {
  const id = 1;
  const estoque = 5;

  try {
    const response = await fetch(`http://localhost:3000/api/produto/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ estoque })
    });

    if (response.ok) {
      console.log('Estoque do produto atualizado com sucesso!');
    } else {
      console.error('Erro ao atualizar o estoque do produto:', response.statusText);
    }
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
  }
});
