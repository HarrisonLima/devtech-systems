const { cadastrarProdutoRepository, buscarProdutosRepository, atualizarProdutoRepository } = require("../repositories/produtoRepository");

async function cadastrarProduto(produto, un, marca, descricao, estoque){
    if (!produto || !un || !marca) {
        console.error(`Você precisa informar produto, unidade de medida, marca, descrição e estoque`)
    }
    return cadastrarProdutoRepository(produto, un, marca, descricao, estoque);
}

async function buscarProdutos() {

    return buscarProdutosRepository();
}

async function atualizarProdutos() {

    return atualizarProdutoRepository();
}

module.exports = { cadastrarProduto, buscarProdutos, atualizarProdutos };