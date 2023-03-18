const gerarOrcamentoRepository = require("../repositories/orcamentoRepository");

async function gerarOrcamento(cliente, placa, codigo, item, quantidade, valor){
    if (!cliente || !placa || !codigo || !item || !quantidade || !valor) {
        throw new Error(`Você precisa informar cliente, placa, codigo, item, quantidade e valor`)
    }
    return gerarOrcamentoRepository(cliente, placa, codigo, item, quantidade, valor);
}

module.exports = { gerarOrcamento };