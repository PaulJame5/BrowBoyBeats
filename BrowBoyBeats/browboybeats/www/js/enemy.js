// This is the enemy class where there are fuctions readily availble to be used



// enemy Class
function Enemy(init_position={x:0.0,y:0.0},src="",context,player)
{
    this.name = name;
    this.transform = new Transform(init_position); // initilised Values

    this.target={x:0,y:0};
    input = new Input();
    input.initSelf();
    this.input = input;
    this.player = player;
    this.HIVE_MIND_ID = 0;
    this.attackMode = false;
    this.timeInbetweenAttacking = 1.8;
    this.timeSinceLastAttack;
    this.speed = 3;
    this.position = init_position;
    this.playerIndexTargetChoice = 0;
    this.deathTime = 10;
    this.initSpritesheet(src, context);
    this.offset = {x:75,y: 100};
    this.health = 100;
    this.attack = false;
    this.healthCost = 10;
    this.attributes = new Attributes(70,10,25,false,true);
   
    //=======================
    this.Targets = 
    {
        TOP_LEFT: 0,
        TOP_RIGHT: 1,
        BOTTOM_LEFT: 2,
        BOTTOM_RIGHT: 3,
        RIGHT: 4,
        LEFT: 5,
        UP:6,
        DOWN: 7,
        ATTACK_PLAYER: 8
    }
    
    this.currentTarget = this.Targets.TOP_LEFT;

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
Enemy.prototype.move = function(Player)
{
    this.targetPosition={x:this.position.x,y:this.position.y};

   // this.offset = {x:Math.floor(Math.random() * (7 -   + 1)),y: 100};

    if(this.transform.position.getX() === this.targetPosition.x
    && this.transform.position.getY() === this.targetPosition.y)
    {
       this.random = Math.floor(Math.random() * (7 - 1 + 1));
    }
    if(this.random == 0)
    this.currentTarget = this.Targets.TOP_LEFT;
    else if(this.random === 1)
    this.currentTarget = this.Targets.TOP_RIGHT;
    else if(this.random === 2)
    this.currentTarget = this.Targets.BOTTOM_LEFT;
    else if(this.random === 3)
    this.currentTarget = this.Targets.BOTTOM_RIGHT;
    else if(this.random === 4)
    this.currentTarget = this.Targets.ATTACK_PLAYER;
    else if(this.random === 5)
    this.currentTarget = this.Targets.UP;
    else if(this.random === 6)
    this.currentTarget = this.Targets.DOWN;
    else if(this.random === 7)
    this.currentTarget = this.Targets.RIGHT;
    else if(this.random === 8)
    this.currentTarget = this.Targets.LEFT;

    switch (this.currentTarget)
    {
        case this.Targets.TOP_LEFT:
            this.target.y = this.player.transform.position.getY() - this.offset.y;
            this.target.x = this.player.transform.position.getX() - this.offset.x;
         break;
        case this.Targets.TOP_RIGHT:
             this.target.y = this.player.transform.position.getY() - this.offset.y;
             this.target.x = this.player.transform.position.getX() +this.offset.x ;
         break;
        case this.Targets.BOTTOM_LEFT:
            this.target.y = this.player.transform.position.getY()+this.offset.y;
            this.target.x = this.player.transform.position.getX()-this.offset.x ;
            break;
        case this.Targets.BOTTOM_RIGHT:
            this.target.y = this.player.transform.position.getY()+this.offset.y;
            this.target.x = this.player.transform.position.getX()+this.offset.x ;
             break;
        case this.Targets.ATTACK_PLAYER:
            this.target.y = this.player.transform.position.getY();
            this.target.x = this.player.transform.position.getX();
            this.attack = true;
             break;
        case this.Targets.UP:
            this.target.y = this.player.transform.position.getY() - this.offset.y;
            break;
        case this.Targets.DOWN:
            this.target.y = this.player.transform.position.getY() +this.offset.y;
             break;
        case this.Targets.RIGHT:
            this.target.x = this.player.transform.position.getX()+this.offset.x;
            break;
            case this.Targets.LEFT:
            this.target.x = this.player.transform.position.getX() -this.offset.x;
            break;      
         default:
             this.target= this.Targets.WAIT;
             break;
     }
    this.position={x:this.target.x,y:this.target.y};
    //this.distance = this.transform.distance(this.transform.position.get(), this.player.transform.position.get());
    // works
    this.moveTo = this.transform.moveTowards(this.transform.position.get(),this.position, this.speed);
    this.transform.position.setPosition(this.moveTo);

    if(this.distance < 0.5)
    {
        
        // Attack Player
        
        //this.player.health-=1;
        
    }
} // end eney move
Enemy.prototype.reduceHealth = function(x = 0)
{
    this.attributes.setHealth(this.attributes.getHealth() - x);

    if(this.attributes.getHealth() <= 0)
    {
        this.attributes.setAlive(false);
    }
}

Enemy.prototype.getPosition = function()
{
    return this.transform.position.getPosition();
}

Enemy.prototype.isAlive = function()
{
    return this.attributes.isAlive();
}

Enemy.prototype.setDead = function()
{
    this.attributes.setAlive(false);
}






