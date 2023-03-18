const { cadastrarVeiculopfRepository, buscarVeiculospfRepository } = require("../repositories/veiculopfRepository");

async function cadastrarVeiculopf(tipo, marca, anoFabricacao, cor, numeroPassageiro, modelo, renavam, fabricante, placa, nomeProprietario, cpf, cnh){
    if (!tipo || !marca || !anoFabricacao || !cor || !numeroPassageiro || !modelo || !renavam || !fabricante || !placa || !nomeProprietario || !cpf || !cnh) { 
        console.error(`Você precisa tipo, marca, anoFabricacao, cor, numeroPassageiro, modelo, renavam, fabricante, placa, nomeProprietario, cpf e cnh`)
    }
    
    return cadastrarVeiculopfRepository(tipo, marca, anoFabricacao, cor, numeroPassageiro, modelo, renavam, fabricante, placa, nomeProprietario, cpf, cnh);
}

async function buscarVeiculospf() {
    return buscarVeiculospfRepository();
}

module.exports = { cadastrarVeiculopf, buscarVeiculospf };