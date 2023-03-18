const db = require("../postgres");

async function cadastrarProdutoRepository(produto, un, marca, descricao) {
  try {
    const query =
      "INSERT INTO produto (produto, un, marca, descricao) VALUES($1, $2, $3, $4) RETURNING *";
    const values = [produto, un, marca, descricao];

    return db.query(query, values).then((res) => {
      return res.rows[0];
    }).catch( error => {
      console.log(error)
    })
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
        };
      });
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { cadastrarProdutoRepository, buscarProdutosRepository };
