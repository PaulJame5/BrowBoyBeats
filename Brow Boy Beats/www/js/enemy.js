// This is the player class where there are fuctions readily availble to be used



// Player Class
function Enemy(init_position={x:0.0,y:0.0},src="",context)
{
    this.name = name;
    
    this.transform = new Transform(init_position); // initilised Values

    input = new Input();
    input.initSelf();
    this.input = input;

    this.speed = 5;

    this.initSpritesheet(src, context);
    
    console.log("Initialised Player");
   
    //=======================



}


Enemy.prototype.initSpritesheet = function(src="",context)
{
    this.sprites = new Sprite();
    this.spritesheet = new Image();   // Create new img element
    this.spritesheet.addEventListener('load', function() 
    {
        // execute drawImage statements here
    }, false);
    
    
    this.spritesheet.src = src; // Set source path
    
    this.enemySprite = this.sprites.sprite
    ({
        xVal : this.transform.position.getX(),
        yVal : this.transform.position.getY(),
        context: context,
        width: 128,
        height: 32,
        image: this.spritesheet,
        numberOfFrames: 4
    });
}


  

// All rendering calls for player should go in here
Enemy.prototype.render = function()
{
    // Draw Player Sprite in here
    this.enemySprite.update();
    this.enemySprite.render(this.transform.position.get());
}


// Update player behaviour in here
Enemy.prototype.update = function()
{

} // end update

// Move funstion for player
Enemy.prototype.move = function()
{
  

} // end move
