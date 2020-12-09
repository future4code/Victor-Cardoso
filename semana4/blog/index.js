const tituloInput = document.getElementById('titulo-post')
const autorInput = document.getElementById('autor-post')
const conteudoInput = document.getElementById('conteudo-post')

getAllInputs = () => {
  console.log(tituloInput)
  console.log(autorInput)
  console.log(conteudoInput)
}

const post = {
  titulo: '',
  autor: '',
  conteudo: ''
}
let posts = Array()

addPostToArray = () => {
  let tituloValue = tituloInput.value
  let autorValue = autorInput.value
  let conteudoValue = conteudoInput.value
  let postsDiv = document.getElementById('posts')

  post.titulo = tituloValue
  post.autor = autorValue
  post.conteudo = conteudoValue

  console.log(post)

  postsDiv.innerHTML += `<div class="post"> <h3>Título: ${post.titulo}</h3> <br /> <h4>Autor: ${post.autor}</h4> <br /> <p>Conteúdo: ${post.conteudo}</p> <br /></div>`
  posts.push(post)

  console.log(posts)

  resetInputs()
}

resetInputs = () => {
  tituloInput.value = ''
  autorInput.value = ''
  conteudoInput.value = ''
}
