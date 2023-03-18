const { cadastrarClientepfRepository, buscarClientespfRepository } = require("../repositories/clientepfRepository");

async function cadastrarClientepf(nome, cpf, genero, nascimento, estadocivil, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone){
    if (!nome || !cpf || !genero || !nascimento || !estadocivil || !cep || !numero || !complemento || !cidade || !uf || !logradouro || !email || !ddd || !telefone) {
        console.error(`Você precisa informar nome, cpf, genero, nascimento, estadocivil, cep, numero, complemento, cidade, uf, logradouro, email, ddd e telefone`)
    
    }
    return cadastrarClientepfRepository(nome, cpf, genero, nascimento, estadocivil, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone);
}

async function buscarClientespf() {

    return buscarClientespfRepository();
}

module.exports = { cadastrarClientepf, buscarClientespf };