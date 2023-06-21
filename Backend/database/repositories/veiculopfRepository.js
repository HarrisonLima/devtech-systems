const db = require("../postgres");

async function cadastrarVeiculopfRepository(
  tipo,
  marca,
  anofabricacao,
  cor,
  numeropassageiro,
  modelo,
  placa,
  nomeproprietario,
  cpf
) {
  try {
    const query =
      "INSERT INTO veiculopf (tipo, marca, anofabricacao, cor, numeropassageiro, modelo, placa, nomeproprietario, cpf) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *";
    const values = [
      tipo,
      marca,
      anofabricacao,
      cor,
      numeropassageiro,
      modelo,
      placa,
      nomeproprietario,
      cpf
    ];

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
    throw new Error("Erro ao cadastrar veículo.");
  }
}

async function buscarVeiculospfRepository() {
  try {
    const query = "SELECT * FROM veiculopf";
    return db.query(query).then((res) => {
      return res.rows.map((veiculo) => {
        return {
          id: veiculo.id,
          tipo: veiculo.tipo,
          marca: veiculo.marca,
          anofabricacao: veiculo.anofabricacao,
          cor: veiculo.cor,
          numeropassageiro: veiculo.numeropassageiro,
          modelo: veiculo.modelo,
          placa: veiculo.placa,
          nomeproprietario: veiculo.nomeproprietario,
          cpf: veiculo.cpf,
        };
      });
    });
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao buscar veículos.");
  }
}

module.exports = { cadastrarVeiculopfRepository, buscarVeiculospfRepository };
