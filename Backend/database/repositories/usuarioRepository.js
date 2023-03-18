const db = require("../postgres");

async function cadastrarUsuarioRepository(usuario, senha, perfil) {
  try {
    const query =
      "INSERT INTO usuario (usuario, senha, perfil) VALUES($1, $2, $3) RETURNING *";
    const values = [usuario, senha, perfil];

    return db.query(query, values).then((res) => {
      return res.rows[0];
    }).catch( error => {
      console.log(error)
    })
  } catch (error) {
    console.log(error);
  }
}
async function buscarUsuariosRepository() {
  try {
    const query = "SELECT * FROM usuario";
    return db.query(query).then((res) => {
      return res.rows.map((usuario) => {
        return {
          id: usuario.id,
          usuario: usuario.usuario,
          perfil: usuario.perfil
        };
      });
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { cadastrarUsuarioRepository, buscarUsuariosRepository };
