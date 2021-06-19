
//var xhr = new XMLHttpRequest();

let huffman
let request
let data
let button
let w =innerWidth
let h=innerHeight
let datum
let resp ='spayse'
let patt
let req=[]
let body=[]
let usepic
let x 
let y 


let r
let g 
let b
let name
let ipAddress
let bubAddress
let pic 
let motto
let user={}
let cb
let fr
let logo
let socket
let wbalance 
let address
let bHeight 
let peers={}
let XML
//const socket = io();


let estrings=""

let atree
let message
let beeper={}
let amount
let recipient
let button1

let bubtx=[]
let inp11
let inp21
let input12
let socket1
let socket2 
peers=[]
let sendIT
let answer
let aTX
let ftree 

function preload(){
 sata = loadJSON("userdata.json")

 logo= loadImage('icon.png')
user=sata

io= io.connect(window.location.href, {cors:{
          origin:'http://127.0.0.1:42042 ',
  ReferrerPolicy:"same-origin"
    }

})
console.log(JSON.stringify(ftree))

socket=io
// request.post.XMLHttpRequest({uri:'/api/transact', body:'{{"amount":"20","recipient": "4f4a8cdcad017c8adaecae6cae598b630800762782fe324a4…d9f9829cfbba7b449162551c34c23ddd96e8f26e75e6e8873"}}'}, function(er, response) {
  //if(er)
   // throw new Error("XML PUT failed (" + er + "): HTTP status was " + response.status);
 // console.log("Stored the XML");
//})

}
function setup(){

   createCanvas(innerWidth-30,innerHeight)
  

   socket.on('connection', (socket)=>{
    io.set('origins', '*:*');
     socket.emit('hi',"hello"  )
     console.log("hello sent")
        console.log(socket)


   })

pixelDensity(1)
  socket.on('addPeers', peers =>{

          for (let peer of peers){
              peer[socket.id] = socket;
            socket.connect(peer)
              console.log(peer)
                if (peer.id === socket.id)
                  continue;
                console.log('sending init receive to ' + socket.id);
                socket.emit('initReceive', socket.id);
              }
         

          }
   )
     

   socket.on("wallet",getWallet)
   socket.on("blockNumber",getHeight)
	socket.on('sxtx', showTX)
        socket.on('goodmine', minegood)

   w=w/4
   h=h/3.5
     
   x =w/8
   y =h/8
 

let biarrays=[]

   inp11 = createInput('enter address to send coin to')
   inp11.position(x*1.9, y*21)
   inp21 = createInput('enter amount to send')
   inp21.position(x*1.9, y*22.1)
   inp11.size(100)
   inp21.size(35)





  button = createButton('click send')
  button.position(x*2, y*23.3)
  button.mousePressed(toSnd)

  button2 = createButton('mine blocks')
  button2.position(x*12, y*8.3)
  button2.mousePressed(letsMine)



  
 user.toString()
    { return `
   Name: ${user.name},
 ip Address:${user.ipAddress},
      bub Wallet: ${user.bubAddress},
       Picture:${user.pic},
           Motto: ${user.motto}`}


           
}

 function blast(){
   socket.emit('hi',"hello"  )
 console.log("hello sent")
 socket.emit('blockHeight',"hello"  )
 }

let smarta
 function getWallet(smarta){
wbalance=smarta.balance
address=smarta.address
console.log( smarta)
socket.emit('blockHeight',"hello"  )
 }

let kk
 function getHeight(kk){
bHeight=kk
  console.log( kk)
   }

  

   
  function toSnd(){
  
   let amount=inp21.value()
     let recipient=inp11.value()
    let sendIT =true
bubtx=[amount,recipient]
socket.emit('sndTx',bubtx)
}

function letsMine(){
socket.emit('doMining')

}

function showTX(transaction){
console.dir(transaction)
aTX=JSON.stringify(transaction)
return  aTX
}
function minegood(message){
console.dir(messsage)
beeper=message
return  beeper
}


function draw(){


let beepera


    background(110, 60, 220)



  
image(logo,w/2-w/4+w*1.2,h/6*12,w,w)
strokeWeight(2)
 stroke(112,88,158)

balance()

network()
 
   paner()


   winns()
if (aTX){fill(255)
  textSize(13 * w / 200)
text(aTX,x*2, y*24.3)
}
if (beepera!=beeper){fill(255)
  textSize(13 * w / 200)
text(beeper,x*12, y*9.1)
}


    
}




function winns() {
  fill(255)
  textSize(22 * w / 200)
  text('Network', x * 13.6, y * 3)

  fill(255) 
  textSize(22 * w / 200)
  text("User", x * 4, y * 3)
  textSize(50)
  fill(55)

  fill(255)
  textSize(22 * w / 200)
  text('Balance', x * 24, y * 3)
  fill(0)

  textSize(16 * w / 200)
  text(user.name, x * 1.35, y * 5)
  text(user.ipAddress, x * 1.35, y * 6.4)

  text(user.motto, x * 1.35, y * 8)

  fill(115)
  rect(x * 1.2, y * 13.8, w * 3.6, h * .26)
  push()
  fill(0)
  textSize(10 * w / 211)
  text("Address : " + address, x * 1.8, y * 15)
  pop()
  fill(0)
  textSize(16 * w / 200)
  text("Balance : " + wbalance, x * 22.3, y * 5)
  fill(0)
  textSize(16 * w / 200)
  text( bHeight, x * 12, y * 5)




  fill(115)
  rect(x, y * 16.6, w * 0.677, h * 1.35)

  fill(130, 112, 188)
  rect(x * 1.3, y * 16.98, w * 0.6, h * 1.266)
}

function paner(){

  fill(115)
  rect(x-15, y, w*1.2, h*1.35)

  fill(130, 112, 188)
  rect(x + w/17.0-17, y +h/10, w * 1.1, h * 1.1)

}
 
function balance() {


  fill(115)
  rect(x + w * 1.26-12, y, w * 1.2, h * 1.35)

  fill(130, 112, 188)
  rect(x + w / 17.3+ w * 1.26-11, y + h / 10, w * 1.1, h * 1.1)

 


}


function network(){

 
  fill(115)
  rect(x + w * 2.54-15, y, w * 1.2, h * 1.35)
  
  fill(130, 112, 188)
  rect(x + w / 17.64 + w * 2.53-13, y + h / 10, w * 1.1, h * 1.1)
  
   }

