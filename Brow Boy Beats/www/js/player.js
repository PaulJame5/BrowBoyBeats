// This is the player class where there are fuctions readily availble to be used

const LEFT_KEY = 37;
const RIGHT_KEY = 39;


// Player Class
function Player(init_position={x:0.0,y:0.0}, name="")
{
    this.name = name;
    
    this.transform = new Transform(init_position); // initilised Values

    this.input = new Input();

}

// Player.prototype = {
//     get name() {
//         return this.name;
//     },
//     set name(newName) {
//         this.name = newName
//     }
// }

// Unit.prototype = {
//     get name() {
//           return this._data;
//       },
//       set accreation(value) {
//           this._data = value
//       },
// }
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
            this.transform.position.getX();
            this.player_transform.position.x -= player_speed;
        }
        else if(this.RightInput() === true)
        {
            console.log("r");
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





    
String.prototype.getName = function() 
{
    return Player (this.name);
}

  


Player.prototype.RenderPlayer = function()
    {
        // Draw Player Sprite in here
    }


Player.prototype.getName = function()
{
    return this.name;
}

// }