/* Input Detection for Player */

function Input()
{
    this.pressedRight = false;
    this.pressedDown = false;
    this.pressedLeft = false;
    this.pressedUp = false;


    this.rightKey = function() {
        this.pressedRight = true;
    };
    
}


// if left key detected return true otherwise return false
Input.prototype.setRightPressed = function(pressed = false)
{
    this.pressedRight = pressed;
};

// if Left key detected return true otherwise return false
Input.prototype.LeftInput = function()
{
    // declare self for use within event listener
    var self = this;

    // event listener for detecting keyboard input going down
    document.addEventListener('keydown', function(event) 
    {
        if(event.keyCode == 37)
        {
            self.pressedLeft = true;
        }
    });  
    
    // set to false if key is lifted up
    document.addEventListener('keyup', function(event) 
    {
        if(event.keyCode == 37)
        {
            self.pressedLeft = false;
        }
    });

}; // End Left Input

// if Right key detected return true otherwise return false
Input.prototype.RightInput = function()
{
    // declare self for use within event listener
    var self = this;

    // event listener for detecting keyboard input going down
    document.addEventListener('keydown', function(event) 
    {
        if(event.keyCode == 39)
        {
            self.pressedRight = true;
        }
    });  
    
    // set to false if key is lifted up
    document.addEventListener('keyup', function(event) 
    {
        if(event.keyCode == 39)
        {
            self.pressedRight = false;
        }
    });

}; // END Right Input

// if Up key detected return true otherwise return false
Input.prototype.UpInput = function()
{
    // declare self for use within event listener
    var self = this;

    // event listener for detecting keyboard input going down
    document.addEventListener('keydown', function(event) 
    {
        if(event.keyCode == 38)
        {
            self.pressedUp = true;
        }
    });  
    
    // set to false if key is lifted up
    document.addEventListener('keyup', function(event) 
    {
        if(event.keyCode == 38)
        {
            self.pressedUp = false;
        }
    });

}; // End Up Input

// if Down key detected return true otherwise return false
Input.prototype.DownInput = function()
{
    // declare self for use within event listener
    var self = this;

    // event listener for detecting keyboard input going down
    document.addEventListener('keydown', function(event) 
    {
        if(event.keyCode == 40)
        {
            self.pressedDown = true;
        }
    });  
    
    // set to false if key is lifted up
    document.addEventListener('keyup', function(event) 
    {
        if(event.keyCode == 40)
        {
            self.pressedDown = false;
        }
    });

}; // End DOwn Input


// update input detection
Input.prototype.Update = function()
{
    this.LeftInput();
    this.RightInput();
    this.UpInput();
    this.DownInput(); 
}; // End Update


/* End Input Detection for Player */
