function shapeTool(){
    this.name = "shapeTool";
    this.icon = "assets/shapeTool.jpg";

    //Other variables for pre-default mouse position and status of tool
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    var self = this;
    this.shape = 1;
    this.fill = false;
    
    

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
                if(this.shape == 1)
                    {
                        rect(startMouseX, startMouseY, mouseX, mouseY);
                    }else if(this.shape == 2)
                        {
                            ellipse(startMouseX, startMouseY, mouseX, mouseY);
                        }else{
                            triangle(startMouseX, startMouseY,
                                    startMouseX-30, mouseY+30,
                                    mouseX+50, mouseY+30);
                        }
                //The line for preview
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
    
    this.unselectTool = function(){
		updatePixels();
		//clear options
		$(".options").html("");
	};

	//adds a button and click handler to the options area. When clicked 
	this.populateOptions = function(){
		
        $(".options").append("<button id='rectangleButton'>Rectangle</button>");
		//click handler
		$("#rectangleButton").on("click", function(){
                self.shape = 1;
            
		});
        
        $(".options").append("<button id='ellipseButton'>Ellipse</button>");
		//click handler
		$("#ellipseButton").on("click", function(){
                self.shape = 2;
            
		});
        $(".options").append("<button id='triangleButton'>Triangle</button>");
		//click handler
		$("#triangleButton").on("click", function(){
            
                self.shape = 3;
        });
        $(".options").append("<button id='fillButton'>Fill</button>");
		//click handler
		$("#fillButton").on("click", function(){
            
            if (self.fill == false){
                self.fill = true;
                $(this).text("Fill")
            }else{
                self.fill = false;
                $(this).text("Don't Fill")
            }
            
        });
    }

}