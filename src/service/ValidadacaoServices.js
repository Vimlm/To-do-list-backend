import UsuariosMetodos from "../utils/UsuariosMetodos.js";

class ValidacaoServices {
  static validarExistencia(id) {
    return !!UsuariosMetodos.buscarUsuarioId(id)
  }

  static validaNome(nome) {
    return typeof nome == 'string' && nome.length > 2
  }

  static validaEmail(email) {
    return typeof email == 'string' && email.length > 2
  }

  static validaTelefone(telefone) {
    const telefoneInt = parseInt(telefone)
    return typeof telefone == 'string' && telefone.length == 11 && telefone == telefoneInt
  }

  static validaCamposUsuarios(nome, email, telefone) {
    return this.validaNome(nome) && this.validaEmail(email) && this.validaTelefone(telefone)
  }
}

export default ValidacaoServices