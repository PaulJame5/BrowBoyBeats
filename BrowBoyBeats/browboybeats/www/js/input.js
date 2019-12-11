/* Input Detection for Player *//* Input Detection for Player */

class Input
{
    constructor()
    {
        document.addEventListener('keyup', function(e) {e.preventDefault();}, {passive: false});
        document.addEventListener('keydown', function(e) {e.preventDefault();}, {passive: false});
        this.boundRecursiveUpdate = () => this.update(this);


        // Initialise values to be read from other scripts
        this.pressedLeft = false;
        this.pressedRight = false;
        this.pressedUp = false;
        this.pressedDown = false;
    }

    initSelf()
    {
        document.addEventListener("keydown", () => this.onInputDown(event)); 
        document.addEventListener("keyup", () => this.onInputUp(event)); 
    }

    
    onInputDown(e)
    {
        // Left
        if(e.keyCode == 37)
        {
            this.pressedLeft = true;
        }
        // Right
        else if (e.keyCode == 39)
        {
            this.pressedRight = true;
        }
        
        // Down
        if(e.keyCode == 38)
        {
            this.pressedUp = true;
        }
        // Up
        else if (e.keyCode == 40)
        {
            this.pressedDown = true;
        }

    }

    onInputUp(e)
    {
        if(e.keyCode == 37)
        {
            this.pressedLeft = false;
        }
        else if (e.keyCode == 39)
        {
            this.pressedRight = false;
        }

        
        // Down
        if(e.keyCode == 38)
        {
            this.pressedUp = false;
        }
        // Up
        else if (e.keyCode == 40)
        {
            this.pressedDown = false;
        }
    }

   
    
}
Player.prototype.onTouchStart = function(e)
{
    this.held =true;
    this.touches = e.touches;
/**
  get the start of touch position x and y create two variables and store the start x and y
*/
    this.startX = e.touches[0].clientX;
    this.startY = e.touches[0].clientY;
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
    this.endX = e.changedTouches[0].clientX;
    this.endY = e.changedTouches[0].clientY;
/**
 * sets up the line
 */

    this.startX = this.endX;
    this.startY = this.endY;

}


Player.prototype.getName = function()
{
    return this.name;
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
        this.swipped = false;
       
        console.log("A swipe was done in game");
    }

    this.held = false;

    if(timeLapsed >= 1)
    {
    
        this.tapped = true;
    }
   

}




/* End Input Detection for Player */
