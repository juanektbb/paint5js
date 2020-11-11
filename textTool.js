function textTool(){
    this.name = "textTool";
    this.icon = "assets/textTool.jpg";
    

    this.draw = function(){
        
        fill(0);
        textSize(24);
        text(contents, 50, 50, 300, 300);
    }
    
    
        this.keyTyped = function() {
        contents += key;
        }
        
    };