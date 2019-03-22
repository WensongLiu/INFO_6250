http  = require('http')
//const Hapi = require("Hapi");
const querystring = require("querystring");
const url = require('url');
//const Path = require('path');
let io = require('socket.io')(8088);
let Event = require('./subscrible');

let connectRoom = {}

// const server = Hapi.server({
//     port: 8000, 
//     host: '127.0.0.1' 
// });

// const init = async () => {
    
//     server.route({
//         method: 'GET',
//         path: '/gomoku',
//         handler: (request, h) => {
//         return h.file('./client/index.html');
//         }
//     });
//     await server.start();
//     console.log(`Server running at: ${server.info.uri}`);
// };

function changeAuth( currenRoom, curentUser ){
    for( var user in currenRoom ){
        if( user!=='full' && user !=='event' ){
            if( user === curentUser ){
                currenRoom[user].canDown = false
            }else{
                currenRoom[user].canDown = true
            }
        }
    }
}


io.on('connection', function (socket) {
    console.log('connection...')
  
    socket.on('move', function ( from ) {
        let room = from.room;
        let user = from.user;
        if( connectRoom[room].full ){
            if( connectRoom[room][user].canDown ){
                connectRoom[room].event.trigger('moveInfo',from)
            }
            changeAuth ( connectRoom[room],user )
            connectRoom[room].event.trigger('who')
        }
    });
  

    socket.on('welcome', function (data) {
        let room = data.room;
        let id = socket.id;
        connectRoom[room].event.listen('userInfo',()=>{
            io.sockets.to(id).emit('userInfo', connectRoom[room]); 
        })

        connectRoom[room].event.listen('who',()=>{
            io.sockets.to(id).emit('who', connectRoom[room]); 
        })

        connectRoom[room].event.listen('moveInfo',( from )=>{
            io.sockets.to(id).emit('moveInfo', from ); 
        })

        connectRoom[room].event.listen('escap',( room )=>{
            io.sockets.to(id).emit('escap', room ); 
        })

        connectRoom[room].event.trigger('userInfo')

        if(  connectRoom[room].full ){
            connectRoom[room].event.trigger('who')
        }
    });


    socket.on('disconnect', function ( e ) {
        console.log( '-----' + e )
    });


    socket.on('closeRoom', function ( room ) {
        if( connectRoom[room] ){
            connectRoom[room].event.trigger('escap')
            delete connectRoom[ room ] 
        }
        
    });
});

let app = http.createServer ( function(request,response){
    var arg = url.parse(request.url).query;
    var query = querystring.parse(arg); 
    response.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*'
      })
    if(request.url!=='/favicon.ico'){
        let room = query.room
        let user = query.user;

        if( connectRoom[room] && connectRoom[room][user] ){
            let json = {
                success:false,
                message:user + ' waiting another player contectes...'
            }
            response.end( JSON.stringify(json) )
            return;
        }
        
        if( connectRoom[room] && connectRoom[room].full){
            let json = {
                success:false,
                message:room + ' room is already full, try another room...'
            }
            response.end( JSON.stringify(json) )
            return;
        }
        
        if( !connectRoom[room] ){
            connectRoom[room] = {
                full:false,
                event:Event(),
            }
            connectRoom[room][user] = {
                role:'black',
                canDown:false,
            }
        }else{ 
            connectRoom[room].full = true
            connectRoom[room][user] = {
                role:'red',
                canDown:true,
            }
        }
        let json = {
            success: true,
            room:    room,
            role:    connectRoom[room][user]['role']
        }
        response.end( JSON.stringify(json) )
        
    }
} ) 

app.listen(8000);