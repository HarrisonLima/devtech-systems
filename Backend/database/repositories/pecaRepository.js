const db = require("../postgres");

async function cadastrarPecaRepository(peca, marca, descricao) {
  try {
    const query =
      "INSERT INTO peca (peca, marca, descricao) VALUES($1, $2, $3) RETURNING *";
    const values = [peca, marca, descricao];

    return db.query(query, values).then((res) => {
      return res.rows[0];
    }).catch( error => {
      console.log(error)
    })
  } catch (error) {
    console.log(error);
  }
}

async function buscarPecasRepository() {
  try {
    const query = "SELECT * FROM peca";
    return db.query(query).then((res) => {
      return res.rows.map((peca) => {
        return {
          id: peca.id,
          peca: peca.peca,
          marca: peca.marca,
          descricao: peca.descricao,
        };
      });
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { cadastrarPecaRepository, buscarPecasRepository };
