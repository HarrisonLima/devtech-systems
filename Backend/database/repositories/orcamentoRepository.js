const db = require("../postgres");

async function gerarOrcamento(cliente, placa, codigo, item, quantidade, valor){
    try{
        const query = "INSERT INTO orcamento (cliente, placa, codigo, item, quantidade, valor) VALUES($1, $2, $3, $4, $5, $6) RETURNING *"
        const values = [cliente, placa, codigo, item, quantidade, valor];
    
        return db.query(query, values).then((res) => {
            return res.rows[0]
        })
     } catch (error) {
    console.log(error);
  }
}

module.exports = { gerarOrcamento };


