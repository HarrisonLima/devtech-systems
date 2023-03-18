const db = require("../postgres");

async function cadastrarFornecedorRepository(
  razaoSocial,
  nomeFantasia,
  cnpj,
  inscricaoEstadual,
  inscricaoMunicipal,
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
      "INSERT INTO fornecedor (razaoSocial, nomeFantasia, cnpj, inscricaoEstadual, inscricaoMunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *";
    const values = [
      razaoSocial,
      nomeFantasia,
      cnpj,
      inscricaoEstadual,
      inscricaoMunicipal,
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
          razaoSocial: fornecedor.razaoSocial,
          nomeFantasia: fornecedor.nomeFantasia,
          cnpj: fornecedor.cnpj,
          inscricaoEstadual: fornecedor.inscricaoEstadual,
          inscricaoMunicipal: fornecedor.inscricaoMunicipal,
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
