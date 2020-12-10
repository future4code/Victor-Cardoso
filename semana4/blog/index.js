const tituloInput = document.getElementById('titulo-post')
const autorInput = document.getElementById('autor-post')
const conteudoInput = document.getElementById('conteudo-post')
const postsDiv = document.getElementById('posts')

const post = {
  titulo: '',
  autor: '',
  conteudo: ''
}

let posts = []

function addPostToArray() {
  // Passando valor do input pra variavel
  let tituloValue = tituloInput.value
  let autorValue = autorInput.value
  let conteudoValue = conteudoInput.value

  // Valor da variavel para os campos do objeto
  post.titulo = tituloValue
  post.autor = autorValue
  post.conteudo = conteudoValue

  console.log('Post criado: ', post)
  console.log('Posts Array: ', posts)

  // criação da article na div
  postsDiv.innerHTML += `<article class="post">
  <p>Título: ${post.titulo}</p>
  <br />
  <p>Autor: ${post.autor}</p>
  <br />
  <p>Conteúdo: ${post.conteudo}</p>
  <br />
  </article>`

  // push no array
  posts.push(post)

  resetInputs()
}

// console.log(posts)

resetInputs = () => {
  tituloInput.value = ''
  autorInput.value = ''
  conteudoInput.value = ''
}
