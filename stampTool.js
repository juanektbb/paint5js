function stampTool(){
    this.name = "stampTool";
    this.icon = "assets/stampTool.jpg";

    //Other variables for pre-default mouse position and status of tool
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    var self = this;
    this.shape = 1;
    
    
	this.draw = function(){
        
		//This IF checks if the mouse is clicked in the canvas area, not outside of it.
        if(mouseIsPressed && mouseX > 0 && mouseX < window.innerWidth && 
           mouseY > 0 && mouseY < canvasContainer.innerHeight()){
            
            //IF the position of the mouse is on its default value, it updates the position of the mouse when pressing
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true; //Varible for drawing is true
				loadPixels(); //Displays the (pixels data) on the window (canvas)
                
			}else{
                
                //This updates the line (pixels data) for preview before stop pressing the mouse
				updatePixels();
                
                
                    if(this.shape == 1){

                        // antenna
                        fill(30,190,38);
                        rect(mouseX-1, mouseY-38,2,4)

                        // left leg and foot

                        fill(0,0,0);
                        rect(mouseX-10, mouseY+20,8,15);
                        fill(192,192,192);
                        rect(mouseX-11, mouseY+32,10,4);

                        // left arm and hand

                        fill(0,0,0);
                        rect(mouseX-20, mouseY-13.8,8,30);
                        fill(255,0,0);
                        rect(mouseX-21, mouseY+15,10,4);

                        // right arm and hand

                        fill(0,0,0);
                        rect(mouseX+12, mouseY-13.8,8,30);
                        fill(255,0,0);
                        rect(mouseX+11, mouseY+15,10,4);

                        // right leg and foot

                        fill(0,0,0);
                        rect(mouseX+2, mouseY+20,8,15);
                        fill(192,192,192);
                        rect(mouseX+2, mouseY+32,10,4);

                        // body drawing
                        fill(192,192,192);
                        rect(mouseX-15, mouseY-14, 30, 40);

                        // head drawing
                        fill(192,192,192);
                        rect(mouseX-10, mouseY - 35, 20, 20)

                        // left eye drawing
                        fill(0,0,0);
                        rect(mouseX-8, mouseY-30,6,6);
                        fill(255,255,255);
                        rect(mouseX-6, mouseY-28.5,1,2);

                        // right eye drawing

                        fill(0,0,0);
                        rect(mouseX+2, mouseY-30,6,6);
                        fill(255,255,255);
                        rect(mouseX+4, mouseY-28.5,1,2);


                        // cosmetics
                        // mouth
                        fill(255,0,0);
                        rect(mouseX-7.5,mouseY-21,15,4.5)
                        fill(0,0,0);
                        rect(mouseX-6.7,mouseY-21,1,4.5)
                        rect(mouseX-4.7,mouseY-21,1,4.5)
                        rect(mouseX-2.7,mouseY-21,1,4.5)
                        rect(mouseX-0.7,mouseY-21,1,4.5)
                        rect(mouseX+1.7,mouseY-21,1,4.5)
                        rect(mouseX+3.7,mouseY-21,1,4.5)
                        rect(mouseX+5.7,mouseY-21,1,4.5)

                        // patch

                        stroke(0,0,0);
                        fill(15,120,190);
                        ellipse(mouseX+7.5, mouseY-4,8,8)
                                    
                    }else if(this.shape == 2){
                                                   
                        fill(50,40,23);
                        triangle(mouseX+40,mouseY-150,
                         mouseX+125,mouseY-300,
                         mouseX+210,mouseY-150)


                        //main building

                        fill(139,69,19);
                        rect(mouseX+50,mouseY-150,150,150);


                        // door
                        fill(0,0,0);
                        rect(mouseX+95,mouseY-80,50,80);

                        fill(255,255,255);
                        ellipse(mouseX+105, mouseY-40, 7, 7);

                        // left window
                        fill(0, 191, 255);
                        rect(mouseX+60, mouseY-140, 40, 40);
                        fill(0,0,0);
                        rect(mouseX+76, mouseY-140, 7, 40);
                        rect(mouseX+60, mouseY-125, 40, 7);

                        // right window
                        fill(0, 191, 255);
                        rect(mouseX+150, mouseY-140, 40, 40);
                        fill(0,0,0);
                        rect(mouseX+165, mouseY-140, 7, 40);
                        rect(mouseX+150, mouseY-125, 40, 7);
                            
                            
                    }else if (this.shape == 3){
							
             
                        stroke(0); 

                        //Ears
                        fill(0);
                        ellipse(mouseX + 38,mouseY + 12,12,12);
                        ellipse(mouseX + 12,mouseY + 12,12,12);

                        fill(150);
                        ellipse(mouseX + 13,mouseY + 13,8,8);
                        ellipse(mouseX + 37,mouseY + 13,8,8);

                        //Arms
                        noStroke();
                        fill(0,0,0);
                        quad(mouseX + 15,mouseY + 38,
                             mouseX + 3,mouseY + 52,
                             mouseX + 9,mouseY + 56,
                             mouseX + 20,mouseY + 40);
                        ellipse(mouseX + 6,mouseY + 54,7,7);

                        quad(mouseX + 35,mouseY + 38,
                             mouseX + 47,mouseY + 52,
                             mouseX + 41,mouseY + 56,
                             mouseX + 30,mouseY + 40);
                        ellipse(mouseX + 44,mouseY + 54,7,7);

                        //Body
                        stroke(0);
                        fill(0);
                        ellipse(mouseX + 25,mouseY + 50,28,32);

                        fill(255);
                        ellipse(mouseX + 25,mouseY + 50,23,25);

                        fill(0);
                        ellipse(mouseX + 25,mouseY + 56,0.5,0.5);

                        //Head
                        fill(255);
                        ellipse(mouseX + 25,mouseY + 25,32,28);

                        //Eyes
                        fill(0);
                        ellipse(mouseX + 19,mouseY + 22,9,8);
                        ellipse(mouseX + 31,mouseY + 22,9,8);

                        fill(255);
                        ellipse(mouseX + 20,mouseY + 23,6,6);
                        ellipse(mouseX + 30,mouseY + 23,6,6);

                        fill(0,0,0);
                        noStroke();
                        ellipse(mouseX + 20,mouseY + 23,4,4);
                        ellipse(mouseX + 30,mouseY + 23,4,4);

                        fill(255);
                        ellipse(mouseX + 21,mouseY + 22,1,1);
                        ellipse(mouseX + 31,mouseY + 22,1,1);

                        //Nose
                        fill(0);
                        ellipse(mouseX + 25,mouseY + 30,8,7);

                        fill(255);
                        rect(mouseX + 20.5,mouseY + 30,9,7);

                        stroke(0);
                        fill(0);
                        line(mouseX + 24.5,mouseY + 28,
                             mouseX + 24.5,mouseY + 32);

                        noFill();
                        arc(mouseX + 23, mouseY + 33, 4, 2, 0, PI);
                        arc(mouseX + 27, mouseY + 33, 4, 2, 0, PI);

                        //Legs
                        fill(0,0,0);
                        noStroke();
                        triangle(mouseX + 38,mouseY + 55,
                                 mouseX + 26,mouseY + 66,
                                 mouseX + 38,mouseY + 66);
                        ellipse(mouseX + 33,mouseY + 67,10,12);

                        triangle(mouseX + 12,mouseY + 55,
                                 mouseX + 24,mouseY + 66,
                                 mouseX + 12,mouseY + 66);
                        ellipse(mouseX + 17,mouseY + 67,10,12);
                            
					}else if (this.shape == 4){
                        
                        image(img, mouseX, mouseY, startMouseX-mouseX, startMouseY-mouseY);
                        
                        
					}else if (this.shape == 5){

                        // left leg and foot
                        noStroke();
                        fill(255,255,255);
                        rect(mouseX+2, mouseY+55,8,15);
                        fill(192,192,192);
                        rect(mouseX+1, mouseY+70,10,4);

                        // left arm and hand

                        fill(255,255,255);
                        rect(mouseX-4, mouseY+20.8,8,30);
                        fill(199,0,0);
                        rect(mouseX-6, mouseY+50,10,4);

                        // right arm and hand

                        fill(255,255,255);
                        rect(mouseX+26, mouseY+20.8,8,30);
                        fill(199,0,0);
                        rect(mouseX+26, mouseY+50,10,4);

                        // right leg and foot

                        fill(255,255,255);
                        rect(mouseX+18, mouseY+55,8,15);
                        fill(192,192,192);
                        rect(mouseX+17, mouseY+70,10,4);

                        // body drawing
                        fill(255,192,203);
                        rect(mouseX, mouseY+20, 30, 40);

                        // head drawing
                        fill(255,192,203);
                        rect(mouseX+5, mouseY-2, 20, 20)

                        // left eye drawing
                        fill(0,0,0);
                        rect(mouseX+8, mouseY+3,6,6);        
                        fill(255,255,255);
                        rect(mouseX+10, mouseY+5,1,2);

                        // right eye drawing

                        fill(0,0,0);
                        rect(mouseX+17.5, mouseY+3,6,6);
                        fill(255,255,255);
                        rect(mouseX+20, mouseY+5,1,2);


                        // cosmetics
                        // mouth
                        fill(255,0,0);
                        rect(mouseX+8,mouseY+12,15,4.5)

                        // patch

                        stroke(0,0,0);
                        fill(15,120,190);
                        ellipse(mouseX+7.5, mouseY+31,8,8)
                        
					}else if (this.shape == 6){

                        stroke(0);
                        fill(0);
                        arc(mouseX + 51.4,mouseY + 54.2,12,13.5,10*PI/6,PI/2);

                        fill(85,174,40);
                        quad(mouseX + 5,mouseY + 5,
                             mouseX + 16,mouseY + 3,
                             mouseX + 57,mouseY + 51,
                             mouseX + 56.5,mouseY + 56);

                        fill(117,215,68);
                        quad(mouseX + 5,mouseY + 5,
                             mouseX + 11,mouseY + 2,
                             mouseX + 56.5,mouseY + 55.5,
                             mouseX + 51,mouseY + 61);

                        line(mouseX + 21,mouseY + 24,
                             mouseX + 26,mouseY + 21);
                        line(mouseX + 38,mouseY + 45,
                             mouseX + 44,mouseY + 41);

                        fill(57,129,20);
                        ellipse(mouseX + 10,mouseY + 3.5,12,5);

                        //Leaves
                        fill(85,174,40);
                        arc(mouseX + 10,mouseY + 20,10,5,5/6*PI,11/6*PI, CHORD);
                        arc(mouseX + 28,mouseY + 40.5,5,8,2*PI,PI, CHORD);

                        arc(mouseX + 40,mouseY + 22,10,3,PI,2/3*PI, CHORD);
                        arc(mouseX + 56,mouseY + 40,10,5,PI/4,5/4*PI, CHORD);

                        line(mouseX + 12,mouseY + 17.5,
                             mouseX + 15,mouseY + 18);
                        line(mouseX + 30,mouseY + 40,
                             mouseX + 34,mouseY + 41);

                        line(mouseX + 34.5,mouseY + 22,
                             mouseX + 34,mouseY + 24);
                        line(mouseX + 57,mouseY + 42,
                             mouseX + 54,mouseY + 47);
						
					}else if (this.shape == 7){
                        
                        fill(35,68,250); 
                        rect(mouseX + 10,mouseY + 230,400,30);  

                        //Windows
                        fill(48,166,235);
                        rect(mouseX + 80,mouseY + 150,50,80);
                        rect(mouseX + 130,mouseY + 150,50,80);
                        rect(mouseX + 180,mouseY + 150,60,80);
                        rect(mouseX + 240,mouseY + 150,50,80);
                        rect(mouseX + 290,mouseY + 150,50,80);

                        //Horizontal grey bars
                        fill(100);
                        rect(mouseX + 80,mouseY + 150,260,30);
                        rect(mouseX + 80,mouseY + 215,260,15);

                        //Pillars
                        fill(200 + 30,45 + 30,60 + 30);
                        rect(mouseX + 60,mouseY + 150,20,80);
                        rect(mouseX + 340,mouseY + 150,20,80);
                        rect(mouseX + 165,mouseY + 150,10,80);
                        rect(mouseX + 245,mouseY + 150,10,80);

                        //Stairs
                        fill(66,78,112);  
                        rect(mouseX + 170,mouseY + 210,80,30);
                        rect(mouseX + 160,mouseY + 230,100,30);
                        rect(mouseX + 150,mouseY + 250,120,30);

                        //Roof
                        fill(15,117,51);
                        quad(mouseX + 90,mouseY + 125,
                             mouseX + 330,mouseY + 125,
                             mouseX + 380,mouseY + 165,
                             mouseX + 40,mouseY + 165);
                        rect(mouseX + 90,mouseY + 95,240,30);
                        rect(mouseX + 90,mouseY + 95,240,15);
                        quad(mouseX + 90,mouseY + 30,
                             mouseX + 330,mouseY + 30,
                             mouseX + 370,mouseY + 100,
                             mouseX + 50,mouseY + 100);
						
					}else if (this.shape == 8){
                        
                        fill(0);
                        stroke(0);

                        strokeWeight(2.5);
                        ellipse(mouseX + 40,mouseY + 40,30,30);

                        //Legs
                        line(mouseX + 50,mouseY + 30,mouseX + 70,mouseY + 25);
                        line(mouseX + 50,mouseY + 35,mouseX + 70,mouseY + 35);
                        line(mouseX + 50,mouseY + 40,mouseX + 70,mouseY + 45);
                        line(mouseX + 70,mouseY + 45,mouseX + 80,mouseY + 55);

                        line(mouseX + 40,mouseY + 30,mouseX + 10,mouseY + 25);
                        line(mouseX + 30,mouseY + 35,mouseX + 10,mouseY + 35);
                        line(mouseX + 30,mouseY + 40,mouseX + 10,mouseY + 45);
                        line(mouseX + 10,mouseY + 45,mouseX,mouseY + 55);

                        line(mouseX + 30,mouseY + 50,mouseX + 20,mouseY + 55);
                        line(mouseX + 20,mouseY + 55,mouseX + 18,mouseY + 65);
                        line(mouseX + 50,mouseY + 50,mouseX + 60,mouseY + 55);
                        line(mouseX + 60,mouseY + 55,mouseX + 62,mouseY + 65);

                        //eyes
                        fill(255);
                        stroke(0);
                        strokeWeight(2);
                        ellipse(mouseX + 34,mouseY + 31,12,12);
                        ellipse(mouseX + 47,mouseY + 31,15,15);

                        line(mouseX + 27,mouseY + 21,mouseX + 37,mouseY + 22);
                        line(mouseX + 43,mouseY + 21,mouseX + 53,mouseY + 18);

                        //Pupils and mouth
                        fill(0);
                        ellipse(mouseX + 34,mouseY + 31,3,3);
                        ellipse(mouseX + 47,mouseY + 31,3,3);

                        fill(255, 166, 166);
                        strokeWeight(1);
                        arc(mouseX + 40, mouseY + 42, 15, 18, 0, PI, CHORD);

                        //tooth
                        fill(255);
                        triangle(mouseX + 40,mouseY + 42,
                         mouseX + 45,mouseY + 42,
                         mouseX + 43,mouseY + 46);
					
					}else{
						
						var robotX = mouseX -250;
						var robotY = mouseY -250;
						
                        // Neck
                        stroke(188);
                        rect(robotX+270, robotY+150, 10, 110);

                        //Body
                        noStroke();
                        fill(255, 200, 0);
                        ellipse(robotX+264, robotY+377, 33, 33);
                        fill(7, 29, 90);
                        rect(robotX+219, robotY+257, 90, 120);
                        fill(255, 200, 0);
                        rect(robotX+219, robotY+274, 90, 6);

                        //Head
                        fill(7, 29, 90);
                        ellipse(robotX+276, robotY+155, 45, 45);
                        fill(255);
                        ellipse(robotX+288, robotY+150, 14, 14);
                        fill(0);
                        ellipse(robotX+288, robotY+150, 3, 3);
                        fill(255, 200, 0);
                        ellipse(robotX+263, robotY+148, 5, 5);
                        ellipse(robotX+296, robotY+130, 4, 4);
                        ellipse(robotX+305, robotY+162, 3, 3);
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
    

    //Clear styles and removes options section
    this.unselectTool = function(){
        fill(actualColour);
        stroke(actualColour);
        
		$(".options").html("");
	}
    

	//Options section
	this.populateOptions = function(){
		
        //Creating all the buttons for the options section
        $(".options").append("<button id='robotButton' class='optionButtonClass'>Robot</button>");
		$(".options").append("<button id='houseButton' class='optionButtonClass'>House</button>");
        $(".options").append("<button id='pandaButton' class='optionButtonClass'>Panda</button>");
        $(".options").append("<button id='imageButton' class='optionButtonClass'>Image</button>");
        $(".options").append("<button id='femalerobotButton' class='optionButtonClass' >Female Robot</button>");
        $(".options").append("<button id='bambooButton' class='optionButtonClass'>Bamboo</button>");
        $(".options").append("<button id='housetwoButton' class='optionButtonClass'>Second House</button>");
        $(".options").append("<button id='spiderButton' class='optionButtonClass'>Spider</button>");
        $(".options").append("<button id='experimentalrobotButton' class='optionButtonClass'>Experimental Robot</button>");
        
        $("#robotButton").css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
        
        //Functionality for all the buttons of the options        
		$("#robotButton").on("click", function(){
            $(".options .optionButtonClass").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
            self.shape = 1;
		});
        
		$("#houseButton").on("click", function(){
            $(".options .optionButtonClass").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
                self.shape = 2;
		});
        
		$("#pandaButton").on("click", function(){
            $(".options .optionButtonClass").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'});       
                self.shape = 3;
        });

		$("#imageButton").on("click", function(){
            $(".options .optionButtonClass").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
                self.shape = 4;
        });
		
		$("#femalerobotButton").on("click", function(){
            $(".options .optionButtonClass").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
                self.shape = 5;
        });

		$("#bambooButton").on("click", function(){
            $(".options .optionButtonClass").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
                self.shape = 6;
        });
		
		$("#housetwoButton").on("click", function(){
            $(".options .optionButtonClass").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'}); 
                self.shape = 7;
        });

		$("#spiderButton").on("click", function(){
            $(".options .optionButtonClass").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
                self.shape = 8;
        });
		
		$("#experimentalrobotButton").on("click", function(){
            $(".options .optionButtonClass").css('outline','none');
            $(this).css({'outline':'3px solid #f26cd1','outline-offset':'2px'});
                self.shape = 9;
        });
    }

}