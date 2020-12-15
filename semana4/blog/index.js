const postsDiv = document.getElementById('posts')

let posts = []

function addPostToArray() {
  // Passando valor do input pra variavel
  let tituloInput = document.getElementById('titulo-post')
  let autorInput = document.getElementById('autor-post')
  let conteudoInput = document.getElementById('conteudo-post')

  let novoPost = {
    titulo: tituloInput.value,
    autor: autorInput.value,
    conteudo: conteudoInput.value
  }

  // console.log('Post criado: ', novoPost)
  // console.log('Posts Array: ', posts)

  // push no array
  posts.push(novoPost)

  // criação da article na div
  postsDiv.innerHTML += `<article class="post">
  <p>Título: ${novoPost.titulo}</p>
  <br />
  <p>Autor: ${novoPost.autor}</p>
  <br />
  <p>Conteúdo: ${novoPost.conteudo}</p>
  <br />
  </article>`

  resetInputs()
}

// console.log(posts)

resetInputs = () => {
  document.getElementById('titulo-post').value = ''
  document.getElementById('autor-post').value = ''
  document.getElementById('conteudo-post').value = ''
}
