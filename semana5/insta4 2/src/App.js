import React from 'react'
import Post from './components/Post/Post'
import styled from 'styled-components'

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

  addPost = () => {
    const novoPost = {
      postId: this.state.valorPostId,
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novoPosts = [...this.state.posts, novoPost]

    this.setState({ posts: novoPosts })
  }

  onChangeInputPost = (event) => {
    this.setState({ valorInputNome: event.target.value })
  }
  onChangevalorInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }
  onChangevalorInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }
  onChangeValorInputPostId = (event) => {
    this.setState({ valorInputPostId: event.target.value })
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

    const AppContainer = styled.main`
      display: flex;
      width: 100vw;
      margin: 2rem 0;
    `

    const ListaDePosts = styled.section`
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 65vw;
    `

    const AddPostForm = styled.aside`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 35vw;
    `

    const Input = styled.input`
      margin: 0.5rem 0;
      padding: 0.5rem;
      border-radius: 5px;
      border: 1px solid #adadad;
    `

    const Button = styled.button`
      background-color: #1e1e1e;
      color: #e1e1e1;
      border: none;
      border-radius: 5px;
      padding: 0.5rem;
      align-self: flex-start;
    `

    return (
      <AppContainer>
        <ListaDePosts>{listaDePosts}</ListaDePosts>
        <AddPostForm>
          <h1>Criar Post</h1>
          <label htmlFor='postId'>Post Id:</label>
          <Input
            type='number'
            value={this.state.valorInputPostId}
            onChange={this.onChangeValorInputPostId}
            placeholder='Id deve ser maior que 4'
          />
          <label htmlFor='nome'>Nome: </label>
          <Input
            type='text'
            value={this.state.valorInputNome}
            onChange={this.onChangeInputPost}
            placeholder='Seu nome'
          />
          <label htmlFor='fotoUsuario'>Foto do usuário: </label>
          <Input
            type='text'
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangevalorInputFotoUsuario}
            placeholder='Link da foto de usuário'
          />
          <label htmlFor='fotoPost'>Foto do post: </label>
          <Input
            type='text'
            value={this.state.valorInputFotoPost}
            onChange={this.onChangevalorInputFotoPost}
            placeholder='Link da foto do post'
          />
          <Button onClick={this.addPost}>Criar post</Button>
        </AddPostForm>
      </AppContainer>
    )
  }
}

export default App
