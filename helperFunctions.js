function HelperFunctions(){
	
	//Jquery click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	$("#clearButton").on("click", function(){
		background(255,255,255);
		
		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		loadPixels();
	});

	//event handler for the save image button. saves the canvsa to the
	//local file system. 
	$("#saveImageButton").on("click", function(){
		save('myCanvas.png');
	});
    
    
    
    $("#loadImageButton").on("click", function(){
		$("#files").click();
	});

    
    
    
    
     function handleFileSelect(evt) {
            var files = evt.target.files; // FileList object

            // Loop through the FileList and render image files as thumbnails.
            for (var i = 0, f; f = files[i]; i++) {

              // Only process image files.
              if(!f.type.match('image.*')){
                continue;
              }

              var reader = new FileReader(); 

              //Closure to capture the file information.
              reader.onload = (function(theFile){

                    return function(e){
                        //Creates the thumbnail        
                        $("#content").append("background-image", "url('" +e.target.result+ "')");        
                    }

              })(f);

              // Read in the image file as a data URL.
              reader.readAsDataURL(f);

            }
          }

          document.getElementById('files').addEventListener('change', handleFileSelect, false);


    
    
    
    
    
}

