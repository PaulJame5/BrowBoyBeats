/* Input Detection for Player */

function Input()
{
    this.pressedRight = false;
}


// if left key detected return true otherwise return false
Input.prototype.LeftInput = function()
{
    
    // event listener for detecting keyboard input
    document.addEventListener('keydown', function(LeftInput) 
    {
        if(event.keyCode == 37)
        {
            return true;
        }
        return false;
    });
};

// if right key detected return true otherwise return false
Input.prototype.RightInput = function(event)
{   
    this.pressedRight = false;
    // event listener for detecting keyboard input
    document.addEventListener('keydown', function(event) 
    {
        if(event.keyCode == 39)
        {
            this.pressedRight = true;
            console.log("pressed");
        }
          
    });

    if(this.pressedRight)
    {
        console.log("pressed");
    }
    else
    {
        console.log("nope");
    }

    return this.pressedRight;

     // return false;
}; // End right input

  Input.prototype.UpInput = function()
  {
  // if up input return true

  // else return false
  }

  Input.prototype.DownInput = function()
  {
  // if down input return true

  // else return false
  }
/* End Input Detection for Player */
