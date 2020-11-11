//THIS TOOL HAS BEEN REVISED AND DEBUGGED

function LineToTool(){
    
    //Variables for icon and name of the tool
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

    //Other variables for pre-default mouse position and status of tool
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    
    //Variables for size
    this.sizeLine = 1;
    var self = this;
    
    //Main function for drawing the line
	this.draw = function(){
        
        //This IF checks if the mouse is clicked on the canvas area, not outside of it
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
                strokeWeight(this.sizeLine);
				line(startMouseX, startMouseY, mouseX, mouseY); //The line for preview
                
			}

        //IF the mouse is not pressed anymore but the DRAWING varaible is true (ready to draw) then...   
		}else if(drawing){
            
			//line(startMouseX, startMouseY, mouseX, mouseY); //Draw the ACTUAL line (MAKES DOUBLE)
			drawing = false; //Finish the drawing 
			startMouseX = -1; //Set again the pre-default value of mouse position
			startMouseY = -1; //Set again the pre-default value of mouse position
		}
	}
    
    
    //Keep the pixels in the canvas - Necessary to avoid bugs in the program! 
	this.unselectTool = function(){
		//updatePixels();
		//clear options
		$(".options").html("");
        strokeWeight(1);
	};
    
    
    //This function creates options for the tool
	this.populateOptions = function(){

        //Creates the button for each of the options of sizes
        for(var i = 7; i > 0; i--){
            $('.options').append('<button style="height: 21px; padding: 0px 5px;" title=' + i + '><img src="assets/line' + i + '.png"></button>');
        }
        $("button[title=1]").css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
        
        
		//When a button is pressed, the value is stored in a function
		$(".options button").on("click", function(){
    
            $(".options button").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
            self.sizeLine = $(this).attr('title'); 
                
		});
        
	};
    
}