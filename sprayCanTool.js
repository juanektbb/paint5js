//THIS TOOL HAS BEEN REVISED AND DEBUGGED

function SprayCanTool(){
    this.name = "sprayCanTool";
    this.icon = "assets/sprayCan.jpg";
    
    var self = this;
    
    this.points = 15; //Points - How many pixels of paint for each mouse press
    this.spread = 60; //Spread - How far to spread the paint from the mouse pointer
    
    this.draw = function(){
        
        var randX;
        var randY;
        
        //This IF checks if the mouse is clicked on the canvas area, not outside of it.
        if(mouseIsPressed && mouseX > 0 && mouseX < window.innerWidth && 
           mouseY > 0 && mouseY < canvasContainer.innerHeight()){
  
            for(var i = 0; i < this.points; i++){
                //Creates points randomly, parseInt converts to integers so it doesn't crash.
                randX = random(mouseX - parseInt(this.spread), mouseX + parseInt(this.spread));
                randY = random(mouseY - parseInt(this.spread), mouseY + parseInt(this.spread));
                point(randX,randY);    
            
            }

        }
    
    }
    
    //Clear options 
    this.unselectTool = function(){
		$(".options").html("");
	};
    
    
    //Options section
	this.populateOptions = function(){
        
        //Creates 2 ranges with 2 inputs
        var inpRange = "<div class='optionCont'>Points: <input id='pointsRange' type='range' min='1' max='500' value='" + this.points + "' class='slider'> <input type='number' id='pointsInput' class='sizeInput' value='" + this.points + "'> </div>";
        
        var inpSpread = "<div class='optionCont'>Spread: <input id='spreadRange' type='range' min='1' max='200' value='" + this.spread + "' class='slider'> <input type='number' id='spreadInput' class='sizeInput' value='" + this.spread + "'> </div>"
        
        
        //Place the 2 ranges and 2 inputs
		$(".options").html(inpRange + inpSpread);

        
		//Functionallity for the POINTS range
		$("#pointsRange").bind('input', function(){
            self.points = $("#pointsRange").val();
            $('#pointsInput').prop('value',$("#pointsRange").val());     
		});
        
        //Functionallity for the POINTS input
        $("#pointsInput").bind('input', function(){
            self.points = $("#pointsInput").val();
            $('#pointsRange').prop('value',$("#pointsInput").val());   
		});
        
        //Functionallity for the SPREAD range
		$("#spreadRange").bind('input', function(){
            self.spread = $("#spreadRange").val();
            $('#spreadInput').prop('value',$("#spreadRange").val()); 
		});
        
        //Functionallity for the SPREAD input
        $("#spreadInput").bind('input', function(){
            self.spread = $("#spreadInput").val();
            $('#spreadRange').prop('value',$("#spreadInput").val());  
		});
          
	}
    
    
    
}
