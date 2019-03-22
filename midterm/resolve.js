let gameEngin = new GameEngin()
let canClick = false;

$('.btn').click((e)=>{
    
    window.originUser = $('.user').val()
    window.originRoom = $('.room').val()
    if( !originUser || !originRoom ){
        alert('All fields are required, please try again...')
        return;
    }
    $.ajax({
        url:'http://127.0.0.1:8000?room=' + originRoom + '&user=' + originUser,
        success:function(e){
            if(!e.success){
                alert( e.message )
                return;
            }
            let room = originRoom;
            window.role = e.role;
            window.socket = io.connect('http://127.0.0.1:8088');

            socket.on('moveInfo', function (data) {
                console.log(data)
                let roleColor = data.role;
                let id = data.id;
                $('[data-id="'+ id +'"]').css({
                    backgroundColor: roleColor
                })
                setTimeout(()=>{
                    let chess = new Chess( roleColor ,id )
                    gameEngin.add ( chess )
                    gameEngin.win( chess,function(){
                        resetChessBorad()
                        gameEngin.reset()
                    } )
                },200)
            });

            socket.on('userInfo', function (data) {
                if( data.full ){
                    canClick = true
                }
                $('.userInfo').html('')
                for (var user in data){
                    if( user!== 'full' && user!=='event' ){
                        let curretUser = data[user]
                        console.log(user)
                        let html = $(`<div class="user-item">${user}<div>`)
                        html.css({
                            backgroundColor: curretUser['role']
                        })
                        $('.userInfo').append(html)
                    }
                }
            });

            socket.on('who', function (data) {
                for( var user in data){
                    if ( user !== 'full' && user!=='event' ){
                        let curretUser = data[user]
                        if( curretUser.canDown ){
                            tipWho( user )
                            return;
                        }
                    }
                }
            });

            socket.on('escap', function () {
                canClick = false;
                resetChessBorad()
                gameEngin.reset()
                clearUserInfoAndTip()
                alert('Another player disconnected, please reenter room...')
            });

            socket.on('connect', function () {
                socket.emit( 'welcome',{ room:room, user:originUser } );
            });

            socket.on('error', function () {
                socket.disconnect(originRoom)
            });
            socket.on('disconnect', function () {
                socket.disconnect(originRoom)
            });
           
        }
    })
})

function checkLeave(){
    socket.emit('closeRoom',originRoom)
}

function clearUserInfoAndTip(){
    $('.userInfo').html('')
    $('.tip').html('')
}

function tipWho(user){
    $('.tip').html('')
    $('.tip').html(`waiting ${user} goes...`)
}

$('.bordContainer').on('click','.item',function(){
    if( !canClick ){
        return;
    }
    let id = $(this).data('id')
    if(gameEngin.allChess.includes( id )){
        return;
    }
    socket.emit('move', { room:originRoom, id:id, role:role, user:originUser });
})