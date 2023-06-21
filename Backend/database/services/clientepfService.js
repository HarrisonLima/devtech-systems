const { cadastrarClientepfRepository, buscarClientespfRepository } = require("../repositories/clientepfRepository");

async function cadastrarClientepf(nome, cpf, cep, numero, cidade, uf, logradouro, email, telefone){
    if (!nome || !cpf ||  !cep || !numero || !cidade || !uf || !logradouro || !email || !telefone) {
        console.error(`Você precisa informar nome, cpf, cep, numero, cidade, uf, logradouro, email e telefone`)
    
    }
    return cadastrarClientepfRepository(nome, cpf, cep, numero, cidade, uf, logradouro, email, telefone);
}

async function buscarClientespf() {

    return buscarClientespfRepository();
}

module.exports = { cadastrarClientepf, buscarClientespf };