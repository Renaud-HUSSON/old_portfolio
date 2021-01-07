-- Drop the database to prevent error if it already exists
DROP DATABASE portfolio;

CREATE DATABASE portfolio;

use portfolio;

CREATE TABLE projets(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  image varchar(100) NOT NULL,
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
  endpoints int NOT NULL,
  methods VARCHAR(10) NOT NULL,
  roles VARCHAR(15) NOT NULL,
  CONSTRAINT FK_PERMS_ROLE FOREIGN KEY(roles) REFERENCES roles(nom),
  CONSTRAINT FK_PERMS_ENDPOINT FOREIGN KEY(endpoints) REFERENCES endpoints(id),
  CONSTRAINT FK_PERMS_METHOD FOREIGN KEY(methods) REFERENCES methods(nom),
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
  "Astroshoot est un site que j'ai créé pour un ami passionné d'astronomie. Il répertorie toutes ses images par catégories, et fournit plein de détails pour chacune d'entre elles. Il peut ajouter, mettre à jour, supprimer des images et leurs informations, des catégories, le matériel qu'il utilise, il peut envoyer des mails aux utilisateurs inscrits à la newsletter, et bien plus depuis une interface d'administration. \n
J'ai conçu le frontend avec le framework Javascript React, et le préprocesseur CSS SASS. Ce frontend communique avec la base de données MySQL en passant par une API REST que j'ai créé en PHP.",
  "Javascript, PHP, Sass, SQL, React, MySql",
  "https://astrophoto-amateur.fr",
  "https://github.com/Renaud-HUSSON/astrophoto-by-astroshoot"
);
INSERT INTO projets (name, image, description, tech, link, github) VALUES(
  "Portfolio",
  "/images/projets/portfolio.png",
  "Mon portfolio me permet de présenter mes compétences, mes projets et mon parcours. Le frontend a été conçu avec le framework Javascript React, et pour le style j'ai utilisé du CSS in JS avec la librairie Styled Components.\n
Ce frontend communique avec une base de données MySQL en passant par une API REST réalisée avec NodeJs et le framework Express. Une autre application express s'occupe de l'authentification, qui permet de donner l'autorisation à accéder à certaines ressources, comme les endpoints de l'API qui permettent d'ajouter, supprimer ou bien mettre à jours des projets, compétences etc... ou bien la section administration.\n
Ces permissions sont définies dans ma base de données, dans des tables qui stockent les données suivantes: les endpoints, les methodes HTTP et les différents rôles. Des JWT sont utilisés pour garder l'utilisateur authentifié (avec un refresh token), et un access token de très courte durée qui est fourni lorsqu'on a un refresh token pour l'accès aux différentes ressources.\n
Le tout est découpé en plusieurs containers docker, chacun réalisant une action précise: Nginx pour pouvoir reverse proxy vers mes différents services, mon frontend qui est l'application React, mon api, mon service d'authentification, ma base de données MySQL et une autre application express me servant de CDN pour mes images. Ce site est donc plus qu'un portfolio. Il me servira, dans les années à venir, à déployer de futures applications qui me seraient utiles, et dont je pourrais restreindre l'accès à moi même ou bien les rendre publiques, et tout ça très facilement.",
  "Javascript, React, NodeJS, Express, SQL, MySql, Docker, Nginx",
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
INSERT INTO endpoints (chemin) VALUES("/api/endpoints");
INSERT INTO endpoints (chemin) VALUES("/api/methods");
INSERT INTO endpoints (chemin) VALUES("/api/perms");
INSERT INTO endpoints (chemin) VALUES("/api/roles");

-- Methods
INSERT INTO methods (nom) VALUES("GET");
INSERT INTO methods (nom) VALUES("POST");
INSERT INTO methods (nom) VALUES("PUT");
INSERT INTO methods (nom) VALUES("DELETE");

-- Perms
-- /api/projets endpoint perms
INSERT INTO perms (endpoints, methods, roles) VALUES (1, "GET", "public");
INSERT INTO perms (endpoints, methods, roles) VALUES (1, "POST", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (1, "PUT", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (1, "DELETE", "admin");

-- /api/competences endpoint perms
INSERT INTO perms (endpoints, methods, roles) VALUES (2, "GET", "public");
INSERT INTO perms (endpoints, methods, roles) VALUES (2, "POST", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (2, "PUT", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (2, "DELETE", "admin");

-- /api/parcours endpoint perms
INSERT INTO perms (endpoints, methods, roles) VALUES (3, "GET", "public");
INSERT INTO perms (endpoints, methods, roles) VALUES (3, "POST", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (3, "PUT", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (3, "DELETE", "admin");

-- /api/experiences endpoint perms
INSERT INTO perms (endpoints, methods, roles) VALUES (4, "GET", "public");
INSERT INTO perms (endpoints, methods, roles) VALUES (4, "POST", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (4, "PUT", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (4, "DELETE", "admin");

-- /api/messages endpoint perms
INSERT INTO perms (endpoints, methods, roles) VALUES (5, "GET", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (5, "POST", "public");
INSERT INTO perms (endpoints, methods, roles) VALUES (5, "PUT", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (5, "DELETE", "admin");

-- /api/endpoints endpoint perms
INSERT INTO perms (endpoints, methods, roles) VALUES (6, "GET", "public");
INSERT INTO perms (endpoints, methods, roles) VALUES (6, "POST", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (6, "PUT", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (6, "DELETE", "admin");

-- /api/methods endpoint perms
INSERT INTO perms (endpoints, methods, roles) VALUES (7, "GET", "public");
INSERT INTO perms (endpoints, methods, roles) VALUES (7, "POST", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (7, "PUT", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (7, "DELETE", "admin");

-- /api/perms endpoint perms
INSERT INTO perms (endpoints, methods, roles) VALUES (8, "GET", "public");
INSERT INTO perms (endpoints, methods, roles) VALUES (8, "POST", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (8, "PUT", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (8, "DELETE", "admin");

-- /api/roles endpoint perms
INSERT INTO perms (endpoints, methods, roles) VALUES (9, "GET", "public");
INSERT INTO perms (endpoints, methods, roles) VALUES (9, "POST", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (9, "PUT", "admin");
INSERT INTO perms (endpoints, methods, roles) VALUES (9, "DELETE", "admin");


-- User
INSERT INTO users (username, password, role) VALUES(
  "renaud", 
  "$2y$10$/eUmJhsb0ssUQqeo6.VfnOqzRV5nxWN4cLzZOF9NrGroQNFxXp2DW",
  "admin"
);
