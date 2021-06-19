class BlocImg {

		constructor(x,y,b2){

      this.img
		
      this.width= b2/4/2
      this.p=[]
      this.p=b2
      this.x =this.width
		  this.y=this.width
      this.img = createImage(this.width,this.width);

      this.index
      

    }



   

  // helper for writing color to array by daniel schiffman
 writeColor(b2, x, y, red, green, blue, alpha) {
   pixelDensity(0)
   let index = (x + y * this.width) * 4;
    this.p.pixels[index] = red;
    this.p.pixels[index + 1] = green;
    this.p.pixels[index + 2] = blue;
    this.p.pixels[index + 3] = alpha;
    this.index=index
    let i=framecount%b2.length
    for (this.y = 0; this.y < img.height; this.y++) {
    for (this.x = 0; this.x < img.width; this.x++) {
      let red = this.p[index]
      let green = this.p[index]
      let blue = this.p[index]
      let alpha = this.p[index]
      this.writeColor(img, x, y, red, green, blue, alpha);
    }
  }
  }
//shows the block

show(x,y){
x=x

y=y

let i=frameCount%b2.length

this.img.loadPixels()
for (this.y = 0; this.y < img.width; this.y=i) {
    for (x = 0; x < img.width; this.x=i) {
      let red = this.p[i]
      let green = this.p[i]
      let blue =this.p[i]
      let alpha =this.p[i]
      writeColor(img, x, y, red, green, blue, alpha);
    }    }    
    img.updatePixels();
    image(img, x, y);
 

}

}
