import './App.css'
import userImg from './images/img-test.png'

function App() {
  const titulo = 'Título do vídeo'
  const canal = 'Canal do vídeo'
  const reproduzVideo = () => {
    alert('O vídeo está sendo reproduzido')
  }
  return (
    <body>
      <div className='tela-inteira'>
        <header>
          <h1>Lab Tube</h1>
          <input type='text' placeholder='Busca' id='campoDeBusca' />
          <div className='rightNavbar'>
            <button>Criar</button>
            <button>Apps</button>
            <button>Notificações</button>
            <button>Perfil</button>
          </div>
        </header>

        <main>
          <nav className='menu-vertical'>
            <ul>
              <li className='botoes-meunu-vertical'>Início</li>
              <li className='botoes-meunu-vertical'>Em alta</li>
              <li className='botoes-meunu-vertical'>Inscrições</li>
              <hr />
              <li className='botoes-meunu-vertical'>Originais</li>
              <li className='botoes-meunu-vertical'>Histórico</li>
            </ul>
          </nav>

          <section className='painel-de-videos'>
            <div
              className='box-pagina-principal media1'
              onClick={reproduzVideo}
            >
              <img src='https://picsum.photos/400/400?a=1 ' alt='' />
              <div className='subtitle'>
                <img className='userImg' src={userImg} alt='' />
                <div className='subtitleText'>
                  <h4>{titulo}</h4>
                  <p className='channel'>{canal}</p>
                  <p className='channel'>346 mil visualizações</p>
                </div>
              </div>
            </div>
            <div
              className='box-pagina-principal media2'
              onClick={reproduzVideo}
            >
              <img src='https://picsum.photos/400/400?a=2 ' alt='' />
              <div className='subtitle'>
                <img className='userImg' src={userImg} alt='' />
                <div className='subtitleText'>
                  <h4>{titulo}</h4>
                  <p className='channel'>{canal}</p>
                  <p className='channel'>346 mil visualizações</p>
                </div>
              </div>
            </div>
            <div
              className='box-pagina-principal media3'
              onClick={reproduzVideo}
            >
              <img src='https://picsum.photos/400/400?a=3 ' alt='' />
              <div className='subtitle'>
                <img className='userImg' src={userImg} alt='' />
                <div className='subtitleText'>
                  <h4>{titulo}</h4>
                  <p className='channel'>{canal}</p>
                  <p className='channel'>346 mil visualizações</p>
                </div>
              </div>
            </div>
            <div
              className='box-pagina-principal media4'
              onClick={reproduzVideo}
            >
              <img src='https://picsum.photos/400/400?a=4 ' alt='' />
              <div className='subtitle'>
                <img className='userImg' src={userImg} alt='' />
                <div className='subtitleText'>
                  <h4>{titulo}</h4>
                  <p className='channel'>{canal}</p>
                  <p className='channel'>346 mil visualizações</p>
                </div>
              </div>
            </div>
            <div
              className='box-pagina-principal media5'
              onClick={reproduzVideo}
            >
              <img src='https://picsum.photos/400/400?a=5 ' alt='' />
              <div className='subtitle'>
                <img className='userImg' src={userImg} alt='' />
                <div className='subtitleText'>
                  <h4>{titulo}</h4>
                  <p className='channel'>{canal}</p>
                  <p className='channel'>346 mil visualizações</p>
                </div>
              </div>
            </div>
            <div
              className='box-pagina-principal media6'
              onClick={reproduzVideo}
            >
              <img src='https://picsum.photos/400/400?a=6 ' alt='' />
              <div className='subtitle'>
                <img className='userImg' src={userImg} alt='' />
                <div className='subtitleText'>
                  <h4>{titulo}</h4>
                  <p className='channel'>{canal}</p>
                  <p className='channel'>346 mil visualizações</p>
                </div>
              </div>
            </div>
            <div
              className='box-pagina-principal media7'
              onClick={reproduzVideo}
            >
              <img src='https://picsum.photos/400/400?a=7 ' alt='' />
              <div className='subtitle'>
                <img className='userImg' src={userImg} alt='' />
                <div className='subtitleText'>
                  <h4>{titulo}</h4>
                  <p className='channel'>{canal}</p>
                  <p className='channel'>346 mil visualizações</p>
                </div>
              </div>
            </div>
            <div
              className='box-pagina-principal media8'
              onClick={reproduzVideo}
            >
              <img src='https://picsum.photos/400/400?a=8 ' alt='' />
              <div className='subtitle'>
                <img className='userImg' src={userImg} alt='' />
                <div className='subtitleText'>
                  <h4>{titulo}</h4>
                  <p className='channel'>{canal}</p>
                  <p className='channel'>346 mil visualizações</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <h4>Youtube não tem footer :D</h4>
        </footer>
      </div>
    </body>
  )
}

export default App
