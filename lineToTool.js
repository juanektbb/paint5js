//Function for the line tool
function LineToTool(){
    
    //Variables for icon and name of the tool
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

    //Other variables for pre-default mouse position and status of tool
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

    //Main function for drawing the line
	this.draw = function(){
        
        //Checks IF mouse has been pressed
		if(mouseIsPressed){
            
            //IF the position of the mouse is on its default value, it updates the position of the mouse when pressing
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true; //Varible for drawing is true
				loadPixels(); //Displays the (pixels data) on the window (canvas)
			}
            
            //Shows a PREVIEW of the line before stoping the click
			else{
				updatePixels(); //This updates the line (pixels data) for preview before stop pressing the mouse
				line(startMouseX, startMouseY, mouseX, mouseY); //The line for preview
			}

		}
        
        //IF the mouse is not pressed anymore but the DRAWING varaible is true (ready to draw) then...
		else if(drawing){
			//line(startMouseX, startMouseY, mouseX, mouseY); //Draw the ACTUAL line (MAKES DOUBLE)
			drawing = false; //Finish the drawing 
			startMouseX = -1; //Set again the pre-default value of mouse position
			startMouseY = -1; //Set again the pre-default value of mouse position
		}
	};


}