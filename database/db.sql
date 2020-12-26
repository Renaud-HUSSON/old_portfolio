-- Drop the database to prevent error if it already exists
DROP DATABASE portfolio;

CREATE DATABASE portfolio;

use portfolio;

CREATE TABLE projets(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  image varchar(50) NOT NULL,
  description varchar(5000) NOT NULL,
  tech varchar(200) NOT NULL,
  link varchar(100),
  github varchar(200),
  PRIMARY KEY(id)
);

CREATE TABLE messages(
  id int NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  message varchar(2000) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE competences(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  type varchar(30) NOT NULL,
  image varchar(100) NOT NULL,
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

CREATE TABLE roles(
  nom VARCHAR(15) NOT NULL,
  PRIMARY KEY(nom)
);

CREATE TABLE endpoints(
  id int NOT NULL AUTO_INCREMENT,
  chemin VARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE methods(
  nom VARCHAR(10) NOT NULL,
  PRIMARY KEY(nom)
);

CREATE TABLE perms(
  id int NOT NULL AUTO_INCREMENT,
  role VARCHAR(15) NOT NULL,
  endpoint int NOT NULL,
  method VARCHAR(10) NOT NULL,
  CONSTRAINT FK_PERMS_ROLE FOREIGN KEY(role) REFERENCES roles(nom),
  CONSTRAINT FK_PERMS_ENDPOINT FOREIGN KEY(endpoint) REFERENCES endpoints(id),
  CONSTRAINT FK_PERMS_METHOD FOREIGN KEY(method) REFERENCES methods(nom),
  PRIMARY KEY(id)
);

CREATE TABLE users(
  id int NOT NULL AUTO_INCREMENT,
  username varchar(30) NOT NULL,
  password varchar(512) NOT NULL,
  role varchar(15) NOT NULL,
  token varchar(512),
  CONSTRAINT FK_USER_ROLE FOREIGN KEY (role) REFERENCES roles(nom),
  PRIMARY KEY(id)
);

-- INSERT DEFAULT DATAS
-- Languages
INSERT INTO competences (name, type, image) VALUES ("HTML", "langage", "/images/competences/html.svg");
INSERT INTO competences (name, type, image) VALUES ("CSS", "langage", "/images/competences/css.svg");
INSERT INTO competences (name, type, image) VALUES ("Javascript", "langage", "/images/competences/js.svg");
INSERT INTO competences (name, type, image) VALUES ("PHP", "langage", "/images/competences/php.svg");
INSERT INTO competences (name, type, image) VALUES ("SQL", "langage", "/images/competences/sql.svg");

-- Others
INSERT INTO competences (name, type, image) VALUES ("NodeJS", "autre", "/images/competences/nodejs.svg");
INSERT INTO competences (name, type, image) VALUES ("React", "autre", "/images/competences/react.svg");
INSERT INTO competences (name, type, image) VALUES ("MySQL", "autre", "/images/competences/mysql.svg");
INSERT INTO competences (name, type, image) VALUES ("Sass", "autre", "/images/competences/sass.svg");

-- Parcours
INSERT INTO parcours (date, name) VALUES ("2018-2020", "BAC S SI au Lycée Le Garros à Auch");
INSERT INTO parcours (date, name) VALUES ("2020-2022", "DUT Informatique à l'IUT de Blagnac");

-- Projects
INSERT INTO projets (name, image, description, tech, link, github) VALUES(
  "Astroshoot",
  "/images/projets/astroshoot.png",
  "Astroshoot est un site que j'ai créé pour un ami passionné d'astronomie. Il répertorie toutes ses images par catégories, et fournit plein de détails pour chacune d'entre elles. Il peut ajouter, mettre à jour, supprimer des images et leurs informations, des catégories, le matériel qu'il utilise, il peut envoyer des mails aux utilisateurs inscrits à la newsletter, et bien plus depuis une interface d'administration.
   J'ai conçu le frontend avec le framework Javascript React, et le préprocesseur CSS SASS. Ce frontend communique avec la base de donnée MySQL par le biais d'une API REST que j'ai créé en PHP.",
  "Javascript, PHP, Sass, SQL, React, MySql",
  "https://astrophoto-amateur.fr",
  "https://github.com/Renaud-HUSSON/astrophoto-by-astroshoot"
);
INSERT INTO projets (name, image, description, tech, link, github) VALUES(
  "Portfolio",
  "/images/projets/portfolio.png",
  "(Cette présentation présente mon vrai portfolio, que j'ai réalisé juste après celui ci. Celui ci est le même mais réalisée avec seulement du HTML et du CSS, avec le même style et le même contenu que celui actuel)
   Mon portfolio me permet de présenter mes compétences, mes projets et mon parcours. Je peux ajouter des projets, des compétences, et lire les messages que l'on m'a envoyé depuis une interface d'administration. Le frontend a été conçu avec le framework Javascript React, et pour le style j'ai utilisé du CSS in JS avec la librairie Styled Components. Ce frontend communique avec la base de donnée MySQL par le biais d'une API REST réalisée avec NodeJs et le framework Express. Ce backend est divisé en 2 applications Express, une qui gère tout le système d'authentification, d'acess token et de refresh token avec les JWT (Json Web Token), et l'autre application s'occupe de l'api qui permet de créer, récupérer, modifier et supprimer (CRUD) les projets, les compétences, et de lire les potentiels messages que je pourrais recevoir. Les 2 applications communiquent ensemble pour vérifier que la personne faisant des reqêtes à l'API ait les permissions.",
  "Javascript, React, NodeJS, SQL, MySql",
  "",
  "https://github.com/Renaud-HUSSON/portfolio"
);

-- Roles
INSERT INTO roles (nom) VALUES ("public");
INSERT INTO roles (nom) VALUES ("admin");

-- Endpoints
INSERT INTO endpoints (chemin) VALUES("/api/projets");
INSERT INTO endpoints (chemin) VALUES("/api/competences");
INSERT INTO endpoints (chemin) VALUES("/api/parcours");
INSERT INTO endpoints (chemin) VALUES("/api/experiences");
INSERT INTO endpoints (chemin) VALUES("/api/messages");

-- Methods
INSERT INTO methods (nom) VALUES("GET");
INSERT INTO methods (nom) VALUES("POST");
INSERT INTO methods (nom) VALUES("PUT");
INSERT INTO methods (nom) VALUES("DELETE");

-- Perms
-- /api/projets endpoint perms
INSERT INTO perms (endpoint, method, role) VALUES (1, "GET", "public");
INSERT INTO perms (endpoint, method, role) VALUES (1, "POST", "admin");
INSERT INTO perms (endpoint, method, role) VALUES (1, "PUT", "admin");
INSERT INTO perms (endpoint, method, role) VALUES (1, "DELETE", "admin");

-- /api/competences endpoint perms
INSERT INTO perms (endpoint, method, role) VALUES (2, "GET", "public");
INSERT INTO perms (endpoint, method, role) VALUES (2, "POST", "admin");
INSERT INTO perms (endpoint, method, role) VALUES (2, "PUT", "admin");
INSERT INTO perms (endpoint, method, role) VALUES (2, "DELETE", "admin");

-- /api/parcours endpoint perms
INSERT INTO perms (endpoint, method, role) VALUES (3, "GET", "public");
INSERT INTO perms (endpoint, method, role) VALUES (3, "POST", "admin");
INSERT INTO perms (endpoint, method, role) VALUES (3, "PUT", "admin");
INSERT INTO perms (endpoint, method, role) VALUES (3, "DELETE", "admin");

-- /api/experiences endpoint perms
INSERT INTO perms (endpoint, method, role) VALUES (4, "GET", "public");
INSERT INTO perms (endpoint, method, role) VALUES (4, "POST", "admin");
INSERT INTO perms (endpoint, method, role) VALUES (4, "PUT", "admin");
INSERT INTO perms (endpoint, method, role) VALUES (4, "DELETE", "admin");

-- /api/messages endpoint perms
INSERT INTO perms (endpoint, method, role) VALUES (5, "GET", "admin");
INSERT INTO perms (endpoint, method, role) VALUES (5, "POST", "public");
INSERT INTO perms (endpoint, method, role) VALUES (5, "PUT", "admin");
INSERT INTO perms (endpoint, method, role) VALUES (5, "DELETE", "admin");

-- User
INSERT INTO users (username, password, role) VALUES(
  "renaud", 
  "$2a$10$.b.arZ97mg5dFGmfuE73UuxnApp.DZT4BAzbEwS4kBsRAlyqs6lv6",
  "admin"
);
