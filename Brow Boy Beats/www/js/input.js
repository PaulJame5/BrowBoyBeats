/* Input Detection for Player */

function Input()
{

}

// if left key detected return true otherwise return false
    Input.prototype.LeftInput = function()
{
    // event listener for detecting keyboard input
    document.addEventListener('keydown', function(event) 
    {
        if(event.keyCode == 37)
        {
            return true;
        }
        return false;
    });
}

// if right key detected return true otherwise return false
Input.prototype.RightInput = Boolean()
  {   
      console.log("listening");
      // event listener for detecting keyboard input
      document.addEventListener('keydown', function(event) 
      {
          console.log("listening inside");
          if(event.keyCode == 39)
          {
              var player_speed = 5;
              console.log("righty");
              
             // alert(this.getName());
              //alert(this.getSecret());
              console.log("hearing true");
              return true;
          }
          
          console.log("hearing false within");
          return false;
      });
      console.log("hearing false");
     // return false;
  } // End right input

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
