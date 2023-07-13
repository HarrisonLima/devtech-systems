const db = require("../postgres");

async function cadastrarManutencaoRepository(
  cliente,
  veiculo,
  valor,
  descricao,
  situacao,
  datainicio
) {
  try {
    const query =
      "INSERT INTO manutencao (cliente, veiculo, valor, descricao, situacao, datainicio, dataencerramento, dataprevisao) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
    const values = [cliente, veiculo, valor, descricao, situacao, datainicio, "", ""];

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

async function buscarManutencaoRepository() {
  try {
    const query = "SELECT * FROM manutencao";
    return db.query(query).then((res) => {
      return res.rows.map((manutencao) => {
        return {
          id: manutencao.id,
          cliente: manutencao.cliente,
          veiculo: manutencao.veiculo,
          valor: manutencao.valor,
          descricao: manutencao.descricao,
          situacao: manutencao.situacao,
          datainicio: manutencao.datainicio,
          dataencerramento: manutencao.dataencerramento,
          dataprevisao: manutencao.dataprevisao,
        };
      });
    });
  } catch (error) {
    console.log(error);
  }
}

async function atualizarManutencaoRepository(
  situacao,
  dataprevisao,
  dataencerramento,
  id
) {
  try {
    const query = "UPDATE manutencao SET situacao = $1, dataprevisao = $2, dataencerramento = $3 WHERE id = $4";
    const values = [situacao, dataprevisao, dataencerramento, id];

    return db
      .query(query, values)

  } catch (error) {
    console.log(error);
  }
}

module.exports = { cadastrarManutencaoRepository, buscarManutencaoRepository, atualizarManutencaoRepository };
