const db = require("../postgres");

async function cadastrarProdutoRepository(
  produto,
  un,
  valor,
  marca,
  descricao
) {
  try {
    const query =
      "INSERT INTO produto (produto, un, marca, valor, descricao, estoque) VALUES($1, $2, $3, $4, $5, $6) RETURNING *";
    const values = [produto, un, marca, valor, descricao, 0];

    return db
      .query(query, values)
      .then((res) => {
        return res.rows[0];
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}

async function buscarProdutosRepository() {
  try {
    const query = "SELECT * FROM produto";
    return db.query(query).then((res) => {
      return res.rows.map((produto) => {
        return {
          id: produto.id,
          produto: produto.produto,
          un: produto.un,
          marca: produto.marca,
          descricao: produto.descricao,
          estoque: produto.estoque,
          valor: produto.valor,
        };
      });
    });
  } catch (error) {
    console.log(error);
  }
}

async function atualizarProdutoRepository(
  estoque,
  id
) {
  try {
    const query = "UPDATE produto SET estoque = $1 WHERE id = $2";
    const values = [estoque, id];

    return db
      .query(query, values)

  } catch (error) {
    console.log(error);
  }
}

module.exports = { cadastrarProdutoRepository, buscarProdutosRepository, atualizarProdutoRepository };
