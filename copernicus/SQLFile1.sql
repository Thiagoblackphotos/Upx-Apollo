CREATE DATABASE apollo;
GO

USE apollo;
GO


-- TABELA USUARIO

CREATE TABLE usuario (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    cep VARCHAR(9) NOT NULL
);

go
-- TABELA ENDERECO

CREATE TABLE endereco (
    id INT IDENTITY(1,1) PRIMARY KEY,
    usuario_id INT,
    cidade VARCHAR(100),
    estado VARCHAR(50),
    cep VARCHAR(9),

    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);
go
-- TABELA DADOS ENERGIA

CREATE TABLE dados_energia (
    id INT IDENTITY(1,1) PRIMARY KEY,
    endereco_id INT,

    irradiacao_solar DECIMAL(5,2),
    velocidade_vento DECIMAL(5,2),

    FOREIGN KEY (endereco_id) REFERENCES endereco(id)
);

go
-- TABELA ANALISE

CREATE TABLE analise (
    id INT IDENTITY(1,1) PRIMARY KEY,
    endereco_id INT,

    tipo_energia VARCHAR(50),
    observacao VARCHAR(255),

    FOREIGN KEY (endereco_id) REFERENCES endereco(id)
);