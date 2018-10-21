// var Papa = require('papaparse');
//var d3 = require('d3-fetch');

var doFunction = function() {
    console.log("Hello");
    // d3.csv("./Suicide.csv").then(function(data) {
    // console.log(data);
    // // document.getElementById('paragraph').innerHTML = data;
    // // alert("help!");
    // return "Emily!!!!";
    // });
    d3.csv("./Suicide.csv", function(error, dataset) {
        console.log(dataset);
    });
}


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