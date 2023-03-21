const db = require("../postgres");

async function cadastrarFornecedorRepository(
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
      "INSERT INTO fornecedor (razaosocial, nomefantasia, cnpj, inscricaoestadual, inscricaomunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *";
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

async function buscarFornecedoresRepository() {
  try {
    const query = "SELECT * FROM fornecedor";
    return db.query(query).then((res) => {
      return res.rows.map((fornecedor) => {
        return {
          id: fornecedor.id,
          razaosocial: fornecedor.razaosocial,
          nomefantasia: fornecedor.nomefantasia,
          cnpj: fornecedor.cnpj,
          inscricaoestadual: fornecedor.inscricaoestadual,
          inscricaomunicipal: fornecedor.inscricaomunicipal,
          cep: fornecedor.cep,
          numero: fornecedor.numero,
          complemento: fornecedor.complemento,
          cidade: fornecedor.cidade,
          uf: fornecedor.uf,
          logradouro: fornecedor.logradouro,
          email: fornecedor.email,
          ddd: fornecedor.ddd,
          telefone: fornecedor.telefone
        };
      });
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { cadastrarFornecedorRepository, buscarFornecedoresRepository };
