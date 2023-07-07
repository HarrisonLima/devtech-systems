const { cadastrarManutencaoRepository, buscarManutencaoRepository, atualizarManutencaoRepository } = require("../repositories/manutencaoRepository");

async function cadastrarManutencao(cliente, veiculo, valor, descricao, situacao, datainicio){
    if (!cliente || !veiculo || !valor || !descricao || !situacao || !datainicio ) {
        console.error(`Você precisa informar cliente, veiculo, valor, descricao, situacao, datainicio`)
    }
    return cadastrarManutencaoRepository(cliente, veiculo, valor, descricao, situacao, datainicio);
}

async function buscarManutencoes() {
    return buscarManutencaoRepository();
}

async function atualizarManutencao(situacao, dataprevisao, dataencerramento, id) {
    return atualizarManutencaoRepository(situacao, dataprevisao, dataencerramento, id);
}

module.exports = { cadastrarManutencao, buscarManutencoes, atualizarManutencao };