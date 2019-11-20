/* Input Detection for Player */

function Input(document)
{
    this.pressedRight = false;
    this.pressedDown = false;
    this.pressedLeft = false;
    this.pressedUp = false;
    this.document = document;

}

// if Left key detected return true otherwise return false
Input.prototype.leftInput = function()
{
    var self = this;
    // event listener for detecting keyboard input going down
    this.document.addEventListener('keydown', function(event) 
    {
        if(event.keyCode == 37)
        {
            self.pressedLeft = true;
        }
    });  
    
    // set to false if key is lifted up
    this.document.addEventListener('keyup', function(event) 
    {
        if(event.keyCode == 37)
        {
            self.pressedLeft = false;
        }
    });


}; // End Left Input

// if Right key detected return true otherwise return false
Input.prototype.rightInput = function()
{
    // declare self for use within event listener
    var self = this;

    // event listener for detecting keyboard input going down
    this.document.addEventListener('keydown', function(event) 
    {
        if(event.keyCode == 39)
        {
            self.pressedRight = true;
        }
    });  
    
    // set to false if key is lifted up
    this.document.addEventListener('keyup', function(event) 
    {
        if(event.keyCode == 39)
        {
            self.pressedRight = false;
        }
    });

}; // END Right Input

// if Up key detected return true otherwise return false
Input.prototype.upInput = function()
{
    // declare self for use within event listener
    var self = this;

    // event listener for detecting keyboard input going down
    this.document.addEventListener('keydown', function(event) 
    {
        if(event.keyCode == 38)
        {
            self.pressedUp = true;
        }
    });  
    
    // set to false if key is lifted up
    this.document.addEventListener('keyup', function(event) 
    {
        if(event.keyCode == 38)
        {
            self.pressedUp = false;
        }
    });

}; // End Up Input

// if Down key detected return true otherwise return false
Input.prototype.downInput = function()
{
    // declare self for use within event listener
    var self = this;

    // event listener for detecting keyboard input going down
    this.document.addEventListener('keydown', function(event) 
    {
        if(event.keyCode == 40)
        {
            self.pressedDown = true;
        }
    }); 
    
    // set to false if key is lifted up
    this.document.addEventListener('keyup', function(event) 
    {
        if(event.keyCode == 40)
        {
            self.pressedDown = false;
        }
    });

}; // End DOwn Input


// update input detection
Input.prototype.update = function()
{
    this.leftInput();
    this.rightInput();
    this.upInput();
    this.downInput(); 
}; // End Update


/* End Input Detection for Player */
