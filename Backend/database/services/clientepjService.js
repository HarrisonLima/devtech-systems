const { cadastrarClientepjRepository, buscarClientespjRepository } = require("../repositories/clientepjRepository");

async function cadastrarClientepj(razaosocial, nomefantasia, cnpj, inscricaoestadual, inscricaomunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone){
    if (!razaosocial || !nomefantasia || !cnpj || !cep || !numero || !cidade || !uf || !logradouro || !email || !ddd || !telefone) {
        console.error(`Você precisa informar razaosocial, nomefantasia, cnpj, inscricaoestadual, inscricaomunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone`)
    }
    return cadastrarClientepjRepository(razaosocial, nomefantasia, cnpj, inscricaoestadual, inscricaomunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone);
}

async function buscarClientespj() {

    return buscarClientespjRepository();
}

module.exports = { cadastrarClientepj, buscarClientespj };