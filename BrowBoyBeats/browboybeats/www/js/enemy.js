// This is the enemy class where there are fuctions readily availble to be used



// enemy Class
function Enemy(init_position={x:0.0,y:0.0},src="",context,player)
{
    this.name = name;
    
    this.transform = new Transform(init_position); // initilised Values

    input = new Input();
    input.initSelf();
    this.input = input;
    this.player = player;
    this.HIVE_MIND_ID = 0;
    this.attackMode = false;
    this.timeInbetweenAttacking = 1.8;
    this.timeSinceLastAttack;
    this.speed = 5;
    this.position = init_position;
    this.playerIndexTargetChoice = 0;
    this.deathTime = 10;
    this.initSpritesheet(src, context);
    this.offsetX = 2.4;
    this.offsetY = 3;
    this.health = 100;
    this.healthCost = 10;
   
    //=======================
    this.Targets = 
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
    
    this.currentTarget = this.Targets.LEFT;
    
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
Enemy.prototype.getEnemyPosition = function()
{
    return pos={x:this.transform.position.getX(),y:this.transform.position.getY()};
}

  

// All rendering calls for player should go in here
Enemy.prototype.render = function()
{
    // Draw Player Sprite in here
    this.enemySprite.update();
    if(this.health <= 0)
    {
        this.deathTime =  this.deathTime -1;
    }
    if(this.health > 0 && this.deathTime !== 0 || this.deathTime === 2 
        || this.deathTime === 4 || this.deathTime === 6 || this.deathTime === 8)
    {
        this.enemySprite.render(this.transform.position.get());
    }
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

} 
Enemy.prototype.takeDamage = function()
{
    this.health = this.health - this.healthCost;
}
Enemy.prototype.move = function()
{
    // this.currentTarget = this.Targets.BOTTOM;
    // switch (this.currentTarget)
    // {
    //     case this.Targets.BOTTOM:
    //         this.target.y -= this.offsetY;
    //         break;
    //     case this.Targets.TOP:
    //         this.target.y += this.offsetY;
    //         break;
    //     case this.Targets.LEFT:
    //         this.target.x -= this.offsetX ;
    //         break;
    //     case this.Targets.RIGHT:
    //         this.target.x+= this.offsetX ;
    //         break;
    //     case this.Targets.TOP_LEFT:
    //         this.target.y += this.offsetY;
    //         this.target.x -= this.offsetX ;
    //         break;
    //     case this.Targets.TOP_RIGHT:
    //         this.target.x += this.offsetX ;
    //         this.target.y += this.offsetY;
    //         break;
    //     case this.Targets.BOTTOM_LEFT:
    //         this.target.y -= this.offsetY;
    //         this.target.x -= this.offsetX ;
    //         break;
    //     case this.Targets.BOTTOM_RIGHT:
    //         this.target.x += this.offsetX ;
    //         this.target.y -= this.offsetY;
    //         break;
    //     case this.Targets.WAIT: 
    //         break;
    //     default:
    //         this.target= this.Targets.WAIT;
    //         break;
    // }
  
    this.distance = this.transform.distance(this.transform.position.get(), this.player.transform.position.get());
    // works
    
    this.moveTo = this.transform.moveTowards(this.transform.position.get(),this.player.transform.position.get(), this.speed);


    this.transform.position.setPosition(this.moveTo);


    if(this.distance < 0.5)
    {
        // Attack Player
    }


}



