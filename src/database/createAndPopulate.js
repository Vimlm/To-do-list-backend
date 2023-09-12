import Database from "./Database.js";

const USUARIO_TABLE = `
CREATE TABLE IF NOT EXISTS "USUARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "TELEFONE" varchar(11)
  );
`

const ADD_USUARIOS_DATA = `
INSERT INTO USUARIOS (NOME, EMAIL, TELEFONE)
VALUES 
    ('Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '2140028911'),
    ('Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '1140028922'),
    ('Mirtes Faria Lima', 'mirtes_fl@yahoo.com', '3125214430')
`

function criaTabelaUsr() {
    Database.run(USUARIO_TABLE, (error)=> {
       if (error) {
            console.log("Erro ao criar tabela de Usuários")
        } else {
            console.log("Tabela Usuários criada com sucesso!")
        }
    });
}


function populaTabelaUsr() {
    Database.run(ADD_USUARIOS_DATA, (error)=> {
       if (error) {
        console.log("Erro ao popular tabela de Usuários")
        }
        else {
            console.log("Tabela Usuários populada com sucesso!")
        }
    });
}


Database.serialize(()=>{
    criaTabelaUsr();
    populaTabelaUsr();
})