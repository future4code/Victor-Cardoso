import React from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends React.Component {
  state = {
    textoInput: ''
  }

  onChangeComentario = (event) => {
    this.setState({
      textoInput: event.target.value
    })
  }

  aoEnviar = () => {
    this.setState({
      textoInput: ''
    })
    console.log(this.state.textoInput)
  }

  render() {
    return (
      <div className={'comment-container'}>
        <input
          className={'input-comentario'}
          placeholder={'Comentário'}
          onChange={this.onChangeComentario}
          value={this.state.textoInput}
        />
        <button className={'comment-button'} onClick={this.aoEnviar}>
          Enviar
        </button>
      </div>
    )
  }
}
