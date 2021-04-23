### Exercício 3
## c.
A diferença entre as duas implementações está na execução da função validateCharacter, que agora acontece externamente à função performAttack. Isso cria a possibilidade de que de que a função de validação seja alterada, sem que a função performAttack deixe de funcionar.

### Exercício 4
## a.
Devemos criar um mock da função performAttack, pois ela é a função que realiza uma ação com os dados e modifica-os, a função validateCharacter deve apenas ser chamada como dependência nos argumentos de performAttack para os casos de sucesso e falha.