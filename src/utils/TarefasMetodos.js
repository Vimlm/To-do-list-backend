import DatabaseMetodos from "./DatabaseMetodos";

const TAREFA = 'Tarefa';

class TarefaMetodos extends DatabaseMetodos {
  static inserirTarefa(data) {
    this.inserir(TAREFA, data)
  }

  static buscarTarefa() {
    return this.buscar(TAREFA)
  }
}

export default TarefaMetodos