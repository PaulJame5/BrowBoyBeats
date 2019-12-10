// This is the player class where there are fuctions readily availble to be used



// Player Class
function Enemy(init_position={x:0.0,y:0.0},src="",context)
{
    this.name = name;
    
    this.transform = new Transform(init_position); // initilised Values

    input = new Input();
    input.initSelf();
    this.input = input;
    this.player = new Player();
    this.HIVE_MIND_ID = 0;
    this.attackMode = false;
    this.timeInbetweenAttacking = 1.8;
    this.timeSinceLastAttack;
    this.speed = 5;
    this.position = init_position;
    this.playerIndexTargetChoice = 0;

    this.initSpritesheet(src, context);
    this.offsetX = 2.4;
    this.offsetY = 3;

   
    //=======================
    this.targets = 
    {
        LEFT : 0,
        RIGHT : 1,
        TOP: 2,
        BOTTOM: 3,
        TOP_LEFT: 4,
        TOP_RIGHT: 5,
        BOTTOM_LEFT: 6,
        BOTTOM_RIGHT: 7,
        WAIT: 8
    }
    
    this.target = this.targets.LEFT
    
    //--------------------------------------------------------------------
    //Exaple switch statement
    //--------------------------------------------------------------------
    /** 
    switch(target){
        case targets.LEFT:
        
        case targets.RIGHT:
       
        case targets.TOP:
        
        case targets.BOTTOM:
        
    }*/


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
    this.move();
} // end update

// Move funstion for player
Enemy.prototype.setPosition = function(pos = {x:0,y:0})
{
    this.transform.position.setX(pos.x);
    this.transform.position.setY(pos.y);

} // end move
Enemy.prototype.move = function()
{
    var targetX;
    var targetY;
   
    this.target = this.player.getTargetPos();
    console.log("GG" +this.target.x);
    switch (this.target)
    {
        case this.targets.BOTTOM:
            targetY -= this.offsetY;
            break;

        case this.targets.TOP:
            target.y += this.offsetY;
            break;

        case this.targets.LEFT:
            targetX -= this.offsetX ;
            break;

        case this.targets.RIGHT:
            targetX+= this.offsetX ;
            break;

        case this.targets.TOP_LEFT:
            targetY += this.offsetY;
            targetX -= this.offsetX ;
            break;

        case this.targets.TOP_RIGHT:
            targetX += this.offsetX ;
            targetY += this.offsetY;
            break;

        case this.targets.BOTTOM_LEFT:
            targetY -= this.offsetY;
            targetX -= this.offsetX ;
            break;

        case this.targets.BOTTOM_RIGHT:
            targetX += this.offsetX ;
            targetY -= this.offsetY;
            break;

        case this.targets.WAIT:
            
            break;
        default:
            this.target= this.targets.WAIT;
            break;
    }


}