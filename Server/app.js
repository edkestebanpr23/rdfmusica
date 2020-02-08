require('./config/config');

const express = require('express');
// Parse a SPARQL query to a JSON object
sparql = require('sparql');
var SparqlParser = require('sparqljs').Parser;
const app = express();
// let dbMusica = require('./DB/musica.ttl');


app.get('/musica', function (req, res) {
    res.sendFile(__dirname + "/DB/" + "musica.ttl", (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });
});


client = new sparql.Client('http://localhost:2020/vocab/resource/cantante_apodo>');

// let q = `
//     PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//     PREFIX owl: <http://www.w3.org/2002/07/owl#>
//     PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//     PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
//     PREFIX p: <http://localhost:2020/all>
//     PREFIX musica:	<http://localhost:2020/vocab/resource/cantante_apodo>
//     SELECT DISTINCT ?property ?hasValue ?isValueOf
// WHERE {
//   { <http://localhost:2020/resource/cantante/12345> ?property ?hasValue }
//   UNION
//   { ?isValueOf ?property <http://localhost:2020/resource/cantante/12345> }
// }
// ORDER BY (!BOUND(?hasValue)) ?property ?hasValue ?isValueOf
//     `;

// client.query(q, (err, res) => {
//     console.log('Correcto');
//     console.log(res);
//     // console.log(res.results.bindings[0]);
//     res.results.bindings.forEach(element => {
//         console.log(element);
//     });
// }, err => {
//     console.log('Error');
//     console.log(err);
// });






app.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});