import DatabaseMetodos from "./DatabaseMetodos.js";

const USUARIOS = 'USUARIOS';

class UsuariosMetodos extends DatabaseMetodos {
  /**
   * Insere um novo usuário
   * @param {string} data 
   */
  static async inserirUsuario(data) {
    const dataValues = Object.values(data)
    const query = `
      INSERT INTO USUARIOS (NOME, EMAIL, TELEFONE)
      VALUES (?, ?, ?);
    `
    const result = await this.inserir(query, dataValues);
    return result
  }

  /**
   * Busca usuários
   * @returns {UsuariosModel}
   */
  static async buscarTodosUsuarios() {
    return await this.buscar(USUARIOS);
  }

  /**
   * 
   * @param {string} id 
   * @returns {UsuariosModel}
   */
  static buscarUsuarioId(id) {
    return this.buscarId(USUARIOS, id);
  }

  /**
   * 
   * @param {string} id 
   */
  static deletarUsuarioId(id) {
    this.deletarId(USUARIOS, id)
  }

  /**
   * 
   * @param {string} id 
   * @param {any} data 
   */
  static atualizarUsuarioId(id, data) {
    this.atualizarId(USUARIOS, id, data)
  }
}

export default UsuariosMetodos