### Aula 50 - Introdução a Autenticação

## Exercício 1
* a. Round é a mesma coisa que o Salt, uma string gerada e incrementada pelo Cost para preencher parte do hash criado, que demanda processamento baseado no número delimitado pelo Cost.
O valor recomendado para cost é 12.
O valor utilizado foi 12.
pois gera um hash de tamanho seguro porém não demanda tanto processamento por ser um número relativamente baixo.

## Exercício 2
* a. Primeiro o cadastro, após o cadastro funcionar e criar uma senha com hash o login pode ser testado, pois no login é necessário uma senha com hash já cadastrada no banco de dados.