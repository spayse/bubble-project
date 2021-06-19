

let mousOn=false
class Bubble{
    constructor(name,bubble,time,messnum){
             this.name=name
           this.bubble=bubble      
          this.time=time
         this.messnum=messnum
          this.x =0
           this.y=-200
          this.c=innerWidth/2+innerHeight/2+(350 +200)/2
         this.d=this.c-mouseX+mouseY
         this.but=createButton("x")
    }
imous(){
    
if(this.d-this.c < 8 ){mousOn= true}

if(mousOn = true&&mouseIsPressed ){
    this.c=mouseX
}

}

pane1(){
this.imous()
    fill(130, 44, 280)
    rect(this.x,this.y,350,200)
    fill(99)
    rect(this.x+5, this.y+5,340,190)

}


    show(ts,y){
       this.y=y
      
         this.x=innerWidth-375
        this.y+=y
     
        this.pane1()
          
             textSize(13)  
             fill(255) 
      text(this.bubble,this.x+10,this.y+75,333) 
        text(this.name,this.x+150,this.y+20) 
        fill (100)
        text("#"+this.messnum,this.x+10,this.y+20) 

    
        //text(like)
      //  text(pop)
       // text(push)
       textSize(ts)
    }
} 