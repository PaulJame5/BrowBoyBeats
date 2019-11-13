// This js is for the player object of the game


var player_health = 100;
var player_maxHealth = 100;

var player_position = {x: 0, y: 0};

var player_speed = 12;






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

/*
 *   For Applying Damage to a player
*/
function RemoveHealth(t_damageAmount)
{
    player_health -= t_damageAmount;
}

/*
 *   For Increasing the health value of a player
*/
function AddToHealth(t_increaseAmount)
{
    player_health += t_increaseAmount;
}