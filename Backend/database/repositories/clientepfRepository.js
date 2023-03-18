const db = require("../postgres");

async function cadastrarClientepfRepository(
  nome,
  cpf,
  genero,
  nascimento,
  estadocivil,
  cep,
  numero,
  complemento,
  cidade,
  uf,
  logradouro,
  email,
  ddd,
  telefone
) {
  try {
    const query =
      "INSERT INTO clientepf (nome, cpf, genero, nascimento, estadocivil, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *";
    const values = [
      nome,
      cpf,
      genero,
      nascimento,
      estadocivil,
      cep,
      numero,
      complemento,
      cidade,
      uf,
      logradouro,
      email,
      ddd,
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
            genero: cliente.genero,
            nascimento: cliente.nascimento,
            estadocivil: cliente.estadocivil,
            cep: cliente.cep,
            numero: cliente.numero,
            complemento: cliente.complemento,
            cidade: cliente.cidade,
            uf: cliente.uf,
            logradouro: cliente.logradouro,
            email: cliente.email,
            ddd: cliente.ddd,
            telefone: cliente.telefone
        };
      });
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { cadastrarClientepfRepository, buscarClientespfRepository };
