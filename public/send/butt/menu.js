





class menu {
    constructor(){
        this.x = 25;
        this.y = 75;
       
    }



show(){ 
     fill(120);
    stroke(20);
    rect(this.x, this.y, width / 7, height - 150);

  fill(255);
  textSize(33);
  text('LINKS ', this.x + 58, this.y + 33);
  fill(11);
  textSize(33);
}



}
