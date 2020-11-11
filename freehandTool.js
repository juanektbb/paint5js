//THIS TOOL HAS BEEN REVISED AND DEBUGGED

function FreehandTool(){
    
	//Set an icon and a name for the object
	this.icon = "assets/freehand.jpg";
	this.name = "freehand";
    
    //Variables to be able to size
    this.sizePen = 1;
    var self = this;
    
	//To smoothly draw we'll draw a line from the previous mouse location
	//To the current mouse location. The following values store
	//The locations from the last frame. They are -1 to start with because we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;    
    
	this.draw = function(){

        //This IF checks if the mouse is clicked on the canvas area, not outside of it
        if(mouseIsPressed && mouseX > 0 && mouseX < window.innerWidth && 
           mouseY > 0 && mouseY < canvasContainer.innerHeight()){
            
			//Check if they previousX and Y are -1. set them to the current
			//Mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
                
            //If we already have values for previousX and Y we can draw a line from 
			//There to the current mouse location    
			}else{
                strokeWeight(this.sizePen);
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
                
			}
            
        //If the user has released the mouse we want to set the previousMouse values, back to -1.     
		}else{
			previousMouseX = -1;
			previousMouseY = -1;
		
        }

	};
    
    
    //Clear options 
    this.unselectTool = function(){
		$(".options").html("");
        
        strokeWeight(1);
	};
    
    
	//This function creates options for the tool
	this.populateOptions = function(){
		$(".options").html("<div class='optionCont'> Size: <input id='sizeRange' type='range' min='1' max='100' value='" + this.sizePen + "' class='slider'> <input type='number' id='sizeInput' value='" + this.sizePen + "' class='sizeInput' min='1' max='100'> </div>");

		//Click handler
		$("#sizeRange").bind('input', function(){
    
            self.sizePen = $("#sizeRange").val();
            $('#sizeInput').prop('value',$("#sizeRange").val());
                
		});
        
        //Click handler
        $("#sizeInput").bind('input', function(){
    
            self.sizePen = $("#sizeInput").val();
            $('#sizeRange').prop('value',$("#sizeInput").val());
                  
		});
        
	};
   

    
}