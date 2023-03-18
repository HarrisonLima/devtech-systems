const db = require("../postgres");

async function cadastrarVeiculopf(tipo, marca, anoFabricacao, cor, numeroPassageiro, modelo, renavam, fabricante, placa, nomeProprietario, cpf, cnh){ 
  try{
            const query = "INSERT INTO veiculopf (tipo, marca, anoFabricacao, cor, numeroPassageiro, modelo, renavam, fabricante, placa, nomeProprietario, cpf, cnh) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *"
            const values = [tipo, marca, anoFabricacao, cor, numeroPassageiro, modelo, renavam, fabricante, placa, nomeProprietario, cpf, cnh];
        
            return db.query(query, values).then((res) => {
              return res.rows[0];
            }).catch( error => {
              console.log(error)
            })
          } catch (error) {
            console.log(error);
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
          anoFabricacao: veiculo.anoFabricacao,
          cor: veiculo.cor,
          numeroPassageiro: veiculo.numeroPassageiro,
          modelo: veiculo.modelo,
          renavam: veiculo.renavam,
          fabricante: veiculo.fabricante,
          placa: veiculo.placa,
          nomeProprietario: veiculo.nomeProprietario,
          cpf: veiculo.cpf,
          cnh: veiculo.cnh
        };
      });
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { cadastrarVeiculopf, buscarVeiculospfRepository };