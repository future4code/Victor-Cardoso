// a. fazer o objeto scripts com o comando npm run build no arquivo package.json e rodar o script no terminal
// "scripts": {
//   "build": "tsc",
//   "arquivo": "npm run build && node ./build/arquivo"
// }

// b. sim, o processo seria diferente devido ao caminho do arquivo rodado pelo script no package.json, mudaria de ./arquivo para ./build/arquivo.js

// c. é necessário apenas colocar o endereço da pasta onde os arquivos se encontram, ou colocar todos os nomes separados por espaço no script com npm run build

// d. o que muda é alguns objetos opcionais que escolhemos no tsconfig enviado por vocês, os objetos outDir pra redirecionar as saídas, rootDir pra especificar o diretório raiz de entrada, removeComments pra tirar os comentários na saída e noImplicitAny para dar um erro quando não declaramos nenhum tipo.