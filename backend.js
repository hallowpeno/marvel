var Papa = require('papaparse');
var d3 = require('d3-fetch');

d3.csv("Suicide.csv").then(function(data) {
  console.log(data); // [{"Hello": "world"}, …]
});

/**
var csvString = 'Suicide.csv,';
var data = Papa.parse(csvString);
**/
//console.log(data);
/**
var file = 
Papa.parse(file, {
    complete: function(results) {
        console.log(results);
    }
});
**/