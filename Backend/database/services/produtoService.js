const { cadastrarProdutoRepository, buscarProdutosRepository } = require("../repositories/produtoRepository");

async function cadastrarProduto(produto, un, marca, descricao){
    if (!produto || !un || !marca ) {
        console.error(`Você precisa informar produto, unidade de medida, marca e descrição`)
    }
    return cadastrarProdutoRepository(produto, un, marca, descricao);
}

async function buscarProdutos() {

    return buscarProdutosRepository();
}

module.exports = { cadastrarProduto, buscarProdutos };