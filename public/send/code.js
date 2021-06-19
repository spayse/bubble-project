let req
let button
let bubtx=[]
let inp
let inp2
let socket
let socket2 
let sendIT
peers=[]
function preload() {

io= io.connect(window.location.href, {cors:{
    origin: '* '
    
    }
})
 
socket=io


}


  function setup(){

    createCanvas(innerWidth-30,innerHeight)
   inp = createInput('enter address to send coin to')
   inp.position(125,300)
   inp2 = createInput('enter amount to send')
   inp2.position(125,330)
   inp.size(300)
   inp2.size(80)


   socket.on('connection', (socket)=>{
    io.set('origins', '*');
     socket.emit('initSendhi',socket.id  )
     console.log("hello sent")
        console.log(socket)
        socket.emit("sndPers", "peers")
        

                socket.on('addPeers', peers =>{

                    for (let peer of peers){
                        peer[socket.id] = socket;
                      
                        console.log(peer)
                          if (peer.id === socket.id)
                            continue;
                          console.log('sending init receive to ' + socket.id);
                          socket.emit('initReceive', socket.id);
                        }
                   

                    }
             )

            socket.on('signal', data => {
                console.log('sending signal from ' + socket.id + ' to ', data);
                if (!peers[data.socket_id])
                  return;
                peers[data.socket_id].emit('signal', {
                  socket_id: socket.id,
                  signal: data.signal
                });
              });


    }) 
n=0
   socket.on('disconnect', () => {
    console.log('socket disconnected ' + socket.id);
    while(n<16){
        setInterval(socket.emit( "connect"),30000)
    n++}})


   socket.on( 'sxTx',  console.log('got tx'))
    
   
   
   button = createButton('send BUB')
    button.position(125, 350)
    button.mousePressed(toSnd)



    }
  
   function toSnd(){
  
  //let amount=inp2.value()
 // let   recipient=inp.value()
 //  let bubtx=[recipient,amount]
   
      
sendIT =true
    }
 
 
 



function draw(){

 req={}
  background(115,77,180)


if(sendIT){

req={ method:"POST",
   origin:"*"
}
 req.body ={ amount:inp2.value(),
   recipient:inp.value()
}

   





 io.emit( '/api/transact',)
                         console.log(req),sendIT = false
}

   



  }
 