const { cadastrarClientepjRepository, buscarClientespjRepository } = require("../repositories/clientepjRepository");

async function cadastrarClientepj(razaoSocial, nomeFantasia, cnpj, inscricaoEstadual, inscricaoMunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone){
    if (!razaoSocial || !nomeFantasia || !cnpj || !cep || !numero || !cidade || !uf || !logradouro || !email || !ddd || !telefone) {
        console.error(`Você precisa informar razaoSocial, nomeFantasia, cnpj, inscricaoEstadual, inscricaoMunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone`)
    }
    return cadastrarClientepjRepository(razaoSocial, nomeFantasia, cnpj, inscricaoEstadual, inscricaoMunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone);
}

async function buscarClientespj() {

    return buscarClientespjRepository();
}

module.exports = { cadastrarClientepj, buscarClientespj };