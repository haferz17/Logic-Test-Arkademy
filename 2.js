let http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  for(let a=5;a>0;a--){
    for(let b=0;b<a;b++){
      res.write('* ');
    }
    res.write('<br/>');
  }
  res.end();

}).listen(8080);

console.log("server running on http://localhost:8080");