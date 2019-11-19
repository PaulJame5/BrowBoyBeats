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

Player.prototype.Update = function()
{
    this.input.Update();
    this.Move();
}

Player.prototype.Move = function()
{
    // Up Down Movement
    if(this.input.pressedDown)
    {
        this.transform.position.setY(this.transform.position.getY() - this.speed);
    }
    else if(this.input.pressedUp)
    {
        this.transform.position.setY(this.transform.position.getY() + this.speed);
    }

    // Left Right Movement
    if(this.input.pressedLeft)
    {
        this.transform.position.setX(this.transform.position.getX() - this.speed);
    }
    else if(this.input.pressedRight)
    {
        this.transform.position.setX(this.transform.position.getX() + this.speed);
    }

}
