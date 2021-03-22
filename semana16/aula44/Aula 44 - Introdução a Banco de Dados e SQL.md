# Aula 44 - Introdução a Banco de Dados e SQL

## Exercício 1
### a.
* ```VARCHAR(255)``` é utilizado para determinar um campo de texto de até 255 caracteres numa variável.
* ```DATE``` é utilizado para determinar um campo de texto com data no formato YYYY/MM/DD.
* ```PRIMARY KEY``` é utilizado para determinar que o campo ID é uma chave primária relacionada à >linha< de cada dado da tabela.
* ```NOT NULL``` é utilizado para determinar que o campo NÃO pode ser nulo.

### b.
* ```SHOW databases``` é o comando utilizado para listar todos os bancos de dados que existem criados no computador.
* ```SHOW tables``` é o comando utilizado para listar todas as tabelas do banco de dados acessado no momento.

### c.
* ```DESCRIBE Actor``` é utilizado para listar todos os campos de uma tabela específica do database.

## Exercício 2
### b.
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' - Significa que não é possível adicionar dois campos com a mesma chave primária.
### c.
Error Code: 1136. Column count doesn't match value count at row - Significa que não é possível adicionar um número de colunas maior/menor do que é determinado na criação da tabela.
### d.
Error Code: 1364. Field 'name' doesn't have a default value - Significa que o campo nome não recebeu um valor padrão.
### e.
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 - Significa que o campo birth date não foi escrito entre aspas no comando INSERT INTO.
### f.
Foram criados os atores Christoph Waltz Amanda Seyfried.

## Exercício 3
### a.
```
SELECT * FROM Actor WHERE gender="female";
```
### b.
```
SELECT * FROM Actor WHERE name="Tony Ramos";
```
### c.
```
SELECT * FROM Actor WHERE salary <= 500000;
```
0 row(s) returned - A query retorna vazio pois não existe um ator/atriz cadastrado com gender "invalid".
### d.
Error Code: 1054. Unknown column 'nome' in 'field list' - O erro acontece pois não existe um campo "nome", e sim "name" (em inglês).
### e.
```
SELECT id, name from Actor WHERE id = "002";
```
A query retorna a atriz com id e nome pelo parâmetro id = 002.

## Exercício 4
### a.
A query ```SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;``` busca todos os atores/atrizes onde o campo name comece com as letras A >OU< J, >E< que possuam o campo salary maior que 300000.
### b.
```
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;
```
### c.
```
SELECT * FROM Actor WHERE (gender="male") AND (name LIKE "%G%" OR name LIKE "%g%");
```
### d.
```
SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%") OR (name LIKE "%G%" OR name LIKE "%a%") AND (salary BETWEEN 350000 AND 900000);
```

## Exercício 5
### a.
```
CREATE TABLE Filmes (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopsis TEXT(255) NOT NULL,
    launch_date DATE NOT NULL,
    rating FLOAT NOT NULL
);
```
### b.
```
INSERT INTO Filmes
VALUES (001, "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.", "2006-01-06", 7);
```
### c.
```
INSERT INTO Filmes
VALUES (002, "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.", "2012-12-27", 10);
```
### d.
```
INSERT INTO Filmes
VALUES (003, "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8);
```
### e.
```
INSERT INTO Filmes
VALUES (004, "Cidade de Deus", "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.", "2002-08-30", 9.2);
```

## Exercício 6
### a.
```
SELECT id, name, rating FROM Filmes WHERE id = 001;
```
### b.
```
SELECT * FROM Filmes WHERE name="Cidade de Deus";
```
### c.
```
SELECT id, name, synopsis FROM Filmes WHERE rating > 7;
```

## Exercício 7
### a.
```
SELECT * FROM Filmes WHERE name LIKE "%vida%";
```
### b.
```
SELECT * FROM Filmes WHERE name LIKE "%";
```
### c.
```
SELECT * FROM Filmes WHERE launch_date <= "2021-03-22";
```
### d.
```
SELECT * FROM Filmes WHERE (launch_date <= "2021-03-22") AND (name LIKE "%" OR synopsis LIKE "%") AND rating > 7;
```


