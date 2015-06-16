console.log("hello");
var fs = require("fs");
var file = fs.readFileSync('basic.input',{encoding: 'utf8'});
var myArray = file.split('\n\n');
console.log(myArray.length);
var output = '';
myArray.forEach(function(data){
	output += '<p>'+data+'</p>\n\n';
	});
console.log(output); 
