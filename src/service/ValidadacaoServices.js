import UsuariosMetodos from "../utils/UsuariosMetodos.js";

class ValidacaoServices {
  static validarExistencia(id) {
    return !!UsuariosMetodos.buscarUsuarioId(id)
  }
}

export default ValidacaoServices