// This is the player class where there are fuctions readily availble to be used



class Player
{
    constructor(player_health,player_transform)
    {
        player_health = new Health();
        this.player_health = player_health;

        player_transform = new Transform();
        this.player_transform = player_transform;

    }
}


// Used to initialise player class
///<summary> 
/// init_posX: initialise position X to this
/// init_posY: initialise position Y to this
/// init_health: initialise health to this
function Initialise(init_posX,init_posY, init_health)
{
    this.player_transform.position.x = init_posX;
    this.player_transform.y = init_posY;
    this.player_health.health = init_health;
    
}



// Move function for checking all types of inputs from the user
function Move()
{
    // Left and Right Movement (We can only ever be one or the other)
    if(LeftInput())
    {
        this.player_transform.position.x -= player_speed;
    }
    else if(RightInput())
    {
        this.player_transform.position.x += player_speed;
    }

    // Up and Down Movement (Like left and right we can only ever be one or the other)
    if(UpInput())
    {
        this.player_transform.position.y += player_speed;
    }
    else if(DownInput())
    {
        this.player_transform.position.y -= player_speed;
    }

}


/* Input Detection for Player */
function LeftInput()
{
    // if left input return true

    // else return false
}

function RightInput()
{
    // if right input return true

    // else return false
}

function UpInput()
{
    // if up input return true

    // else return false
}

function DownInput()
{
    // if down input return true

    // else return false
}
/* End Input Detection for Player */



function RenderPlayer()
{
    // Draw Player Sprite in here
}

