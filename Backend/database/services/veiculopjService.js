const { cadastrarVeiculopjRepository, buscarVeiculospjRepository} = require("../repositories/veiculopjRepository");

async function cadastrarVeiculopj(tipo, marca, anofabricacao, cor, numeropassageiro, modelo, renavam, fabricante, placa, nomeproprietario, cnpj){
    if (!tipo || !marca || !anofabricacao || !cor || !numeropassageiro || !modelo || !renavam || !fabricante || !placa || !nomeproprietario || !cnpj) {
        console.error(`Você precisa tipo, marca, anofabricacao, cor, numeropassageiro, modelo, renavam, fabricante, placa, nomeproprietario e cnpj`)
    }
    return cadastrarVeiculopjRepository(tipo, marca, anofabricacao, cor, numeropassageiro, modelo, renavam, fabricante, placa, nomeproprietario, cnpj);
}

async function buscarVeiculospj() {
    return buscarVeiculospjRepository();
}

module.exports = { cadastrarVeiculopj, buscarVeiculospj };