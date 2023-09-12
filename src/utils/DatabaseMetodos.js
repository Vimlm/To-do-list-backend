import Database from "../database/Database.js";

class DatabaseMetodos {
  /**
   * Inseri registro em entidade
   * @param {string} query 
   * @param {Array<any>} data 
   */
  static inserir(query, data){
    return new Promise((resolve, reject) => {
      Database.run(query, ...data, (error) => {
        if(error) {
          console.log(error)
          reject(error)
        }
        resolve({
          error: false
        })
      })
    })
  }

  /**
   * Busca todos os registros da entidade
   * @param {string} entidade 
   * @returns {any}
   */
  static buscar(entidade) {
    const query = `
      SELECT * FROM ${entidade};
    `
    return new Promise((resolve, reject) => {
      Database.all(query, (error, rows) => {
        if(error) {
          reject(error)
        }
        resolve(rows)
      })
    })
  }

  /**
   * Busca um registro através de um identificador
   * @param {string} entidade 
   * @param {string} id 
   * @returns {any}
   */
  static buscarId(entidade, id) {
    return Database[entidade][id]
  }

  /**
   * Deleta um registro através de um identificador
   * @param {string} entidade 
   * @param {string} id 
   */
  static deletarId(entidade, id) {
    Database[entidade].splice(id, 1)
  }

  /**
   * Atualizar um registro especifico através de um identificador
   * @param {string} entidade 
   * @param {string} id 
   * @param {any} data 
   */
  static atualizarId(entidade, id, data) {
    Database[entidade][id] = data
  }
}

export default DatabaseMetodos