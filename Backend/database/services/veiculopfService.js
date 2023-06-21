const { cadastrarVeiculopfRepository, buscarVeiculospfRepository } = require("../repositories/veiculopfRepository");

async function cadastrarVeiculopf(tipo, marca, anofabricacao, cor, numeropassageiro, modelo, renavam, fabricante, placa, nomeproprietario, cpf){
    if (!tipo || !marca || !anofabricacao || !cor || !numeropassageiro || !modelo || !renavam || !fabricante || !placa || !nomeproprietario || !cpf || !cnh) { 
        console.error(`Você precisa tipo, marca, anofabricacao, cor, numeropassageiro, fabricante, placa, nomeproprietario e cpf`)
    }
    
    return cadastrarVeiculopfRepository(tipo, marca, anofabricacao, cor, numeropassageiro, modelo, renavam, fabricante, placa, nomeproprietario, cpf);
}

async function buscarVeiculospf() {
    return buscarVeiculospfRepository();
}

module.exports = { cadastrarVeiculopf, buscarVeiculospf };