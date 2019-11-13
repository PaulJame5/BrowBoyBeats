// This js is for the player object of the game


var player_health = new Health();

var player_maxHealth = 100;

var player_position = new Transform();

var player_speed = 12;


// Used to initialise player class
///<summary> 
/// init_posX: initialise position X to this
/// init_posY: initialise position Y to this
/// init_health: initialise health to this
function Initialise(init_posX,init_posY, init_health)
{
    player_position.x = init_posX;
    player_position.y = init_posY;
    player_health.health = init_health;
}



// Move function for checking all types of inputs from the user
function Move()
{
    // Left and Right Movement (We can only ever be one or the other)
    if(LeftInput())
    {
        player_position.x -= player_speed;
    }
    else if(RightInput())
    {
        player_position.x += player_speed;
    }

    // Up and Down Movement (Like left and right we can only ever be one or the other)
    if(UpInput())
    {
        player_position.y += player_speed;
    }
    else if(DownInput())
    {
        player_position.y -= player_speed;
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

