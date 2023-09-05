import UsuariosMetodos from '../utils/UsuariosMetodos.js'
import UsuariosModel from '../model/UsuarioModel.js'
import ValidacaoServices from '../service/ValidadacaoServices.js';

class UsuariosController {
  /**
   * 
   * @param { Express } app 
   */
  static rotas(app) {
    const usuarios = UsuariosMetodos.buscarTodosUsuarios();

    app.get('/usuarios', (req, res) => {
      res.status(200).json(usuarios)
    });

    app.get('/usuarios/:id', (req, res) => {
      const id = req.params.id
      const isValid = ValidacaoServices.validarExistencia(id)

      if(isValid) {
        const resposta = UsuariosMetodos.buscarUsuarioId(id)
        res.status(200).json(resposta)
      }
      res.status(404).json({
        message: `O usuário ${id} não foi encontrado.`
      })
    });

    app.post('/usuarios', (req, res) => {
      const body = Object.values(req.body);
      const usuarioModelado = new UsuariosModel(...body);
      UsuariosMetodos.inserirUsuario(usuarioModelado);
      res.status(200).json({
        error: false,
        message: "Usuario inserido com sucesso."
      })
    })

    app.delete('/usuarios/:id', (req, res) => {
      const id = req.params.id
      const isValid = ValidacaoServices.validarExistencia(id)

      if(isValid) {
        UsuariosMetodos.deletarUsuarioId(id)
        res.status(200).json({
          message: `O usuário ${id} foi removido com sucesso`
        })
      } 

      res.status(404).json({
          message: "Usuario não encontrado"
        })
    });
  }
}

export default UsuariosController;