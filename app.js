const http = require('http');
const routes=require('./routes')
const Server =  http.createServer(routes.handler)
Server.listen(8000)
