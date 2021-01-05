import React from 'react';
import styled from 'styled-components';

import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const Button = styled.button`
  margin: 1rem;
  padding: 0.7rem 1rem;
  background-color: tomato;
  color: white;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  text-transform: uppercase;
`;

class App extends React.Component {
  state = {
    etapaAtual: 1,
  };

  etapa1 = () => {
    this.setState({ etapaAtual: 1 });
  };
  etapa2 = () => {
    this.setState({ etapaAtual: 2 });
  };
  etapa3 = () => {
    this.setState({ etapaAtual: 3 });
  };
  etapaFinal = () => {
    this.setState({ etapaAtual: 4 });
  };

  mudaEtapa = () => {
    switch (this.state.etapaAtual) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <div>Essa etapa não existe.</div>;
    }
  };

  proximaEtapa = () => {
    console.log(this.state.etapaAtual);
    this.setState({ etapaAtual: this.state.etapaAtual + 1 });
  };

  render() {
    return (
      <Main>
        {this.mudaEtapa()}
        {this.state.etapaAtual < 4 ? (
          <Button onClick={this.proximaEtapa}>Próxima etapa</Button>
        ) : (
          'Obrigado por participar!'
        )}
      </Main>
    );
  }
}

export default App;
