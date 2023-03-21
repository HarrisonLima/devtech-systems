const { cadastrarFornecedorRepository, buscarFornecedoresRepository } = require("../repositories/fornecedorRepository");

async function cadastrarFornecedor(razaosocial, nomefantasia, cnpj, inscricaoestadual, inscricaomunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone){
    if (!razaosocial || !nomefantasia || !cnpj || !cep || !numero || !cidade || !uf || !logradouro || !email || !ddd || !telefone) {
        console.error(`Você precisa informar razaosocial, nomefantasia, cnpj, inscricaoestadual, inscricaomunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone`)
    }
    return cadastrarFornecedorRepository(razaosocial, nomefantasia, cnpj, inscricaoestadual, inscricaomunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone);
}

async function buscarFornecedores() {

    return buscarFornecedoresRepository();
}

module.exports = { cadastrarFornecedor, buscarFornecedores };