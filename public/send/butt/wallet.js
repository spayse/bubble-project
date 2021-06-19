let data
let button
let w =innerWidth
let h=innerHeight
let datum
let resp ='spayse'
let patt
let req='spayse'
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
function preload(){
 sata = loadJSON("userdata.json")

 logo= loadImage('icon.png')
user=sata



}
console.log (logo)


function setup(){


  
   createCanvas(innerWidth-30,innerHeight)
  
  
  

   w=w/4
   h=h/3.5
     
   x =w/8-12
   y =h/8
 



  
  


  user.toString()
    { return`
   Name: ${user.name},
 ip Address:${user.ipAddress},
      bub Wallet: ${user.bubAddress},
       Picture:${user.pic},
           Motto: ${user.motto}`}



           
}

 
 

function draw(){

fr = frameRate(24)
    r = random(82, 105)
    g = random(70,90)
    b = random(130, 160)
    background(r, g, b)

image(logo,w/2-w/4+w*1.2,h/6*12,w,w)


balance()



network()

  
   paner()
   
 
   fill(255)
   textSize(22)
   text('Network', x*22.5, y *3)
  
 fill(255)
 textSize(22)
 text("User", x*6, y *3)
    
  fill(255)
  textSize(22)
  text('Balance', x * 39.2, y * 3)
    fill(0)
    stroke(112)
    strokeWeight(2)
    textSize(16)
    text(user.name, x*1.29, y *5.7)
    text(user.ipAddress, x*1.29, y *6.8)
   // text(user.bubAddress, x*1.29 ,y *6.9)
    text(user.motto, x*1.29, y *8)

}




function paner(){

  fill(115)
  rect(x-5, y, w*1.2, h*1.35)

  fill(130, 112, 188)
  rect(x + w/17.0-8, y +h/10, w * 1.1, h * 1.1)

}
 
function balance() {


  fill(115)
  rect(x + w * 1.26, y, w * 1.2, h * 1.35)

  fill(130, 112, 188)
  rect(x + w / 17.3+ w * 1.26, y + h / 10, w * 1.1, h * 1.1)

 


}


function network(){

 
  fill(115)
  rect(x + w * 2.54, y, w * 1.2, h * 1.35)
  
  fill(130, 112, 188)
  rect(x + w / 17.64 + w * 2.53, y + h / 10, w * 1.1, h * 1.1)
  
   }