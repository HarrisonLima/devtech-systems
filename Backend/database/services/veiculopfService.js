const { cadastrarVeiculopfRepository, buscarVeiculospfRepository } = require("../repositories/veiculopfRepository");

async function cadastrarVeiculopf(tipo, marca, anofabricacao, cor, numeropassageiro, modelo, renavam, fabricante, placa, nomeproprietario, cpf, cnh){
    if (!tipo || !marca || !anofabricacao || !cor || !numeropassageiro || !modelo || !renavam || !fabricante || !placa || !nomeproprietario || !cpf || !cnh) { 
        console.error(`Você precisa tipo, marca, anofabricacao, cor, numeropassageiro, modelo, renavam, fabricante, placa, nomeproprietario, cpf e cnh`)
    }
    
    return cadastrarVeiculopfRepository(tipo, marca, anofabricacao, cor, numeropassageiro, modelo, renavam, fabricante, placa, nomeproprietario, cpf, cnh);
}

async function buscarVeiculospf() {
    return buscarVeiculospfRepository();
}

module.exports = { cadastrarVeiculopf, buscarVeiculospf };