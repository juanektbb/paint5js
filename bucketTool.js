function bucketTool(){
    this.name = "bucketTool";
    this.icon = "assets/bucket.jpg";


    this.draw = function(){
        

        background(actualColour);
        
		loadPixels();
        
        console.log(actualColour);
        
    };

}