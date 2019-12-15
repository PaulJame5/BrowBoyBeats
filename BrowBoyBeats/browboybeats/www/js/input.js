/* Input Detection for Player *//* Input Detection for Player */

class Input
{
    constructor()
    {
        document.addEventListener('keyup', function(e) {e.preventDefault();}, {passive: false});
        document.addEventListener('keydown', function(e) {e.preventDefault();}, {passive: false});
        document.addEventListener('touchstart', function(e) {e.preventDefault();}, {passive: false});
        document.addEventListener('touchmove', function(e) {e.preventDefault();}, {passive: false});
        document.addEventListener('touchend', function(e) {e.preventDefault();}, {passive: false});
        this.boundRecursiveUpdate = () => this.update(this);


        // Initialise values to be read from other scripts
        this.pressedLeft = false;
        this.pressedRight = false;
        this.pressedUp = false;
        this.pressedDown = false;
        this.attack =false;

        // values for use with touch input
        this.direction = {x:0,y:0};
        this.direction.x = 0;
        this.direction.y = 0;

        this.startPosition = {x:0,y:0};
        this.startPosition.x = 0;
        this.startPosition.y = 0;

        this.timeTouchBeganAt = 0.0;
        this.timeDelayToCountAsAttackInput = 0.2;
        this.deadZone = 40;
        this.positionReset = {x:0,y:0};

    }

    initSelf()
    {
        document.addEventListener("keydown", () => this.onInputDown(event)); 
        document.addEventListener("keyup", () => this.onInputUp(event)); 
        document.addEventListener("touchstart", () => this.onTouchStart(event));
        document.addEventListener("touchmove", () => this.onTouchMove(event));
        document.addEventListener("touchend", () => this.onTouchEnd(event));
    }


    onTouchStart(e)
    {
    this.touches = e.touches;
    /**
         get the start of touch position x and y create two variables and store the start x and y
    */
    this.startPosition.x = e.touches[0].clientX;
    this.startPosition.y = e.touches[0].clientY;

    this.timeTouchBeganAt = Date.now();
    
    }

    /**
    * 
    * Function to get whether there is a move across the screen, also draws a line along the movement and get the end x and y
    * also update start to be at the end as  finger is moved 
    * @param {Object} e event hanlder
    *     
    */
    onTouchMove(e)
    {
        
        this.direction.x = e.changedTouches[0].clientX - this.startPosition.x;
        this.direction.y = e.changedTouches[0].clientY - this.startPosition.y;

        this.directionalInputCheck();
        
    
    } // on touch
    /**
    * Function to get the end of a touch and the time when touch ends
    * also gets lenght of swipe to determine if its long enough to swipe.
    * @param {Object} e event hanlder
    *    
    */
    onTouchEnd(e)
    {  
        if(this.timeTouchBeganAt + this.timeDelayToCountAsAttackInput < Date.now())
        {
            // Attack is true(Used for the tutorial)
            this.attack = true;
        }
       

        this.startPosition.x = 0;
        this.startPosition.y = 0;
        this.direction.x = 0;
        this.direction.y = 0;

        this.pressedDown = false;
        this.pressedLeft = false;
        this.pressedRight = false;
        this.pressedUp = false;
    } // on touch end end
    /// ================= END TOUCH INPUT ==========================///
    
    directionalInputCheck()
    {
        // left
        if(this.direction.x < -this.deadZone)
        {
            this.pressedLeft = true;
        }
        else
        {
            this.pressedLeft = false;
        }
        // right
        if(this.direction.x > this.deadZone)
        {
            this.pressedRight = true;
        }
        else
        {
            this.pressedRight = false;
        }
        // down is inverted
        if(this.direction.y > this.deadZone)
        {
            this.pressedDown = true;
            
        }
        else
        {
            this.pressedDown = false;
        }
        // up is inverted
        if(this.direction.y < -this.deadZone)
        {
            this.pressedUp = true;
        }
        else
        {
            this.pressedUp = false;
        }
        
        


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
/* End Input Detection for Player */
