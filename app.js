const http = require('http');

http.createServer(function (req, res) {
	res.write("Eyyyy my server is up and running in my domain.<3 lezzz go fullstack engineer.");
	res.end();
}
).listen(3000)

console.log("Server running on PORT:3000");
