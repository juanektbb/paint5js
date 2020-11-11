function filterTool(){
    this.name = "filterTool";
    this.icon = "assets/blurTool.jpg";
    this.sizeEraser = 10;

    var self = this;

	var previousMouseX = -1;
	var previousMouseY = -1;
    this.filter = 1;
   
    // Main function to adding the filters onto the application
	this.draw = function(){
		
		//This IF checks if the mouse is clicked on the canvas area, not outside of it.
            
            if(mouseIsPressed && mouseX > 0 && mouseX < window.innerWidth && 
           mouseY > 0 && mouseY < canvasContainer.innerHeight() ){
				
				
                // Threshold filter
                if(this.filter == 1)
                    {
						// This filter converts the pixels to black and white depending if they are above or below the threshold.
                        filter(THRESHOLD);
                    }
				
				// Black and White filter
				else if(this.filter == 2)
                        {
							// This filter converts the image to monochrome. No other value is used as a parameter. 
                            filter(GRAY);
                            
                        }
				// Invert filter
				else if(this.filter == 3)
                        {
							// This filter sets every pixel to the invert colour.
                            filter(INVERT);
                            
                        }
				
				// Blur filter
				else if(this.filter == 4)
                        {
							// This filter executes a Gaussian blur. The parameter is 2.
							
                            filter(BLUR, 2);
                            
                        }
				// Posterize Filter
				else if(this.filter == 5)
                        {
							// This filter limits each channel of the image to number of colour specified as 3 which is our parameter.
                            filter(POSTERIZE, 3);
                            
                        }
				// Erode filter
				else if(this.filter == 6)
                        {
							// Reduces the light areas. No parameter is used. 
                            filter(ERODE);
						}
						
				// Dilate Filter
				else{
                            // Increases the light areas. No parameter is used.
                            filter(DILATE);
                            
                        }

			
        } 
        
    }
    
    
    //Clear options
    this.unselectTool = function(){
		$(".options").html("");
	};

	//Options section
	this.populateOptions = function(){
		
        //Creating all the buttons for the options section
        $(".options").append("<button id='thresholdButton' class='optionButtonClass'>Threshold</button>");
        $(".options").append("<button id='blackandwhiteButton' class='optionButtonClass'>Black and White</button>");
        $(".options").append("<button id='invertButton' class='optionButtonClass'>Invert</button>");        
        $(".options").append("<button id='posterizeButton' class='optionButtonClass'>Posterize</button>");
        $(".options").append("<button id='blurButton' class='optionButtonClass'>Blur</button>");      
        $(".options").append("<button id='erodeButton' class='optionButtonClass'>Erode</button>");
        $(".options").append("<button id='dilateButton' class='optionButtonClass'>Dilate</button>");
        
        //Functionality for all the buttons of the options 
		$("#thresholdButton").on("click", function(){
            $(".options .optionButtonClass").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
                self.filter = 1;
		});
        
		$("#blackandwhiteButton").on("click", function(){
            $(".options .optionButtonClass").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
                self.filter = 2;
		});

		$("#invertButton").on("click", function(){
            $(".options .optionButtonClass").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
                self.filter = 3;
        });

		$("#blurButton").on("click", function(){
            $(".options .optionButtonClass").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
                self.filter = 4;
        });

		$("#posterizeButton").on("click", function(){
            $(".options .optionButtonClass").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
                self.filter = 5;
        });

		$("#erodeButton").on("click", function(){
            $(".options .optionButtonClass").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
                self.filter = 6;
        });

		$("#dilateButton").on("click", function(){
            $(".options .optionButtonClass").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
                self.filter = 7;
        });
		
    }
    
    
    
    }