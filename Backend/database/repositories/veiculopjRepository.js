const db = require("../postgres");

async function cadastrarVeiculopjRepository(
  tipo,
  marca,
  anoFabricacao,
  cor,
  numeroPassageiro,
  modelo,
  renavam,
  fabricante,
  placa,
  nomeProprietario,
  cnpj
) {
  try {
    const query =
      "INSERT INTO veiculopj (tipo, marca, anoFabricacao, cor, numeroPassageiro, modelo, renavam, fabricante, placa, nomeProprietario, cnpj) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *";
    const values = [
      tipo,
      marca,
      anoFabricacao,
      cor,
      numeroPassageiro,
      modelo,
      renavam,
      fabricante,
      placa,
      nomeProprietario,
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
          anoFabricacao: veiculo.anoFabricacao,
          cor: veiculo.cor,
          numeroPassageiro: veiculo.numeroPassageiro,
          modelo: veiculo.modelo,
          renavam: veiculo.renavam,
          fabricante: veiculo.fabricante,
          placa: veiculo.placa,
          nomeProprietario: veiculo.nomeProprietario,
          cnpj: veiculo.cnpj
        };
      });
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { cadastrarVeiculopjRepository, buscarVeiculospjRepository };
