const { cadastrarProdutoRepository, buscarProdutosRepository, atualizarProdutoRepository } = require("../repositories/produtoRepository");

async function cadastrarProduto(produto, un, valor, marca, descricao, estoque){
    if (!produto || !un || !valor || !marca) {
        console.error(`Você precisa informar produto, unidade de medida, valor, marca, descrição e estoque`)
    }
    return cadastrarProdutoRepository(produto, un, valor, marca, descricao, estoque);
}

async function buscarProdutos() {
    return buscarProdutosRepository();
}

async function atualizarProduto() {
    return atualizarProdutoRepository();
}

module.exports = { cadastrarProduto, buscarProdutos, atualizarProduto };