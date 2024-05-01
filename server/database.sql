CREATE DATABASE perntodo;
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE User(
    Username VARCHAR(30) PRIMARY KEY,
    Password VARCHAR(20)
);