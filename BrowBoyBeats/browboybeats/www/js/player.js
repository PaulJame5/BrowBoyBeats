// This is the player class where there are fuctions readily availble to be used

/// TO DO: Remove touch controller from player and put into iput class



// Player Class
function Player(init_position={x:0.0,y:0.0}, name="",src="",context)
{
    this.name = name;
    
    this.transform = new Transform(init_position); // initilised Values
    this.sceneManager = new SceneManager();
    input = new Input();
    input.initSelf();
    this.input = input;

    this.tapped = false;
    this.speed = 5;

    
    this.initSpritesheet(src, context);
    
    
    
    
   
    //===========================================
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

 
// All rendering calls for player should go in here
Player.prototype.renderPlayer = function(ctx)
{
    ctx.beginPath();
    ctx.arc(this.xCircle, this.yCircle, this.innerRadius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.stationaryCircleX, this.stationaryCircleY, this.outerRadius, 0, 2 * Math.PI);
    ctx.stroke();
    /**creates and draws a circle at a target position */
    ctx.beginPath();
    ctx.arc(this.targetCircleX, this.targetCircleY, this.innerRadius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.attackX, this.attackY, this.innerRadius, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw Player Sprite in here
    this.playerSprite.update();
    this.playerSprite.render(this.transform.position.get());
}

Player.prototype.getRight = function()
{
    return this.input.pressedRight;
}

Player.prototype.getLeft = function()
{
    return this.input.pressedLeft;
}

Player.prototype.getUp = function()
{
    return this.input.pressedUp;
}

Player.prototype.getDown = function()
{
    return this.input.pressedDown;
}
// Update player behaviour in here
Player.prototype.update = function()
{    
    this.move();
} // end update



// Move funstion for player
Player.prototype.move = function()
{

        if(this.input.pressedRight)
        {
            // get current x position and then subtract speed
            this.transform.position.setX(this.transform.position.getX() + this.speed);
            //ctx.translate(this.speed, 0);
        }

        //left
        else if(this.input.pressedLeft)
        {
            // get current x position and then add speed
            this.transform.position.setX(this.transform.position.getX() - this.speed);
            
        } // end left right movement check

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
 

} // end move




Player.prototype.getName = function()
{
    return this.name;
}