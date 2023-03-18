const { cadastrarUsuarioRepository, buscarUsuariosRepository } = require("../repositories/usuarioRepository");

async function cadastrarUsuario(usuario, senha, perfil) {
    if (!usuario || !senha || !perfil) {
        console.error(`Você precisa informar usuário, senha e perfil de acesso`)
    }
    return cadastrarUsuarioRepository(usuario, senha, perfil);
}

async function buscarUsuarios() {
    return buscarUsuariosRepository();
}

module.exports = { cadastrarUsuario, buscarUsuarios };