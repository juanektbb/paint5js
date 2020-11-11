//THIS TOOL HAS BEEN REVISED AND DEBUGGED

function bucketTool(){
    this.name = "bucketTool";
    this.icon = "assets/bucket.jpg";
    this.pixelStack;

    this.draw = function(){

        //This IF checks if the mouse is clicked on the canvas area, not outside of it.
        if(mouseIsPressed && mouseX > 0 && mouseX < window.innerWidth && 
           mouseY > 0 && mouseY < canvasContainer.innerHeight()){
    
           background(actualColour);
     
        }
 
    };

}