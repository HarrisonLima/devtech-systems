const { cadastrarClientepjRepository, buscarClientespjRepository } = require("../repositories/clientepjRepository");

async function cadastrarClientepj(razaosocial, nomefantasia, cnpj, cep, numero, cidade, uf, logradouro, email, telefone){
    if (!razaosocial || !nomefantasia || !cnpj || !cep || !numero || !cidade || !uf || !logradouro || !email || !telefone) {
        console.error(`Você precisa informar razaosocial, nomefantasia, cnpj, cep, numero, cidade, uf, logradouro, email, telefone`)
    }
    return cadastrarClientepjRepository(razaosocial, nomefantasia, cnpj, cep, numero, cidade, uf, logradouro, email, telefone);
}

async function buscarClientespj() {

    return buscarClientespjRepository();
}

module.exports = { cadastrarClientepj, buscarClientespj };