const db = require("../postgres");

async function cadastrarVeiculopf(tipo, marca, anofabricacao, cor, numeropassageiro, modelo, renavam, fabricante, placa, nomeproprietario, cpf, cnh){ 
  try{
            const query = "INSERT INTO veiculopf (tipo, marca, anofabricacao, cor, numeropassageiro, modelo, renavam, fabricante, placa, nomeproprietario, cpf, cnh) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *"
            const values = [tipo, marca, anofabricacao, cor, numeropassageiro, modelo, renavam, fabricante, placa, nomeproprietario, cpf, cnh];
        
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
          anofabricacao: veiculo.anofabricacao,
          cor: veiculo.cor,
          numeropassageiro: veiculo.numeropassageiro,
          modelo: veiculo.modelo,
          renavam: veiculo.renavam,
          fabricante: veiculo.fabricante,
          placa: veiculo.placa,
          nomeproprietario: veiculo.nomeproprietario,
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