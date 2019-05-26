var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method




    if(path == '/') {
        response.setHeader('Content-Type', 'text/html')
        response.write('<!DOCTYPE>\n<html><link rel="stylesheet" href="/style.css"><script src="/main.js"></script><body><h1>Hello HTML</h1><a href="/style.css">css</a>\n<a href="/main.js">js</a><body></html>')
    }
    else if(path == '/style.css') {
        response.setHeader('Content-Type', 'text/css')
        response.write('h1{color:pink}')
    } 
    else if(path == '/main.js') {
        response.setHeader('Content-Type', 'application/javascript')
        response.write('alert(Hello JavaScript)')
    }
    else {
        response.statusCode = 404
    }
    console.log(response.statusCode)
    response.end();






})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
