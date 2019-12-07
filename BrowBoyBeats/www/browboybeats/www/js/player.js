// This is the player class where there are fuctions readily availble to be used



// Player Class
function Player(init_position={x:0.0,y:0.0}, name="",src="",context)
{
    this.name = name;
    
    this.transform = new Transform(init_position); // initilised Values

    input = new Input();
    input.initSelf();
    this.input = input;
    this.tapped = false;
    this.swipedRight = false;
    this.swipedLeft = false;
    this.speed = 1;
    this.swipped = false;
    this.timer =0;
    this.initSpritesheet(src, context);
    
    console.log("Initialised Player");


    document.addEventListener("touchstart", () => this.onTouchStart(event)); 
    document.addEventListener("touchmove", () => this.onTouchMove(event)); 
    document.addEventListener("touchend", () => this.onTouchEnd(event)); 
   
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
Player.prototype.update = function(tappedX, tappedY)
{
    this.move(tappedX, tappedY);
} // end update

// Move funstion for player
Player.prototype.move = function(tappedX , tappedY)
{
    this.timeMove1 = new Date();
    this.timeMove2 = new Date();
    var moveTimeLapse =this.timeMove2-this.timeMove1;
    //console.log(this.timeMove1);
    // Up Down Movement
   
    var startPos =  new Vector2(this.startForX , this.startForY);
    var endPos = new Vector2(this.endSwipeX ,this.endSwipeY);
    
    //newDirection = Vector3.Normalize(direction);
    this.direction = new Vector2(startPos.x - endPos.x , startPos.y - endPos.y); 
    this.newDirection = new Vector2(this.direction.normalise());

    this.testVec = new Vector2(this.startForX  , this.startForY)
    console.log(this.endSwipeX +"," + this.endSwipeY)
    if(this.swipped === true && this.timer !== 10)
    {
        this.timer = this.timer +1;

        this.transform.position.setX(this.transform.position.getX() + this.endSwipeX * this.speed);
        this.transform.position.setY(this.transform.position.getY() + this.endSwipeY * this.speed);
    }
    else if( this.timer === 10)
    {
        this.timer =0;
        this.swipped = false
    }
  /**  if(this.tapped === true && this.tappedX > 500|| this.input.pressedRight)
    {
        // get current x position and then subtract speed
        this.transform.position.setX(this.transform.position.getX() + this.speed);
    }
    if(this.tapped === true && this.tappedX < 500||this.input.pressedLeft )
    {
        // get current x position and then add speed
        this.transform.position.setX(this.transform.position.getX() - this.speed);
        
    } // end left right movement check
    if(this.tapped === true && this.tappedY > 1000 || this.input.pressedDown)
    {
        // get current y position and then subtract speed
        this.transform.position.setY(this.transform.position.getY() + this.speed);
    }
    if(this.tapped === true && this.tappedY < 1000 || this.input.pressedUp)
    {
        // get current y position and then add speed
        this.transform.position.setY(this.transform.position.getY() - this.speed);
    } // end up down movement check
*/


} // end move
Player.prototype.onTouchStart = function(e)
{

    this.touches = e.touches;
/**
  get the start of touch position x and y create two variables and store the start x and y
*/
    this.startX = e.touches[0].clientX* window.devicePixelRatio;
    this.startY = e.touches[0].clientY* window.devicePixelRatio;
    this.startForX = this.startX;
    this.startForY = this.startY;
    this.time1 = new Date();
    this.tappedX = this.startForX;
    this.tappedY =this.startForY;
    this.tapped = true;

    //console.log("Start of swipe " +this.startX +  "," + this.startY);
}

/**
* 
* Function to get whether there is a move across the screen, also draws a line along the movement and get the end x and y
* also update start to be at the end as  finger is moved 
* @param {Object} e event hanlder
*     
*/
Player.prototype.onTouchMove = function(e)
{
    this.changedTouches = e.changedTouches;
    this.endX = e.changedTouches[0].clientX * window.devicePixelRatio;
    this.endY = e.changedTouches[0].clientY * window.devicePixelRatio;
/**
 * sets up the line
 */

    this.startX = this.endX;
    this.startY = this.endY;

}

/**
* 
* Function to get the end of a touch and the time when touch ends
* also gets lenght of swipe to determine if its long enough to swipe.
* @param {Object} e event hanlder
*    
*/
Player.prototype.onTouchEnd = function(e)
{
    this.tapped = false;
    var x;
    var y;
/**
 * get the time and timplaspsed
 */
    this.time2 = new Date();
    var timeLapsed =this.time2 -this.time1;
/** 
*get and set the end x and y 
*get value for x squared and multiply
*/
    this.endSwipeX = this.endX;
    this.endSwipeY = this.endY;
    x = this.endSwipeX - this.startForX;
    x = x * x;

/** 
*get value for y squared and multiply
* get the lenght of swipe usin the square root of x +y
*/
    y = this.endSwipeY - this.startForY;
    y = y * y;

    this.LeghtOfSwipe = Math.sqrt((x+y));
/**
 * check if the time is greater tham 360 and thhe swipe is greater than 240
 */
    if(timeLapsed >= 360 && this.LeghtOfSwipe >= 240)
    {
        this.tapped = false;
        this.swipped = true;
        console.log("A swipe was done in game");
    }
    //console.log("End of swipe " +this.endSwipeX +  "," + this.endSwipeY);

}