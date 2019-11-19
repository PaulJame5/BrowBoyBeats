// This is the player class where there are fuctions readily availble to be used

const LEFT_KEY = 37;
const RIGHT_KEY = 39;


// Player Class
function Player(init_position={x:0.0,y:0.0}, name="")
{
    this.name = name;
    
    this.transform = new Transform(init_position); // initilised Values

    this.input = new Input();

    this.speed = 2;

}





// Returns the player Name
String.prototype.getName = function() 
{
    return Player (this.name);
}

  

// All rendering calls for player should go in here
Player.prototype.renderPlayer = function()
{
    // Draw Player Sprite in here
}


// Update player behaviour in here
Player.prototype.update = function()
{
    // Call the update function of player input first then perform and check actions after
    this.input.update();
    this.move();
} // end update

// Move funstion for player
Player.prototype.move = function()
{
    // Up Down Movement
    if(this.input.pressedDown)
    {
        // get current y position and then subtract speed
        this.transform.position.setY(this.transform.position.getY() - this.speed);
    }
    else if(this.input.pressedUp)
    {
        // get current y position and then add speed
        this.transform.position.setY(this.transform.position.getY() + this.speed);
    } // end up down movement check

    // Left Right Movement
    if(this.input.pressedLeft)
    {
        // get current x position and then subtract speed
        this.transform.position.setX(this.transform.position.getX() - this.speed);
    }
    else if(this.input.pressedRight)
    {
        // get current x position and then add speed
        this.transform.position.setX(this.transform.position.getX() + this.speed);
    } // end left right movement check

} // end move
