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
        
        //This IF checks if the mouse is clicked on the canvas area, not outside of it.
        if(mouseIsPressed && mouseX > 0 && mouseX < window.innerWidth && 
           mouseY > 0 && mouseY < canvasContainer.innerHeight()){
            
            //IF the position of the mouse is on its default value, it updates the position of the mouse when pressing
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true; //Varible for drawing is true
				loadPixels(); //Displays the (pixels data) on the window (canvas)
                
            //Shows a PREVIEW of the line before stoping the click   
			}else{
                
				updatePixels(); //This updates the line (pixels data) for preview before stop pressing the mouse
                
                //Checks if there is fill or not
                if(this.fill == true){
                    fill(actualColour);
                }else{
                    noFill();
                    stroke(actualColour);
                }
                
                //Creates squares
                if(this.shape == 1){
                    rect(startMouseX, startMouseY, mouseX-startMouseX,  mouseY-startMouseY);
                        
                //Creates ellipse
                }else if(this.shape == 2){
                    ellipse(startMouseX, startMouseY, (mouseX - startMouseX) * 2,  (mouseY - startMouseY) * 2);  
                  
                //Creates triangle
                }else{     
                    triangle(startMouseX, startMouseY,
                            mouseX, startMouseY,
                            (mouseX - startMouseX) / 2 + startMouseX, mouseY);  
                            
                }
                
			}

		}
        
        //IF the mouse is not pressed anymore but the DRAWING varaible is true (ready to draw) then...
		else if(drawing){
			drawing = false; //Finish the drawing 
			startMouseX = -1; //Set again the pre-default value of mouse position
			startMouseY = -1; //Set again the pre-default value of mouse position
            
		}
        
	}

    
    //Clear options and reset the default values
    this.unselectTool = function(){
		$(".options").html("");
        
        fill(actualColour);
        stroke(actualColour);
	};
    
    
	//Options section
	this.populateOptions = function(){
		
        //Rectangle button set as default and functionality
        $(".options").append("<img src='assets/square.jpg' class='optImage optShape' id='rectangleButton'>");
        $("#rectangleButton").css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
		$("#rectangleButton").on("click", function(){
            self.shape = 1;
            $(".options .optShape").css('outline','none');
            $("#rectangleButton").css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
            
		});
        
        //Ellipse button and functionality
        $(".options").append("<img src='assets/ellipse.jpg' class='optImage optShape' id='ellipseButton'>");
		$("#ellipseButton").on("click", function(){
            self.shape = 2;
            $(".options .optShape").css('outline','none');
            $("#ellipseButton").css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
            
		});
        
        //Triangle button and functionality
        $(".options").append("<img src='assets/triangle.jpg' class='optImage optShape' id='triangleButton'>");
		$("#triangleButton").on("click", function(){
            self.shape = 3;
            $(".options .optShape").css('outline','none');
            $("#triangleButton").css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
        });
        
        //Create the 2 buttons and default value
        $(".options").append("<img src='assets/noFill.jpg' class='optImage optFill' id='nofillButton'>");
        $(".options").append("<img src='assets/fill.jpg' class='optImage optFill' id='fillButton'>");
        $("#nofillButton").css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
        
		//Functionality of the fill buttons
		$("#fillButton").on("click", function(){
            self.fill = true;
            $(".options .optFill").css('outline','none');
            $("#fillButton").css({'outline':'3px solid #f26cd1','outline-offset':'2px'});    
        });
        
        $("#nofillButton").on("click", function(){
            self.fill = false;
            $(".options .optFill").css('outline','none');
            $("#nofillButton").css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
        });
        
    }

}