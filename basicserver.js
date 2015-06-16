var fs=require("fs");
var http=require("http");

var server = http.createServer(listener);

function listener (req,res){
	console.log("request made");
			fs.readFile ( 'basic.input', {encoding: 'utf8'},function(err,data){
				if(err){
					res.writeHead(500);
					res.write('errrrouuu');
				}else{
					res.writeHead(200, { 'Content-Type' : 'text/html' } );
					var output = paragraph(data);
					console.log(output);
					res.write(output);
				}
				res.end();
			}); 
	};

server.listen(8084,function(){
	console.log("listening on port 82");
});

function paragraph(input){
	
	var myArray = input.split('\n\n');
	var output = '';
	myArray.forEach(function(data){
	        output += '<p>'+data+'</p>\n\n';
	});
	return output;
}
