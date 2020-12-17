import React from 'react'
import './App.css'
import Post from './components/Post/Post'

class App extends React.Component {
  state = {
    posts: [
      {
        postId: 0,
        nomeUsuario: 'v1cardoso',
        fotoUsuario: 'https://i.imgur.com/6LRgSwu.png',
        fotoPost: 'https://i.imgur.com/0wKcn8e.jpeg'
      },
      {
        postId: 1,
        nomeUsuario: '_thalesmoura',
        fotoUsuario: 'https://i.imgur.com/XCgmZ1X.jpg',
        fotoPost: 'https://i.imgur.com/b9ipaWS.jpg'
      },
      {
        postId: 2,
        nomeUsuario: 'luangazoni',
        fotoUsuario: 'https://imgur.com/8UqAdqC.jpg',
        fotoPost: 'https://imgur.com/zo58UUn.jpg'
      },
      {
        postId: 3,
        nomeUsuario: 'mariahpadovan',
        fotoUsuario: 'https://imgur.com/NbpG69b.jpg',
        fotoPost: 'https://imgur.com/fQy1Pa9.jpg'
      },
      {
        postId: 4,
        nomeUsuario: 'italof.b',
        fotoUsuario: 'https://imgur.com/cS4vHD4.jpg',
        fotoPost: 'https://imgur.com/z1Y6tYK.jpg'
      }
    ]
  }
  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (post = (
        <Post
          key={post.postId}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      ))
    })

    return <div className={'app-container'}>{listaDePosts}</div>
  }
}

export default App
