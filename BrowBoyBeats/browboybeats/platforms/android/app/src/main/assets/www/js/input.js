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




/* End Input Detection for Player */
