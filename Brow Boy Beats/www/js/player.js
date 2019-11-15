// This is the player class where there are fuctions readily availble to be used

init_position = {x:0,y:0};
const LEFT_KEY = 37;
const RIGHT_KEY = 39;
// Player Class
function Player(init_position)
{

    var transform = new Transform(init_position); // initilised Values

    this.transform = transform;
}



    // Used to initialise player class
    ///<summary> 
    /// init_posX: initialise position X to this
    /// init_posY: initialise position Y to this
    /// init_health: initialise health to this
    // Initialise(init_posX,init_posY)
    // {
    //     this.player_transform.position.x = init_posX;
    //     this.player_transform.y = init_posY;
    
    // }



    // Move function for checking all types of inputs from the user
    Player.prototype.Move = function()
    {
        // Left and Right Movement (We can only ever be one or the other)
        if(this.LeftInput())
        {
            this.player_transform.position.x -= player_speed;
        }
        else if(this.RightInput())
        {
            this.player_transform.position.x += player_speed;
        }

        // Up and Down Movement (Like left and right we can only ever be one or the other)
        if(this.UpInput())
        {
            this.player_transform.position.y += player_speed;
        }
        else if(this.DownInput())
        {
            this.player_transform.position.y -= player_speed;
        }

    } /* End Player Move */




/* Input Detection for Player */

// if left key detected return true otherwise return false
Player.prototype.LeftInput = function()
    {
        // event listener for detecting keyboard input
        document.addEventListener('keydown', function(event) 
        {
            if(event.keyCode == LEFT_KEY)
            {
                return true;
            }
            return false;
        });
    }


    // if right key detected return true otherwise return false
    Player.prototype.RightInput = function()
    {   
        // event listener for detecting keyboard input
        document.addEventListener('keydown', function(event) 
        {
            if(event.keyCode == RIGHT_KEY)
            {
                console.log("right");
                return true;
            }
            return false;
        });
    }

    Player.prototype.UpInput = function()
    {
    // if up input return true

    // else return false
    }

    Player.prototype.DownInput = function()
    {
    // if down input return true

    // else return false
    }
/* End Input Detection for Player */



Player.prototype.RenderPlayer = function()
    {
        // Draw Player Sprite in here
    }

// }