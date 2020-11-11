function eraserTool(){
    this.name = "eraserTool";
    this.icon = "assets/eraser.jpg";
    this.sizeEraser = 30;

    var self = this;

	var previousMouseX = -1;
	var previousMouseY = -1;    
   
    
	this.draw = function(){
        
        //IF the mouse is clicked in the canvas area, not outside of it!
        if(mouseIsPressed && mouseX > 0 && mouseX < window.innerWidth && 
           mouseY > 0 && mouseY < canvasContainer.innerHeight() ){

			//Check if they previousX and Y are -1. set them to the current mouse X and Y if they are.
			if(previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
               
			//If we already have values for previousX and Y we can draw a line from there to the current mouse location
			}else{
                stroke(255);
                strokeWeight(this.sizeEraser);
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;

			}
                        
		//If the user has released the mouse we want to set the previousMouse values back to -1.
		}else{
			previousMouseX = -1;
			previousMouseY = -1;

		}
        
	}
     
    //Clear options 
    this.unselectTool = function(){
		$(".options").html("");
        
        strokeWeight(1);
        stroke(actualColour);
	}
    
        

    
    
    //This function creates options for the tool
	this.populateOptions = function(){
        
        
		$(".options").append("<div class='optionCont'>Size: <input id='sizeRange' type='range' min='1' max='100' value='" + this.sizeEraser + "' class='slider'> <input type='number' id='sizeInput' class='sizeInput' value='" + this.sizeEraser + "'> </div>");

		//click handler
		$("#sizeRange").bind("input", function(){
    
            self.sizeEraser = $("#sizeRange").val();
            $('#sizeInput').prop('value',$("#sizeRange").val());
                
		});
        
        //click handler
        $("#sizeInput").bind("input", function(){
    
            self.sizeEraser = $("#sizeInput").val();
            $('#sizeRange').prop('value',$("#sizeInput").val());
                
		});
        
        
	}
    
    
    
    
    
    
        
    }