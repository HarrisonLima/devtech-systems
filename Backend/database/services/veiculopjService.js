const { cadastrarVeiculopjRepository, buscarVeiculospjRepository} = require("../repositories/veiculopjRepository");

async function cadastrarVeiculopj(tipo, marca, anoFabricacao, cor, numeroPassageiro, modelo, renavam, fabricante, placa, nomeProprietario, cnpj){
    if (!tipo || !marca || !anoFabricacao || !cor || !numeroPassageiro || !modelo || !renavam || !fabricante || !placa || !nomeProprietario || !cnpj) {
        console.error(`Você precisa tipo, marca, anoFabricacao, cor, numeroPassageiro, modelo, renavam, fabricante, placa, nomeProprietario e cnpj`)
    }
    return cadastrarVeiculopjRepository(tipo, marca, anoFabricacao, cor, numeroPassageiro, modelo, renavam, fabricante, placa, nomeProprietario, cnpj);
}

async function buscarVeiculospj() {
    return buscarVeiculospjRepository();
}

module.exports = { cadastrarVeiculopj, buscarVeiculospj };