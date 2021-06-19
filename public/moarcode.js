
let uName
let uName1
let uName2
let uName3

let data={}
let scale =1
var inp= {}
let button;
let button2 
let wid 
  let hite
  let c
let userData={}
let findIP
let socket
let apic
let x
let y
function preload(){

  myJSON =loadJSON('userdata.json')
logo = loadImage('bub2.png')


io= io.connect("http://127.0.0.1:42042", {cors:{
  "origin":window.location.href,
"ReferrerPolicy":"same-origin"
}

})

}

let awallet

function setup(){
let c =createCanvas(innerWidth,innerHeight)



getIP(findIP)
console.log(findIP)
let myip = "http://"+findIP.ip+":42042"


    inp = createInput('Enter User Name',);
  inp.position(415 ,420 )
 
uName=inp.value()
inp5 = createInput( myip);
  inp5.position(415 ,450 )
  

uName1=inp5.value()

inp1 = createInput(awallet);

  inp1.position(415 ,480 )
 

uName2=inp1.value()







inp2 = createInput(apic);
  inp2.position(415 ,510 )
 
  
  
  c.drop(gotFile);





uName3=inp2.value()


button = createButton('REGISTER SERVER');
button.position(415,545) 
button.mousePressed(serveReg)

x=200
y=200


socket =io
socket.emit('hi',"hello"  )
console.log("hello sent")
console.log(socket)
socket.on("wallet",getWallet)
socket.on("foaming",(foam)=>{
 huffman.encodeTree() == ftree
 decoded = huffman.decode(foam.bubble)
 bubble= new Bubble(foam.user,decoded,foam.sent,foam.num)
 getFoam(bubble)
})



}

function gotFile(file) {
 let muhpic =  file 
 muhpic.name = "profile" 

 let apic = `${uName1}/img/${muhpic.name}`
 muhpic.filePath=`img/${muhpic.name}`
socket.emit("pic", muhpic)
inp2.value(apic)
 return apic,inp2.value()
}

function getIP(json) {
 
  return findIP=json
  }
function getWallet(wallet){

awallet=wallet.address
inp1.value(awallet)
console.log(awallet)
return awallet

}

function sndWal(){
socket.emit("sndWal")
console.log( "getting wallet")
}



function serveReg() {
   let register={
  "user"      : inp.value(),
  "ipAddress" : uName1,
  "wallet"    : awallet,
  "pic"       : inp2.value()


}
console.log(register)
socket.emit("reg",register)
}









function draw(){

 var r = random(0,100)
  var  g = random(0,5)
 var b = random(101,125)



background(r,g,b)






for (let i=0;i<width/200;i++ ){

  for(let j =0 ;j<height/200 ; j++){
      push()
      //tint(110,177)
      image(logo,x*i,y*j ,200,200 )

   
  
      
      pop()
      
  }
}

x+=5
y+=5
if (y>1500){x=200,y=200}
fill(200,200 )
rect(width/2-500 , 250 , 1000 , 600 );

    fill(112,99,111,200)
    rect(width/2-437 , 300 , 875 , 500 );
textSize(30 );
stroke(19)
text('You Must Register your server to Mine coins; use network', 475 , 295 );
fill(220, 210, 240);



textSize(22 );
stroke(19)
text('choose wisely, one ip address can only be registered once', 552 , 725);
fill(110);
rect (600,450,120,120)
fill(0)
text('drop image', 600 , 510);


}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
}