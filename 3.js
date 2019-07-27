let http = require('http');
let a,b;

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  for(a=5;a>0;a--){
    for(b=1;b<a;b++){
      res.write('&nbsp;&nbsp;&nbsp;');
    }
    for(b=1;b<=5+1-a;b++){
        res.write('* ');
    }
    res.write('<br/>');
  }
  res.end();

}).listen(8080);

console.log("server running on http://localhost:8080");