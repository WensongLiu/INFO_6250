'use strict';
const Hapi = require('hapi');
const Pino = require('hapi-pino');


const server = Hapi.server({
 	port: 3000, 
 	host: 'localhost' 
});

const init = async () => {
 	await server.register(require('inert'));
 	await server.register({
 		plugin: require('hapi-pino'), 
 		options: {
 			prettyPrint: false,
			logEvents: ['response']
 		}
 	});
 	
 	server.route({
 		method: 'GET',
		path: '/yellow',
		handler: (request, h) => {
			request.logger.info('In handler %s', request.path);
 			return h.file('./html_files/yellow.html');
 		}
 	});

	server.route({
 	method: 'GET', 
 	path: '/coldplay', 
 	handler: (request, h) => {
 		request.logger.info('In handler %s', request.path);
 		return h.file('./html_files/coldplay.html');
 	}	
	});

 	server.route({
 	method: 'GET', 
 	path: '/parachutes', 
 	handler: (request, h) => {
 		request.logger.info('In handler %s', request.path);
 		return h.file('./html_files/parachutes.html');
 		}
	});

 	await server.start();
	console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
