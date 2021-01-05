import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
  cursor: pointer;
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: '',
  };

  componentDidUpdate() {
    const tarefas = this.state.tarefas;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  componentDidMount() {
    const tarefa = localStorage.getItem('tarefa');
    const tarefas = localStorage.getItem('tarefas');
    const novaTarefa = JSON.parse(tarefa);
    const novaListaTarefas = JSON.parse(tarefas);

    if (novaTarefa) {
      this.setState({
        id: novaTarefa.id,
        texto: novaTarefa.texto,
        completa: novaTarefa.completa,
      });
    }
    this.setState({ tarefas: novaListaTarefas });
  }

  onChangeTodo = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criarTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    const novaListaTarefas = [novaTarefa, ...this.state.tarefas];

    this.setState({ tarefas: novaListaTarefas });

    this.setState({ inputValue: '' });
  };

  selectTarefa = (id) => {
    const filterTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa,
        };
        return novaTarefa;
      } else {
        return tarefa;
      }
    });

    this.setState({ tarefas: filterTarefas });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa;
        case 'completas':
          return tarefa.completa;
        default:
          return false;
      }
    });

    return (
      <Main>
        <h1>Todo Labenu</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeTodo} />
          <button onClick={this.criarTarefa}>Criar Tarefa</button>
        </InputsContainer>

        <InputsContainer>
          <label>Filtrar Todo</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>

        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
                <button></button>
              </Tarefa>
            );
          })}
        </TarefaList>
      </Main>
    );
  }
}

export default App;
