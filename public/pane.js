
class Pane{

   constructor(x,y,w,h,r,g,b,req,res){
   
       this.x = x
       this.y = y
       this.w = w
       this.h = h
       this.r = r
       this.g = g
       this.b = b
   
   
       this.button(x,y,resp)
   
   
   
       button(x) {
           button = createButton('click send')
           button.position(this, x, this.y)
           button.mousePressed(res)
   
   
       }
   
       show(){
         this.newMethod()
       
     }

   newMethod() {
      fill(g)
      rect(this.x * 1.15, this.y * 1.15, this.w * 1.15, this.h * 1.15)


      fill(r, g, b)
      rect(this.x * .6, this.y * .6, this.w * .6, this.h * .6)


      fill(255)
      textSize(22)
      text(res, x, y)
   }
   }



