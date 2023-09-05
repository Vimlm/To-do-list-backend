import express from 'express';
import UsuariosController from './controller/UsuariosController.js';

const app = express();
const port = process.env.PORT | 8888;

app.listen(port, () => {
  console.log(`Servidor rodando no http://localhost${port}`);
});

app.use(express.json())

UsuariosController.rotas(app);