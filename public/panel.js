




class panel{
constructor(x,y,w,h,z,r,g,b){

            this.x=x 
            this.y=y
            this.w=w
            this.h=h
            this.z=z
            this l=0
            this.rt=0
            this.c=w/2,h/2

}


theButtons(){
    inp = createInput("...")
    inp.position(75,220)
    button = createButton('Blow Bubble')
    button.position(85, 245)
    button.mousePressed(doHuff)
}
   // button2 = createButton('Mint Bubble')
    //button2.position(170, 233)
    //button2.mousePressed(mintBubble)

    
bubblemaker(x,y,w,h,r,g,b){
fill(115)
rect(275*r, 190,370, 185)

fill(130, 44, 188,255/r)
rect(277/r, 195*r,365/r, 180*r)
text("huffer :"+encoded,380, 650,620,40)

fill(220)
text(sata.name,x,y,w,h)
fill(0)
 text(inp.value(),355/r, 255,256)
 
}



text(bubmum,52, 650,500,40)

image(bub,width-190,height-190,200,200)
}

