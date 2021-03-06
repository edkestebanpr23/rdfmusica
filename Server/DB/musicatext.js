const dbMusica = `
@prefix map: <http://rdfmusica.heroku.app/musica.ttl#> .
@prefix db: <> .
@prefix vocab: <http://localhost:2020/vocab/resource/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix d2rq: <http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#> .
@prefix jdbc: <http://d2rq.org/terms/jdbc/> .

map:database a d2rq:Database;
	d2rq:jdbcDriver "com.mysql.jdbc.Driver";
	d2rq:jdbcDSN "jdbc:mysql:///musica";
	d2rq:username "root";
	jdbc:autoReconnect "true";
	jdbc:zeroDateTimeBehavior "convertToNull";
	.

# Table cantante
map:cantante a d2rq:ClassMap;
	d2rq:dataStorage map:database;
	d2rq:uriPattern "cantante/@@cantante.id@@";
	d2rq:class vocab:cantante;
	d2rq:classDefinitionLabel "cantante";
	.
map:cantante__label a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:cantante;
	d2rq:property rdfs:label;
	d2rq:pattern "cantante #@@cantante.id@@";
	.
map:cantante_apodo a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:cantante;
	d2rq:property vocab:cantante_apodo;
	d2rq:propertyDefinitionLabel "cantante apodo";
	d2rq:column "cantante.apodo";
	.
map:cantante_n_albumes a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:cantante;
	d2rq:property vocab:cantante_n_albumes;
	d2rq:propertyDefinitionLabel "cantante n_albumes";
	d2rq:column "cantante.n_albumes";
	d2rq:datatype xsd:int;
	.
map:cantante_id a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:cantante;
	d2rq:property vocab:cantante_id;
	d2rq:refersToClassMap map:persona;
	d2rq:join "cantante.id => persona.cedula";
	.

# Table compositor
map:compositor a d2rq:ClassMap;
	d2rq:dataStorage map:database;
	d2rq:uriPattern "compositor/@@compositor.id@@";
	d2rq:class vocab:compositor;
	d2rq:classDefinitionLabel "compositor";
	.
map:compositor__label a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:compositor;
	d2rq:property rdfs:label;
	d2rq:pattern "compositor #@@compositor.id@@";
	.
map:compositor_apodo a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:compositor;
	d2rq:property vocab:compositor_apodo;
	d2rq:propertyDefinitionLabel "compositor apodo";
	d2rq:column "compositor.apodo";
	.
map:compositor_n_obras a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:compositor;
	d2rq:property vocab:compositor_n_obras;
	d2rq:propertyDefinitionLabel "compositor n_obras";
	d2rq:column "compositor.n_obras";
	d2rq:datatype xsd:int;
	.
map:compositor_id a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:compositor;
	d2rq:property vocab:compositor_id;
	d2rq:refersToClassMap map:persona;
	d2rq:join "compositor.id => persona.cedula";
	.

# Table genero
map:genero a d2rq:ClassMap;
	d2rq:dataStorage map:database;
	d2rq:uriPattern "genero/@@genero.id_genero@@";
	d2rq:class vocab:genero;
	d2rq:classDefinitionLabel "genero";
	.
map:genero__label a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:genero;
	d2rq:property rdfs:label;
	d2rq:pattern "genero #@@genero.id_genero@@";
	.
map:genero_id_genero a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:genero;
	d2rq:property vocab:genero_id_genero;
	d2rq:propertyDefinitionLabel "genero id_genero";
	d2rq:column "genero.id_genero";
	d2rq:datatype xsd:int;
	.
map:genero_nombre a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:genero;
	d2rq:property vocab:genero_nombre;
	d2rq:propertyDefinitionLabel "genero nombre";
	d2rq:column "genero.nombre";
	.

# Table obra
map:obra a d2rq:ClassMap;
	d2rq:dataStorage map:database;
	d2rq:uriPattern "obra/@@obra.id_obra@@";
	d2rq:class vocab:obra;
	d2rq:classDefinitionLabel "obra";
	.
map:obra__label a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:obra;
	d2rq:property rdfs:label;
	d2rq:pattern "obra #@@obra.id_obra@@";
	.
map:obra_id_obra a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:obra;
	d2rq:property vocab:obra_id_obra;
	d2rq:propertyDefinitionLabel "obra id_obra";
	d2rq:column "obra.id_obra";
	d2rq:datatype xsd:int;
	.
map:obra_titulo a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:obra;
	d2rq:property vocab:obra_titulo;
	d2rq:propertyDefinitionLabel "obra titulo";
	d2rq:column "obra.titulo";
	.
map:obra_ano a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:obra;
	d2rq:property vocab:obra_ano;
	d2rq:propertyDefinitionLabel "obra ano";
	d2rq:column "obra.ano";
	d2rq:datatype xsd:int;
	.
map:obra_idioma a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:obra;
	d2rq:property vocab:obra_idioma;
	d2rq:propertyDefinitionLabel "obra idioma";
	d2rq:column "obra.idioma";
	.
map:obra_genero a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:obra;
	d2rq:property vocab:obra_genero;
	d2rq:refersToClassMap map:genero;
	d2rq:join "obra.genero => genero.id_genero";
	.
map:obra_cantante a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:obra;
	d2rq:property vocab:obra_cantante;
	d2rq:refersToClassMap map:cantante;
	d2rq:join "obra.cantante => cantante.id";
	.
map:obra_compositor a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:obra;
	d2rq:property vocab:obra_compositor;
	d2rq:refersToClassMap map:compositor;
	d2rq:join "obra.compositor => compositor.id";
	.

# Table persona
map:persona a d2rq:ClassMap;
	d2rq:dataStorage map:database;
	d2rq:uriPattern "persona/@@persona.cedula@@";
	d2rq:class vocab:persona;
	d2rq:classDefinitionLabel "persona";
	.
map:persona__label a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:persona;
	d2rq:property rdfs:label;
	d2rq:pattern "persona #@@persona.cedula@@";
	.
map:persona_cedula a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:persona;
	d2rq:property vocab:persona_cedula;
	d2rq:propertyDefinitionLabel "persona cedula";
	d2rq:column "persona.cedula";
	d2rq:datatype xsd:int;
	.
map:persona_nombre a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:persona;
	d2rq:property vocab:persona_nombre;
	d2rq:propertyDefinitionLabel "persona nombre";
	d2rq:column "persona.nombre";
	.
map:persona_pais a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:persona;
	d2rq:property vocab:persona_pais;
	d2rq:propertyDefinitionLabel "persona pais";
	d2rq:column "persona.pais";
	.
map:persona_sexo a d2rq:PropertyBridge;
	d2rq:belongsToClassMap map:persona;
	d2rq:property vocab:persona_sexo;
	d2rq:propertyDefinitionLabel "persona sexo";
	d2rq:column "persona.sexo";
	.


`;

module.exports = dbMusica;