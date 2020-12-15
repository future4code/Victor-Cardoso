import React from 'react'
import './App.css'
import CardGrande from './components/CardGrande/CardGrande'
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton'

function App() {
  return (
    <div className='App'>
      <div className='page-section-container'>
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem='https://i.imgur.com/6LRgSwu.png'
          nome='Astrodev'
          descricao='Oi, eu sou o Victor! Sou curioso por natureza, detalhista e pragmático, tenho grande interesse no comportamento humano e didática de aprendizado.'
        />

        <CardPequeno
          email='cpt.victor@hotmail.com'
          telefone='(11) 94700-6135'
          endereco='Mogi das Cruzes - SP'
        />
        <a href='https://www.linkedin.com/in/victorcardosopudotorres/'>
          <ImagemButton
            imagem='https://image.flaticon.com/icons/png/512/117/117472.png'
            texto='Linkedin'
          />
        </a>
      </div>

      <div className='page-section-container'>
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem='https://streamersky-api.azurewebsites.net/resources/clients/11/Partners/6/logo-mb.png'
          nome='MandeBem no Excel'
          descricao='Criação de componentes e páginas da seção admin da plataforma EAD.'
        />
        <CardGrande
          imagem='https://i.imgur.com/TC22k2j.jpg'
          nome='Cleo Cardoso Atelier'
          descricao='Criação de landing page para atelier de vestidos de noiva e visagismo.'
        />
      </div>

      <div className='page-section-container'>
        <h2>Minhas redes sociais</h2>
        <a href='https://www.facebook.com/victor.cardosopudotorres'>
          <ImagemButton
            imagem='https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png'
            texto='Facebook'
          />
        </a>

        <a href='http://'>
          <ImagemButton
            imagem='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png'
            texto='Twitter'
          />
        </a>
      </div>
    </div>
  )
}

export default App
