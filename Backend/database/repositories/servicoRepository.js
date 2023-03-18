const db = require("../postgres");

async function cadastrarServicoRepository(servico, valor, descricao) {
  try {
    const query =
      "INSERT INTO servico (servico, valor, descricao) VALUES($1, $2, $3) RETURNING *";
    const values = [servico, valor, descricao];

    return db.query(query, values).then((res) => {
      return res.rows[0];
    }).catch( error => {
      console.log(error)
    })
  } catch (error) {
    console.log(error);
  }
}

async function buscarServicosRepository() {
    try {
      const query = "SELECT * FROM servico";
      return db.query(query).then((res) => {
        return res.rows.map((servico) => {
          return {
            id: servico.id,
            servico: servico.servico,
            valor: servico.valor,
            descricao: servico.descricao
          };
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  module.exports = { cadastrarServicoRepository, buscarServicosRepository };
