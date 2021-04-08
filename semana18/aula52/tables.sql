CREATE TABLE User50 (
	id VARCHAR(100) NOT NULL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
	password VARCHAR(255) NOT NULL,
    role VARCHAR(6) NOT NULL DEFAULT "NORMAL"
);

CREATE TABLE Address (
    cep VARCHAR(10) NOT NULL,
    logradouro VARCHAR(100) NOT NULL DEFAULT "",
    numero INT NOT NULL,
    complemento VARCHAR(64) NOT NULL,
    bairro VARCHAR(64) NOT NULL DEFAULT "",
    cidade VARCHAR(64) NOT NULL DEFAULT "",
    estado VARCHAR(64) NOT NULL DEFAULT "",
    user_id VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES User50(id)
);

INSERT INTO Address
VALUES (
    "08740480",
    "Rua Dr. Aureliano Leite",
    220,
    "Casa",
    "Jardim Universo",
    "Mogi das Cruzes",
    "São Paulo",
    "502a4f60-b876-4d8b-a392-2d02515119b0"
);

SELECT * FROM User50;
SELECT * FROM Address;
SELECT * FROM User50 WHERE id = "";

DROP TABLE User50;
DROP TABLE Address;