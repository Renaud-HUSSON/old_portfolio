-- Drop the database to prevent error if it already exists
DROP DATABASE portfolio;

CREATE DATABASE portfolio;

use portfolio;

CREATE TABLE projets(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  src varchar(50),
  description varchar(5000),
  tech varchar(200),
  PRIMARY KEY(id)
);

CREATE TABLE messages(
  id int NOT NULL AUTO_INCREMENT,
  email varchar(50) NOT NULL,
  message varchar(2000) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE skills(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  image varchar(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE users(
  id int NOT NULL AUTO_INCREMENT,
  username varchar(30) NOT NULL,
  password varchar(512) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE parcours(
  id int NOT NULL AUTO_INCREMENT,
  date VARCHAR(30) NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE experiences(
  id int NOT NULL AUTO_INCREMENT,
  date VARCHAR(30) NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);