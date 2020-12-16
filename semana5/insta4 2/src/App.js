import React from 'react'
import './App.css'
import Post from './components/Post/Post'

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'v1cardoso'}
          fotoUsuario={'https://i.imgur.com/6LRgSwu.png'}
          fotoPost={'https://i.imgur.com/0wKcn8e.jpeg'}
        />
        <Post
          nomeUsuario={'_thalesmoura'}
          fotoUsuario={'https://i.imgur.com/XCgmZ1X.jpg'}
          fotoPost={'https://i.imgur.com/b9ipaWS.jpg'}
        />
        <Post
          nomeUsuario={'luangazoni'}
          fotoUsuario={'https://imgur.com/8UqAdqC.jpg'}
          fotoPost={'https://imgur.com/zo58UUn.jpg'}
        />
        <Post
          nomeUsuario={'mariahpadovan'}
          fotoUsuario={'https://imgur.com/NbpG69b.jpg'}
          fotoPost={'https://imgur.com/fQy1Pa9.jpg'}
        />
      </div>
    )
  }
}

export default App
