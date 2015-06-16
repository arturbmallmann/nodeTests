var fs = require("fs");
var file = '';
fs.readFile('basic.input',{encoding: 'utf8'},write);

function write(err,data){
	console.log(data);
};

/*var myArray = file.split('\n\n');
console.log(myArray.length);
var output = '';
myArray.forEach(function(data){
	output += '<p>'+data+'</p>\n\n';
	});
console.log(output); 
*/
