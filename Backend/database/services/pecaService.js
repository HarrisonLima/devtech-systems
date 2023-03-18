const { cadastrarPecaRepository, buscarPecasRepository } = require("../repositories/pecaRepository");

async function cadastrarPeca(nome, marca, descricao){
    if (!nome || !marca) {
        console.error(`Você precisa informar nome, marca e descrição`)
    }
    return cadastrarPecaRepository(nome, marca, descricao);
}

async function buscarPecas() {

    return buscarPecasRepository();
}

module.exports = { cadastrarPeca, buscarPecas };