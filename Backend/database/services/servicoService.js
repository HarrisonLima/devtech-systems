const { cadastrarServicoRepository, buscarServicosRepository } = require("../repositories/servicoRepository");

async function cadastrarServico(servico, valor, descricao){
    if (!servico || !valor) {
        console.error(`Você precisa informar servico, valor e descricao`)
    }
    return cadastrarServicoRepository(servico, valor, descricao);
}

async function buscarServicos() {

    return buscarServicosRepository();
}

module.exports = { cadastrarServico, buscarServicos };