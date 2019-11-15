/* Input Detection for Player */

function Input()
{
    this.pressedRight = false;
    this.pressedDown = false;
    this.pressedLeft = false;
    this.pressedUp = false;
}


// if left key detected return true otherwise return false
Input.prototype.setRightPressed = function(pressed = false)
{
    this.pressedRight = pressed;
};

// if left key detected return true otherwise return false
Input.prototype.LeftInput = function()
{
    // event listener for detecting keyboard input
    var pressed = document.addEventListener('keydown', function(event) 
    {
        if(event.keyCode == 37)
        {
            return true;
        }
        return false;
    });
    

};

// if right key detected return true otherwise return false
Input.prototype.inputUpdate = function()
{
    // left right
    document.addEventListener('keydown', function(event) 
    {
        switch (event.keyCode) 
        {
            case 37: // Left
            this.pressedLeft = true;
            break;

            case 39: // Right
            this.pressedRight = true;

            default: // neither
            this.pressedRight = false;
            this.pressedLeft = false;
            break;
        }
    });

    // up down
    document.addEventListener('keydown', function(event) 
    {
        switch (event.keyCode) 
        {
            case 38: // Up
            this.pressedUp = true;
            break;

            case 40: // Down
            this.pressedDown = true;
            break;

            default: // neither
            this.pressedUp = false;
            this.pressedDown = false;
            break;
        }
    });

};

// if right key detected return true otherwise return false
Input.prototype.RightInput = function()
{   
    this.inputUpdate();

    console.log(this.pressedRight);

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
