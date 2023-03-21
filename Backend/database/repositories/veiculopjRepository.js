const db = require("../postgres");

async function cadastrarVeiculopjRepository(
  tipo,
  marca,
  anofabricacao,
  cor,
  numeropassageiro,
  modelo,
  renavam,
  fabricante,
  placa,
  nomeproprietario,
  cnpj
) {
  try {
    const query =
      "INSERT INTO veiculopj (tipo, marca, anofabricacao, cor, numeropassageiro, modelo, renavam, fabricante, placa, nomeproprietario, cnpj) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *";
    const values = [
      tipo,
      marca,
      anofabricacao,
      cor,
      numeropassageiro,
      modelo,
      renavam,
      fabricante,
      placa,
      nomeproprietario,
      cnpj
    ];

    return db.query(query, values).then((res) => {
      return res.rows[0];
    }).catch( error => {
      console.log(error)
    })
  } catch (error) {
    console.log(error);
  }
}

async function buscarVeiculospjRepository() {
  try {
    const query = "SELECT * FROM veiculopj";
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
          renavam: veiculo.renavam,
          fabricante: veiculo.fabricante,
          placa: veiculo.placa,
          nomeproprietario: veiculo.nomeproprietario,
          cnpj: veiculo.cnpj
        };
      });
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { cadastrarVeiculopjRepository, buscarVeiculospjRepository };
