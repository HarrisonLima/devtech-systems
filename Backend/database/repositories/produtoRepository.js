const db = require("../postgres");

async function cadastrarProdutoRepository(produto, un, marca, descricao) {
  try {
    const query =
      "INSERT INTO produto (produto, un, marca, descricao, estoque) VALUES($1, $2, $3, $4, $5) RETURNING *";
    const values = [produto, un, marca, descricao, 0];

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
          estoque: produto.estoque,
        };
      });
    });
  } catch (error) {
    console.log(error);
  }
}

async function atualizarProdutoRepository(id, produto, un, marca, descricao, estoque) {
  try {
    const query =
      "UPDATE produto SET produto = $1, un = $2, marca = $3, descricao = $4 , estoque = $5 WHERE id = $6 RETURNING *";
    const values = [produto, un, marca, descricao, estoque, id];

    return db.query(query, values).then((res) => {
      return res.rows[0];
    }).catch((error) => {
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { cadastrarProdutoRepository, buscarProdutosRepository, atualizarProdutoRepository };
