# Exercício 1
### a.
```ALTER TABLE Actor DROP COLUMN salary;``` - Esta query altera a tabela **Actor** e apaga todos os dados da coluna _salary_ incluindo a própria coluna _salary_.
### b.
```ALTER TABLE Actor CHANGE gender sex VARCHAR(6);``` - Esta query altera a tabela **Actor** e muda o nome da coluna _gender_ para _sex_ com texto de no máximo 6 caracteres.
### c.
```ALTER TABLE Actor CHANGE gender gender VARCHAR(255);``` - Esta query altera a tabela **Actor** e muda o nome da coluna _gender_ para _gender_ com texto de no máximo 6 caracteres.
### d.
```ALTER TABLE Actor CHANGE gender gender VARCHAR(100);```

# Exercício 2
### a.
```
UPDATE Actor SET name = "Uma Thurman", birth_date = "1970-04-29" WHERE id = 003;
```
### b.
```
UPDATE Actor SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```
```
UPDATE Actor SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```
### c.
```
UPDATE Actor SET name = "Paola Oliveira", salary = 930000, birth_date = "1982-04-14"
WHERE id = 005;
```
### d.
```
UPDATE Actor SET name = "Samuel L. Jackson", salary = 15000000, birth_date = "1948-12-21"
WHERE id = 009;
```
A query acima não mudou nenhum dado da tabela pois o _id_ ainda não foi criado.
Erro resultante da query acima: ```0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0```
# Exercício 3
### a.
```DELETE FROM Actor WHERE name = "Tony Ramos";```
### b.
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```
# Exercício 4
### a.
```
SELECT MAX(salary) FROM Actor;
```
### b.
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```
### c.
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
### d.
```
SELECT SUM(salary) FROM Actor;
```
# Exercício 5
### a.
```SELECT COUNT(*), gender FROM Actor GROUP BY gender;```
A query acima busca todos os atores/atrizes, conta o número total e os agrupa por gênero.
### b.
```
SELECT id, name FROM Actor ORDER BY name DESC;
```
### c.
```
SELECT * FROM Actor ORDER BY salary DESC;
```
### d.
```
SELECT * FROM Actor ORDER BY salary LIMIT 3;
```
### e.
```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

# Exercício 6
### a.
```
ALTER TABLE Filmes ADD playing_limit_date DATE;
```
### b.
```
ALTER TABLE Filmes CHANGE rating rating FLOAT;
```
### c.
```
UPDATE Filmes SET playing_limit_date = "2021-04-01" WHERE id = 004;
```
```
UPDATE Filmes SET playing_limit_date = "2021-02-15" WHERE id = 002;
```
### d.
```
DELETE FROM Filmes WHERE id = 001;
```
```0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0``` - Esta query não alterou nenhuma linha pois o filme alterado na query já não existe mais após ser deletado com o comando abaixo:
```
UPDATE Filmes SET synopsis = "Os caminhos de vários criminosos se cruzam nestas três histórias de Quentin Tarantino. Um pistoleiro se apaixona pela mulher de seu chefe, um boxeador não se sai bem em uma luta e um casal tenta executar um plano de roubo que foge do controle." WHERE id = 001;
```

# Exercício 7
### a.
3 Filmes com avaliação maior que 7.5
```SELECT COUNT(rating) FROM Filmes WHERE rating > 7.5;```
### b.
Média de avaliação dos filmes: 9.066666603088379
```SELECT AVG(rating) FROM Filmes;```
### c.
1 Filme em cartaz.
```SELECT COUNT(playing_limit_date) FROM Filmes WHERE playing_limit_date >= curdate();```
### d.
Nenhum filme.
```SELECT COUNT(launch_date) FROM Filmes WHERE launch_date > curdate();```
### e.
Maior nota: 10
```SELECT MAX(rating) FROM Filmes;```
### f.
Menor nota: 8
```SELECT MIN(rating) FROM Filmes;```

# Exercício 8
### a.
```
SELECT * FROM Filmes ORDER BY name;
```
### b.
```
SELECT * FROM Filmes ORDER BY name DESC LIMIT 5;
```
### c.
```
SELECT * FROM Filmes WHERE launch_date < curdate() ORDER BY launch_date DESC LIMIT 3;
```
### d.
```
SELECT * FROM Filmes ORDER BY rating DESC;
```
