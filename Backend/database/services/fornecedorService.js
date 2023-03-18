const { cadastrarFornecedorRepository, buscarFornecedoresRepository } = require("../repositories/fornecedorRepository");

async function cadastrarFornecedor(razaoSocial, nomeFantasia, cnpj, inscricaoEstadual, inscricaoMunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone){
    if (!razaoSocial || !nomeFantasia || !cnpj || !cep || !numero || !cidade || !uf || !logradouro || !email || !ddd || !telefone) {
        console.error(`Você precisa informar razaoSocial, nomeFantasia, cnpj, inscricaoEstadual, inscricaoMunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone`)
    }
    return cadastrarFornecedorRepository(razaoSocial, nomeFantasia, cnpj, inscricaoEstadual, inscricaoMunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone);
}

async function buscarFornecedores() {

    return buscarFornecedoresRepository();
}

module.exports = { cadastrarFornecedor, buscarFornecedores };