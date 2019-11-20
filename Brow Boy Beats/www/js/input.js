/* Input Detection for Player *//* Input Detection for Player */

class Test_Input
{
    constructor()
    {
        document.addEventListener('keyup', function(e) {e.preventDefault();}, {passive: false});
        this.boundRecursiveUpdate = () => this.update(this);

        // We want to simulate 1000 ms / 60 FPS = 16.667 ms per frame every time we run update()
        this.timestep = 1000 / 60;


        this.pressedLeftt = false;
        this.pressedRightt = false;
    }

    initSelf()
    {
        console.log("this far");
        document.addEventListener("keydown", () => this.onInputDown(event)); 
        document.addEventListener("keyup", () => this.onInputUp(event)); 
    }

    
    onInputDown(e)
    {
        if(e.keyCode == 37)
        {
            this.pressedLeftt = true;
        }
        else if (e.keyCode == 39)
        {
            this.pressedRightt = true;
        }
    }

    onInputUp(e)
    {
        if(e.keyCode == 37)
        {
            console.log("left Up");
            this.pressedLeftt = false;
        }
        else if (e.keyCode == 39)
        {
            console.log("right Up");
            this.pressedRightt = false;
        }
    }
    
}

function Input()
{
    this.pressedRight = false;
    this.pressedDown = false;
    this.pressedLeft = false;
    this.pressedUp = false;

}

// if Left key detected return true otherwise return false
Input.prototype.leftInput = function()
{
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
Input.prototype.rightInput = function()
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
Input.prototype.upInput = function()
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
Input.prototype.downInput = function()
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
Input.prototype.update = function()
{
    this.leftInput();
    this.rightInput();
    this.upInput();
    this.downInput(); 
}; // End Update


/* End Input Detection for Player */
