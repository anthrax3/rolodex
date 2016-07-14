// node.js server
var Hapi = require("hapi");
var Inert = require("inert");

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

server.register(Inert, (err) => {

  if (err) {
      throw err;
  }

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file('ui/index.html');
    }
  });
  server.route({
    method: 'GET',
    path: '/{asset}',
    handler: function (request, reply) {
      reply.file('ui/' + request.params.asset);
    }
  });
});

// Start the server
server.start((err) => {

  if (err) {
      throw err;
  }
  console.log('Server running at:', server.info.uri);
});
