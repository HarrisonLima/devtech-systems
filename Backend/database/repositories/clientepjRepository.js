const db = require("../postgres");

async function cadastrarClientepjRepository(
  razaosocial,
  nomefantasia,
  cnpj,
  inscricaoestadual,
  inscricaomunicipal,
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
      "INSERT INTO clientepj (razaosocial, nomefantasia, cnpj, inscricaoestadual, inscricaomunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *";
    const values = [
      razaosocial,
      nomefantasia,
      cnpj,
      inscricaoestadual,
      inscricaomunicipal,
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

async function buscarClientespjRepository() {
  try {
    const query = "SELECT * FROM clientepj";
    return db.query(query).then((res) => {
      return res.rows.map((cliente) => {
        return {
          id: cliente.id,
          razaosocial: cliente.razaosocial,
          nomefantasia: cliente.nomefantasia,
          cnpj: cliente.cnpj,
          inscricaoestadual: cliente.inscricaoestadual,
          inscricaomunicipal: cliente.inscricaomunicipal,
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

module.exports = { cadastrarClientepjRepository, buscarClientespjRepository };
