// This is the player class where there are fuctions readily availble to be used



// Player Class
function Player(init_position={x:0.0,y:0.0}, name="",src="",context)
{
    this.name = name;
    
    this.transform = new Transform(init_position); // initilised Values

    this.input = new Input();

    this.speed = 2;

    this.initSpritesheet(src, context);
    
    
   
    //=======================



}


Player.prototype.initSpritesheet = function(src="",context)
{
    this.sprites = new Sprite();
    this.spritesheet = new Image();   // Create new img element
    this.spritesheet.addEventListener('load', function() 
    {
        // execute drawImage statements here
    }, false);
    
    
    this.spritesheet.src = src; // Set source path
    this.playerSprite = this.sprites.sprite
    ({
        xVal : this.transform.position.getX(),
        yVal : this.transform.position.getY(),
        context: context,
        width: 256,
        height: 32,
        image: this.spritesheet,
        numberOfFrames: 8
    });
}



// Returns the player Name
String.prototype.getName = function() 
{
    return this.name;
}

  

// All rendering calls for player should go in here
Player.prototype.renderPlayer = function()
{
    // Draw Player Sprite in here
    this.playerSprite.update();
    this.playerSprite.render(this.transform.position.get());
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
        this.transform.position.setY(this.transform.position.getY() + this.speed);
    }
    else if(this.input.pressedUp)
    {
        // get current y position and then add speed
        this.transform.position.setY(this.transform.position.getY() - this.speed);
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
