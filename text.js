$(“.options”).append(“<button id=‘thresholdButton’>Threshold</button>”);
		//click handler
		$(“#thresholdButton”).on(“click”, function(){
                self.shape = 1;
            
		});
        
        $(“.options”).append(“<button id=‘blackandwhite’>BlackandWhite</button>”);
		//click handler
		$(“#blackandwhiteButton”).on(“click”, function(){
                self.shape = 2;
            
		});
        $(“.options”).append(“<button id=‘invertButton’>Invert</button>”);
		//click handler
		$(“#invertButton”).on(“click”, function(){
            
                self.shape = 3;
        });
        $(“.options”).append(“<button id=‘blurButton’>Blur</button>”);
		//click handler
		$(“#blurButton”).on(“click”, function(){
            
            self.shape = 4;
            }
            
        });
        $(“.options”).append(“<button id=‘posterizeButton’>Posterize</button>”);
		//click handler
		$(“#posterizeButton”).on(“click”, function(){
            
            self.shape = 5;
            }
            
        });
        $(“.options”).append(“<button id=‘dilateButton’>Dilate</button>”);
		//click handler
		$(“#dilateButton”).on(“click”, function(){
            
            self.shape = 6;
            }
            
        });