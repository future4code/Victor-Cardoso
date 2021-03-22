CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor
VALUES("001", "Tony Ramos", 400000, "1948-08-25", "male");

INSERT INTO Actor
VALUES("002", "Glória Pires", 12000000, "1963-08-23", "female");

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");

INSERT INTO Actor
VALUES("004", "Jake Gyllenhaal", 3000000, "1980-12-19", "male");

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female");

INSERT INTO Actor
VALUES("006", "Amanda Seyfried", 7000000, "1985-12-03", "female");

INSERT INTO Actor
VALUES("007", "Christoph Waltz", 42000000, "1956-10-04", "male");

SELECT * FROM Actor;
SELECT * FROM Actor WHERE gender="female";
SELECT * FROM Actor WHERE name="Tony Ramos";
SELECT * FROM Actor WHERE gender="invalid";
SELECT * FROM Actor WHERE salary <= 500000;
SELECT id, name from Actor WHERE id = "002";
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;
SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%");
SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%") OR (name LIKE "%G%" OR name LIKE "%a%") AND (salary BETWEEN 350000 AND 900000);
