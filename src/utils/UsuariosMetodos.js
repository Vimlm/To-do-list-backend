import DatabaseMetodos from "./DatabaseMetodos.js";

const USUARIOS = 'Usuarios';

class UsuariosMetodos extends DatabaseMetodos {
  static inserirUsuario(data) {
    this.inserir(USUARIOS, data);
  }

  static buscarTodosUsuarios() {
    return this.buscar(USUARIOS);
  }

  static buscarUsuarioId(id) {
    return this.buscarId(USUARIOS, id);
  }

  static deletarUsuarioId(id) {
    this.deletarId(USUARIOS, id)
  }
}

export default UsuariosMetodos