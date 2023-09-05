import Database from "../database/Database.js";

class DatabaseMetodos {
  static inserir(entidade, data){
    Database[entidade].push(data)
  }

  static buscar(entidade) {
    return Database[entidade]
  }

  static buscarId(entidade, id) {
    return Database[entidade][id]
  }

  static deletarId(entidade, id) {
    Database[entidade].splice(id, 1)
  }
}

export default DatabaseMetodos