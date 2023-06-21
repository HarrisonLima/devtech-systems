const db = require("../postgres");

async function cadastrarClientepfRepository(
  nome,
  cpf,
  cep,
  numero,
  cidade,
  uf,
  logradouro,
  email,
  telefone
) {
  try {
    const query =
      "INSERT INTO clientepf (nome, cpf, cep, numero, cidade, uf, logradouro, email, telefone) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *";
    const values = [
      nome,
      cpf,
      cep,
      numero,
      cidade,
      uf,
      logradouro,
      email,
      telefone
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

async function buscarClientespfRepository() {
  try {
    const query = "SELECT * FROM clientepf";
    return db.query(query).then((res) => {
      return res.rows.map((cliente) => {
        return {
            id: cliente.id, 
            nome: cliente.nome,
            cpf: cliente.cpf,
            cep: cliente.cep,
            numero: cliente.numero,
            cidade: cliente.cidade,
            uf: cliente.uf,
            logradouro: cliente.logradouro,
            email: cliente.email,
            telefone: cliente.telefone
        };
      });
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { cadastrarClientepfRepository, buscarClientespfRepository };
