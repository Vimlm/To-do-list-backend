import UsuariosMetodos from '../utils/UsuariosMetodos.js'
import UsuariosModel from '../model/UsuarioModel.js'
import ValidacaoServices from '../service/ValidadacaoServices.js';
import DatabaseMetodos from '../utils/DatabaseMetodos.js';

class UsuariosController {
  /**
   * 
   * @param { Express } app 
   */
  static rotas(app) {
    app.get('/usuarios', async (req, res) => {
      const usuarios = await UsuariosMetodos.buscarTodosUsuarios();
      res.status(200).json(usuarios)
    });

    app.get('/usuarios/:id', async (req, res) => {
      const id = req.params.id
      const isValid = ValidacaoServices.validarExistencia(id)

      if(isValid) {
        const resposta = await UsuariosMetodos.buscarUsuarioId(id)
        res.status(200).json(resposta)
      }
      res.status(404).json({
        message: `O usuário ${id} não foi encontrado.`
      })
    });

    app.post('/usuarios', async (req, res) => {
      const body = Object.values(req.body);
      const usuarioModelado = new UsuariosModel(...body);
      const validaUsuario = ValidacaoServices.validaCamposUsuarios(...body)
      if(validaUsuario) {
        try {
          await UsuariosMetodos.inserirUsuario(usuarioModelado);
          res.status(201).json({
            error: false,
            message: "Usuario inserido com sucesso."
          })
        } catch (error) {
          res.status(503).json({
            error: true,
            message: `Servidor indisponível no momento.`
          })
        }
      } else {
        res.status(404).json({
          error: true,
          message: `Não foi possível acessar o servidor.`
        })
      }
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
          message:  `O usuário ${id} não foi encontrado`
        })
    });

    app.put('/usuarios/:id', (req, res) => {
      const id = req.params.id
      const isValid = ValidacaoServices.validarExistencia(id)

      if(isValid) {
        const body = Object.values(req.body)
        const usuarioModelado = new UsuariosModel(...body)
        const validaUsuario = ValidacaoServices.validaCamposUsuarios(...body)
        if(validaUsuario) {
          UsuariosMetodos.atualizarUsuarioId(id, usuarioModelado);

          res.status(204).json()
        }

        res.status(400).json({
          message: `Campos inválidos.`
        })
      }
      
      res.status(404).json({
        message: `O usuário ${id} não foi encontrado`
      })

    })
  }
}

export default UsuariosController;