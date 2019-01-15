'use strict';
const Hapi = require('hapi');
const Pino = require('hapi-pino');
const Path = require('path');


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
 	//These functions are used to read static resources.
	server.route({
        method: 'GET',
        path: '/yellow.JPG',
        handler: function (request, h) {

            return h.file('./public/yellow.JPG');
        }
    });

    server.route({
        method: 'GET',
        path: '/Coldplay-Yellow.mp3',
        handler: function (request, h) {

            return h.file('./public/Coldplay-Yellow.mp3');
        }
    });

    server.route({
        method: 'GET',
        path: '/coldplay_band.jpg',
        handler: function (request, h) {

            return h.file('./public/coldplay_band.jpg');
        }
    });

    server.route({
        method: 'GET',
        path: '/coldplay.jpg',
        handler: function (request, h) {

            return h.file('./public/coldplay.jpg');
        }
    });

    server.route({
        method: 'GET',
        path: '/celebration.gif',
        handler: function (request, h) {

            return h.file('./public/celebration.gif');
        }
    });

    server.route({
        method: 'GET',
        path: '/parachutes.jpg',
        handler: function (request, h) {

            return h.file('./public/parachutes.jpg');
        }
    });

    server.route({
        method: 'GET',
        path: '/album_icon.jpg',
        handler: function (request, h) {

            return h.file('./public/album_icon.jpg');
        }
    });

	//These 3 functions are used to read html resources.
 	server.route({
 		method: 'GET',
		path: '/yellow',
		handler: (request, h) => {
			request.logger.info('In handler %s', request.path);
 			return h.file('./public/yellow.html');
 		}
 	});

	server.route({
 	method: 'GET', 
 	path: '/coldplay', 
 	handler: (request, h) => {
 		request.logger.info('In handler %s', request.path);
 		return h.file('./public/coldplay.html');
 	}	
	});

 	server.route({
 	method: 'GET', 
 	path: '/parachutes', 
 	handler: (request, h) => {
 		request.logger.info('In handler %s', request.path);
 		return h.file('./public/parachutes.html');
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
