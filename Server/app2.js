const express = require('express');
// Parse a SPARQL query to a JSON object
sparql = require('sparql');
var SparqlParser = require('sparqljs').Parser;
const app = express();



app.get('/musica', function (req, res) {
    res.json('get Usuario LOCAL!!!');
});

// let dbMusica = require('./DB/musica.ttl');
// console.log(dbMusica);

client = new sparql.Client('http://dbpedia.org/sparql');

let query = () => {
    let q = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    PREFIX madsrdf: <http://www.loc.gov/mads/rdf/v1#>
    PREFIX dc: <http://purl.org/dc/elements/1.1/>
    PREFIX foaf:   <http://xmlns.com/foaf/0.1/>
    PREFIX dbo:	<http://dbpedia.org/ontology/>
    PREFIX dbp:	<http://dbpedia.org/property/>
    PREFIX dbr:	<http://dbpedia.org/resource/>
    SELECT DISTINCT ?class
WHERE { [] a ?class }
ORDER BY ?class
    `;

    client.query(q, (err, res) => {
        console.log('Correcto');
        console.log(res);
        // console.log(res.results.bindings[0]);
        res.results.bindings.forEach(element => {
            console.log(element);
        });
    }, err => {
        console.log('Error');
        console.log(err);
    });
};

query();




app.listen(3000, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${3000}`);
});