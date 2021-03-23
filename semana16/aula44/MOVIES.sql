CREATE TABLE Filmes (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopsis TEXT(255) NOT NULL,
    launch_date DATE NOT NULL,
    rating FLOAT NOT NULL
);

INSERT INTO Filmes
VALUES (001, "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.", "2006-01-06", 7);

INSERT INTO Filmes
VALUES (002, "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.", "2012-12-27", 10);

INSERT INTO Filmes
VALUES (003, "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8);

INSERT INTO Filmes
VALUES (004, "Cidade de Deus", "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.", "2002-08-30", 9.2);

SELECT * FROM Filmes;
SELECT id, name, rating FROM Filmes WHERE id = 001;
SELECT * FROM Filmes WHERE name="Cidade de Deus";
SELECT id, name, synopsis FROM Filmes WHERE rating > 7;
SELECT * FROM Filmes WHERE name LIKE "%vida%";
SELECT * FROM Filmes WHERE name LIKE "%";
SELECT * FROM Filmes WHERE launch_date <= "2021-03-22";
SELECT * FROM Filmes WHERE (launch_date <= "2021-03-22") AND (name LIKE "%" OR synopsis LIKE "%") AND rating > 7;

