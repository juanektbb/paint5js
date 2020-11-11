function trailTool(){
    this.name = "trailTool";
    this.icon = "assets/trailTool.jpg";

    //Other variables for pre-default mouse position and status of tool
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    var self = this;
    this.shape = 1;
    this.fill = false;
    
    this.totalStars = 20;
    this.distStarsX = 300;
    this.distStarsY = 100;
    
    this.minSize = 5;
    this.maxSize = 20;
    this.bigStar = false;

    

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
                
				//This updates the line (pixels data) for preview before stop pressing the mouse
                updatePixels();
                            
                //Variables for the creation of the Star Trail            
                var rand_distX;
                var rand_distY;
                var rand_size;           
                var rand_fill;        

                //Loop for STARS        
                for(var i = 0; i < this.totalStars; i++){
                    
                    //Gets a random number for X with a same range from left to right
                    distX1 = mouseX + parseInt(this.distStarsX);
                    distX2 = mouseX - parseInt(this.distStarsX);
                    rand_distX = random(distX1, distX2);
                    
                    //Gets a random number for Y with a same range from up to down
                    distY1 = mouseY + parseInt(this.distStarsY);
                    distY2 = mouseY - parseInt(this.distStarsY);
                    rand_distY = random(distY1, distY2);
                    
                    //Sizes and fill
                    rand_size = random(this.minSize, this.maxSize);
                    rand_fill = random(0,180);
                    
                    fill(rand_fill);
                    star(rand_distX, rand_distY, rand_size, (rand_size * 30) / 70, 5); 
                    
                 } 
                   
                //This would create always a main star (Rejected)
//                if(this.bigStar == true){
//                    fill(0);
//                    star(mouseX , mouseY , 70, 30, 5);  
//                }


                //This function was taken from: https://p5js.org/examples/form-star.html - It was adapted by us
                function star(x, y, size1, size2, npoints) {
                    var angle = TWO_PI / npoints;
                    var halfAngle = angle/2.0;

                    beginShape();
                    for (var a = 0; a < TWO_PI; a += angle) {
                        var sx = x + cos(a) * size1;
                        var sy = y + sin(a) * size1;
                        vertex(sx, sy);
                        sx = x + cos(a+halfAngle) * size2;
                        sy = y + sin(a+halfAngle) * size2;
                        vertex(sx, sy);
                    }
                    endShape(CLOSE);
                }
  
                
// THIS CODE CREATES A HEART BUT IT WILL BE USED FOR FUTURE UPGRADES                
//                var wowX = 15;
//                var wowY = 15;
//                  
//                fill(actualColour);
//                stroke(actualColour);
//                ellipse(mouseX - wowX, mouseY - wowY - 5, wowX + 25, wowY + 25);
//                ellipse(mouseX + wowX, mouseY - wowY - 5, wowX + 25, wowY + 25);
//                triangle(mouseX - wowX - 23, mouseY - wowY + 6,
//                        mouseX + wowX + 23, mouseY - wowY + 6,
//                        mouseX, mouseY + wowY + 15)
//                rect(mouseX - 5, mouseY - 30, 10, 10)
                
                
                
                
			}

		
        
        //IF the mouse is not pressed anymore but the DRAWING varaible is true (ready to draw) then...
		}else if(drawing){
			drawing = false; //Finish the drawing 
			startMouseX = -1; //Set again the pre-default value of mouse position
			startMouseY = -1; //Set again the pre-default value of mouse position
            
		}
	}
    
    fill(actualColour);
    stroke(actualColour);
    
    this.unselectTool = function(){
		//clear options
		$(".options").html("");
	};
    
    
    

    //This function creates options for the tool
	this.populateOptions = function(){
        
        
		$(".options").append("<div class='optionCont'>Stars: <input id='starRange' type='range' min='1' max='30' value='" + this.totalStars + "' class='slider'> <input type='number' id='starInput' value='" + this.totalStars + "' min='1' max='30'> </div>");
        
		$(".options").append("<div class='optionCont'> Max X Distance: <input id='distRangeX' type='range' min='1' max='500' value='" + this.distStarsX + "' class='slider'> <input type='number' id='distInputX' value='" + this.distStarsX + "' min='1' max='200'> </div>");

        $(".options").append("<div class='optionCont'> Max Y Distance: <input id='distRangeY' type='range' min='1' max='200' value='" + this.distStarsY + "' class='slider'> <input type='number' id='distInputY' value='" + this.distStarsY + "' min='1' max='200'> </div>");

        $(".options").append("<div class='optionCont'> Range of Size: <input type='number' min='1' max='100' id='minInput' value='" + this.minSize + "'> <input type='number' id='maxInput' value='" + this.maxSize + "' min='1' max='100'> </div>");
        
        
		//Functionality for the number of STARS
		$("#starRange").bind("input", function(){
            self.totalStars = $("#starRange").val();
            $('#starInput').prop('value',$("#starRange").val());   
		});
        
        $("#starInput").bind("input", function(){
            self.totalStars = $("#starInput").val();
            $('#starRange').prop('value',$("#starInput").val());
		});
        
        
        //Functionality for the distance in X axis
		$("#distRangeX").bind("input", function(){
            self.distStarsX = $("#distRangeX").val();
            $('#distInputX').prop('value',$("#distRangeX").val());   
		});
        
        $("#distInputX").bind("input", function(){
            self.distStarsX = $("#distInputX").val();
            $('#distRangeX').prop('value',$("#distInputX").val());
		});
        
        
        //Functionality for the distance in Y axis
		$("#distRangeY").bind("input", function(){
            self.distStarsY = $("#distRangeY").val();
            $('#distInputY').prop('value',$("#distRangeY").val());   
		});
        
        $("#distInputY").bind("input", function(){
            self.distStarsY = $("#distInputY").val();
            $('#distRangeY').prop('value',$("#distInputY").val());
		});       
        
        
        //Functionality for the different sizes
        $("#minInput").bind("input", function(){
            self.minSize = $("#minInput").val();
            
            //This doesn't allow to increase over the maxSize
            if($("#minInput").val() > self.maxSize){
                self.minSize = self.maxSize; 
                $("#minInput").prop('value',self.maxSize);
            }
            
		});    
        $("#maxInput").bind("input", function(){
            self.maxSize = $("#maxInput").val();
            
            //This doesn't allow to decrease over the minSize
            if($("#maxInput").val() < self.minSize){
                self.maxSize = self.minSize; 
                $("#maxInput").prop('value',self.minSize);
            }
            
		});    
        
	}

}