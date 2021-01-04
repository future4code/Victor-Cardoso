import React from 'react'

import './CardPequeno.css'

function CardPequeno(props) {
  return (
    <div className='smallcard-container'>
      <h3>Meus contatos</h3>
      <div>
        <p>Email: {props.email}</p>
        <p>Telefone: {props.telefone}</p>
        <p>{props.endereco}</p>
      </div>
    </div>
  )
}

export default CardPequeno
