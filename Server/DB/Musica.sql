DROP DATABASE musica;
CREATE DATABASE musica;

CREATE TABLE musica.persona
(
    cedula INT(10) PRIMARY KEY,
    nombre VARCHAR(32) NOT NULL,
    pais VARCHAR(32) NOT NULL,
    sexo VARCHAR(10) NOT NULL
)
ENGINE=INNODB;

CREATE TABLE musica.cantante
(
    id INT(10) PRIMARY KEY,
    apodo VARCHAR(32) NOT NULL,
    n_albumes INT(3) NOT NULL,
    FOREIGN KEY (id) REFERENCES persona(cedula) ON DELETE CASCADE
)
ENGINE=INNODB;

CREATE TABLE musica.compositor
(
    id INT(10) PRIMARY KEY,
    apodo VARCHAR(32) NOT NULL,
    n_obras INT(3) NOT NULL,
    FOREIGN KEY (id) REFERENCES persona(cedula) ON DELETE CASCADE
)
ENGINE=INNODB;

CREATE TABLE musica.genero
(
    id_genero INT(10) PRIMARY KEY,
    nombre VARCHAR(32) NOT NULL
)
ENGINE=INNODB;

CREATE TABLE musica.obra
(
    id_obra INT(10) PRIMARY KEY,
    titulo VARCHAR(32) NOT NULL,
    ano INT(4) NOT NULL,
    idioma VARCHAR(10) NOT NULL,
    cantante INT(10) NOT NULL,
    compositor INT(10) NOT NULL,
    genero INT(10) NOT NULL,
    FOREIGN KEY (genero) REFERENCES genero(id_genero) ON DELETE CASCADE,
    FOREIGN KEY (cantante) REFERENCES cantante(id) ON DELETE CASCADE,
    FOREIGN KEY (compositor) REFERENCES compositor(id) ON DELETE CASCADE
)
ENGINE=INNODB;


INSERT INTO `persona` VALUES ('12345', 'Miguel', 'Colombia', 'Masculino');
INSERT INTO `persona` VALUES ('54321', 'Andrea', 'Argentina', 'Femenino');
INSERT INTO `persona` VALUES ('24654', 'Ana', 'Canada', 'Femenino');
INSERT INTO `persona` VALUES ('87624', 'Oliver', 'Paises Bajos', 'Masculino');
INSERT INTO `persona` VALUES ('78924', 'Carolina Giraldo', 'España', 'Femenino');

INSERT INTO `cantante` VALUES ('12345', 'Bad Bunny', '8');
INSERT INTO `cantante` VALUES ('87624', 'Maluma', '10');
INSERT INTO `cantante` VALUES ('24654', 'Shakira', '6');
INSERT INTO `cantante` VALUES ('54321', 'Becky G', '15');
INSERT INTO `cantante` VALUES ('78924', 'Karol G', '4');

INSERT INTO `compositor` VALUES ('78924', 'Karol', '12');
INSERT INTO `compositor` VALUES ('12345', 'Bad Bunny', '20');
INSERT INTO `compositor` VALUES ('87624', 'Maluma', '15');
INSERT INTO `compositor` VALUES ('54321', 'Becky G', '7');
INSERT INTO `compositor` VALUES ('24654', 'Shakira', '4');

INSERT INTO `genero` VALUES ('1', 'Tropical');
INSERT INTO `genero` VALUES ('10', 'Romantico');
INSERT INTO `genero` VALUES ('5', 'Electronica');
INSERT INTO `genero` VALUES ('13', 'Rock');
INSERT INTO `genero` VALUES ('33', 'Despecho');

INSERT INTO `obra` VALUES ('5238', 'Legendary', '2020', 'FR', '87624', '78924', '1');
INSERT INTO `obra` VALUES ('5327', 'Californication', '2005', 'US', '12345', '12345', '10');
INSERT INTO `obra` VALUES ('3097', 'Until the end', '2011', 'US', '87624', '87624', '5');
INSERT INTO `obra` VALUES ('6379', 'Morado', '2018', 'ES', '12345', '54321', '5');
INSERT INTO `obra` VALUES ('9862', 'Tusa', '2019', 'ES', '78924', '12345', '33');
