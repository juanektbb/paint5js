function SprayCanTool(){
    this.name = "sprayCanTool";
    this.icon = "assets/sprayCan.jpg";
    
    this.points = 13;
    this.spread = 10;
    this.draw = function(){
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.
        if(mouseIsPressed){
            for(var i = 0; i < this.points; i++){
                point(random(mouseX-this.spread, mouseX + this.spread), //Gets a random X coord of (x-10, x+10)
                    random(mouseY-this.spread, mouseY+this.spread));    //Gets a random Y coord of (y-10, y+10)
            }
        }
    }
}
